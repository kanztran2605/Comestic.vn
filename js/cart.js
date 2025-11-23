// js/cart.js

const CART_KEY = 'cosmetics_cart_v1';
const SELECTED_CART_KEY = 'selectedCart';

// ---- Helpers chung ----

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
}

function saveSelectedCart(items) {
    localStorage.setItem(SELECTED_CART_KEY, JSON.stringify(items || []));
}

function formatCurrencyNumber(num) {
    return num.toLocaleString('vi-VN') + 'đ';
}

// --- LOGIN HELPER DÙNG CHUNG CHO CART / MUA NGAY ---

function requireLoginForCartActions() {
    const currentUserJSON = localStorage.getItem('currentUser');
    if (!currentUserJSON) {
        alert('Bạn cần đăng nhập để thêm vào giỏ hoặc mua hàng.');
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Cho các file khác dùng luôn
window.parsePriceNumber = function (str) {
    return Number((str || '').replace(/\D/g, '')) || 0;
};

// Cập nhật số trên icon giỏ hàng ở header
function updateCartBadge() {
    const badge = document.getElementById('header-cart-count');
    if (!badge) return;

    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
    badge.textContent = totalQty;
}

// Thêm sản phẩm từ 1 nút bất kỳ có data-*
// ✅ CHẶN NẾU CHƯA ĐĂNG NHẬP
// Thêm sản phẩm từ 1 nút bất kỳ có data-*
function addToCartFromButton(btn, options = {}) {
    const {
        redirectToCheckout = false,
        qty = 1
    } = options;

    if (!requireLoginForCartActions()) return;

    const id = btn.dataset.productId;
    if (!id) return;

    const name = btn.dataset.name || '';
    const brand = btn.dataset.brand || '';
    const image = btn.dataset.image || '';
    const price = Number(btn.dataset.price || '0');

    // ===== CASE 1: MUA NGAY =====
    if (redirectToCheckout) {
        // Không đụng tới giỏ hàng chung
        const checkoutItem = {
            id,
            name,
            brand,
            image,
            price,
            qty
        };

        saveSelectedCart([checkoutItem]);

        // Cập nhật lại badge theo giỏ hiện tại (không thay đổi)
        if (typeof updateCartBadge === 'function') {
            updateCartBadge();
        }

        window.location.href = 'checkOut.html';
        return;
    }

    // ===== CASE 2: THÊM VÀO GIỎ =====
    let cart = getCart();
    let item = cart.find(i => i.id === id);

    if (item) {
        item.qty += qty;
    } else {
        item = { id, name, brand, image, price, qty };
        cart.push(item);
    }

    // lưu giỏ chung
    saveCart(cart);

    // Nếu đang ở trang giỏ thì re-render
    renderCartPageIfNeeded();

    alert('Đã thêm vào giỏ hàng!');
}

// Cập nhật tổng tiền ở footer giỏ hàng
function updateCartTotalDisplay() {
    const totalEl = document.getElementById('cart-total');
    if (!totalEl) return;

    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    totalEl.textContent = formatCurrencyNumber(total);
}

// Render giỏ hàng (chỉ chạy ở shoppingCart.html)
function renderCartPageIfNeeded() {
    const wrapper = document.getElementById('cart-table-wrapper');           // khung bảng + tổng tiền
    const emptyBlock = document.getElementById('empty-cart')                // layout mới
        || document.getElementById('cart-empty');           // fallback id cũ
    const tbody = document.getElementById('cart-items-body');
    const summaryRow = document.getElementById('cart-summary-row');        // nếu bạn có bọc "Tổng tạm tính"

    // Không phải trang giỏ
    if (!wrapper && !emptyBlock && !tbody) return;

    const cart = getCart();

    // ----- GIỎ HÀNG TRỐNG -----
    if (!cart.length) {
        if (emptyBlock) emptyBlock.style.display = 'block';
        if (wrapper) wrapper.style.display = 'none';
        if (summaryRow) summaryRow.style.display = 'none';
        if (tbody) tbody.innerHTML = '';

        updateCartTotalDisplay(); // cho chắc, set về 0đ
        return;
    }

    // ----- CÓ SẢN PHẨM -----
    if (emptyBlock) emptyBlock.style.display = 'none';
    if (wrapper) wrapper.style.display = 'block';
    if (summaryRow) summaryRow.style.display = '';

    let html = '';
    cart.forEach(item => {
        const lineTotal = item.price * item.qty;
        html += `
            <tr>
                <td>
                    <div class="cart-product-info">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <div>${item.name}</div>
                            <div class="cart-product-brand">${item.brand}</div>
                        </div>
                    </div>
                </td>
                <td>${formatCurrencyNumber(item.price)}</td>
                <td>
                    <input 
                        type="number" 
                        min="1" 
                        value="${item.qty}" 
                        class="cart-qty-input"
                        data-qty-id="${item.id}"
                    >
                </td>
                <td data-item-total="${item.id}">
                    ${formatCurrencyNumber(lineTotal)}
                </td>
                <td>
                    <button class="btn btn-outline" data-remove-id="${item.id}">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    });

    if (tbody) {
        tbody.innerHTML = html;
    }
    updateCartTotalDisplay();
}

// ---- Event delegation chung cho toàn site ----
document.addEventListener('click', function (e) {
    // ✅ 1. Chặn bấm icon GIỎ HÀNG nếu chưa login
    const cartButton = e.target.closest('.cart-button');
    if (cartButton) {
        const currentUserJSON = localStorage.getItem('currentUser');
        if (!currentUserJSON) {
            e.preventDefault();
            alert('Bạn cần đăng nhập để xem giỏ hàng.');
            window.location.href = 'login.html';
            return;
        }
        // nếu đã đăng nhập thì cho browser tự follow href
    }

    // 2. Thêm vào giỏ
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
        e.preventDefault();
        addToCartFromButton(addBtn, { qty: 1, redirectToCheckout: false });
        return;
    }

    // 3. Mua ngay
    const buyBtn = e.target.closest('[data-buy-now]');
    if (buyBtn) {
        e.preventDefault();
        addToCartFromButton(buyBtn, { qty: 1, redirectToCheckout: true });
        return;
    }

    // 4. Xóa sản phẩm trong giỏ
    const removeBtn = e.target.closest('[data-remove-id]');
    if (removeBtn) {
        e.preventDefault();
        const id = removeBtn.dataset.removeId;
        let cart = getCart().filter(item => item.id !== id);
        saveCart(cart);
        renderCartPageIfNeeded();
        return;
    }

    // 5. Nút "Thanh toán" trong giỏ
    const checkoutBtn = e.target.closest('#btn-checkout');
    if (checkoutBtn) {
        const cart = getCart();
        if (!cart.length) {
            e.preventDefault();
            alert('Giỏ hàng đang trống, hãy thêm sản phẩm trước khi thanh toán.');
        } else {
            // Thanh toán toàn bộ giỏ hiện tại
            saveSelectedCart(cart);
            // cho trình duyệt tự follow href="checkOut.html"
        }
    }
});

// Thay đổi số lượng
document.addEventListener('input', function (e) {
    const input = e.target.closest('input[data-qty-id]');
    if (!input) return;

    const id = input.dataset.qtyId;
    let qty = parseInt(input.value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
    input.value = qty;

    let cart = getCart();
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty = qty;
    saveCart(cart);

    const cell = document.querySelector(`[data-item-total="${id}"]`);
    if (cell) {
        const lineTotal = item.price * item.qty;
        cell.textContent = formatCurrencyNumber(lineTotal);
    }

    updateCartTotalDisplay();
});

// Khi load trang
document.addEventListener('DOMContentLoaded', function () {
    // ✅ Nếu user cố gõ thẳng shoppingCart.html khi chưa login -> chặn luôn
    const path = window.location.pathname;
    if (path.endsWith('shoppingCart.html')) {
        const currentUserJSON = localStorage.getItem('currentUser');
        if (!currentUserJSON) {
            alert('Bạn cần đăng nhập để xem giỏ hàng.');
            window.location.href = 'login.html';
            return;
        }
    }

    updateCartBadge();
    renderCartPageIfNeeded();
});
