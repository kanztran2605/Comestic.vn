// js/shoppingCart.js

function renderCartPage() {
    const cart = getCart();
    const emptyEl = document.getElementById("cart-empty");
    const wrapperEl = document.getElementById("cart-table-wrapper");
    const tbody = document.getElementById("cart-table-body");
    const totalEl = document.getElementById("cart-total");

    if (!emptyEl || !wrapperEl || !tbody || !totalEl) return;

    if (!cart.length) {
        emptyEl.style.display = "block";
        wrapperEl.style.display = "none";
        totalEl.textContent = formatCurrency(0);
        updateHeaderCartCount();
        return;
    }

    emptyEl.style.display = "none";
    wrapperEl.style.display = "block";

    let total = 0;

    const rowsHtml = cart.map(item => {
        const lineTotal = item.price * item.quantity;
        total += lineTotal;
        return `
            <tr>
                <td>
                    <div class="cart-product-info">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <div class="cart-product-name">${item.name}</div>
                            <div style="font-size:1.2rem;color:#777;">${item.brand}</div>
                        </div>
                    </div>
                </td>
                <td>${formatCurrency(item.price)}</td>
                <td>
                    <input type="number"
                           class="cart-qty-input"
                           min="1"
                           value="${item.quantity}"
                           data-product-id="${item.id}">
                </td>
                <td>${formatCurrency(lineTotal)}</td>
                <td>
                    <button class="btn btn-outline cart-remove-btn"
                            data-product-id="${item.id}">
                        Xóa
                    </button>
                </td>
            </tr>
        `;
    }).join("");

    tbody.innerHTML = rowsHtml;
    totalEl.textContent = formatCurrency(total);
    updateHeaderCartCount();
}

// Cập nhật số lượng
function updateCartItemQuantity(productId, newQty) {
    let cart = getCart();
    const idx = cart.findIndex(item => item.id === productId);
    if (idx === -1) return;

    const qty = Math.max(1, parseInt(newQty || "1", 10));
    cart[idx].quantity = qty;
    saveCart(cart);
    renderCartPage();
}

// Xóa 1 sản phẩm khỏi giỏ
function removeCartItem(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCartPage();
}

// Xử lý click "Thanh toán"
function handleCheckoutClick() {
    const cart = getCart();
    if (!cart.length) {
        alert("Giỏ hàng đang trống, không thể thanh toán.");
        return;
    }

    // Lưu giỏ hàng hiện tại để dùng ở trang checkOut
    localStorage.setItem("checkoutCart", JSON.stringify(cart));
    window.location.href = "checkOut.html";
}

document.addEventListener("DOMContentLoaded", function () {
    renderCartPage();

    const tbody = document.getElementById("cart-table-body");
    const checkoutBtn = document.getElementById("btn-checkout");

    // Event delegation cho thay đổi số lượng + xóa
    if (tbody) {
        tbody.addEventListener("change", function (e) {
            if (e.target.classList.contains("cart-qty-input")) {
                const id = e.target.dataset.productId;
                updateCartItemQuantity(id, e.target.value);
            }
        });

        tbody.addEventListener("click", function (e) {
            if (e.target.classList.contains("cart-remove-btn")) {
                const id = e.target.dataset.productId;
                if (confirm("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ?")) {
                    removeCartItem(id);
                }
            }
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", handleCheckoutClick);
    }
});
