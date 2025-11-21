// js/checkOut.js

function formatVnd(num) {
    return (Number(num) || 0).toLocaleString('vi-VN') + 'đ';
}

function normalizeItem(raw) {
    if (!raw) return null;
    return {
        id: raw.id,
        name: raw.name,
        brand: raw.brand,
        image: raw.image,
        price: Number(raw.price) || 0,
        qty: raw.qty ?? raw.quantity ?? 1,
    };
}

function initCheckoutPage() {
    const summaryEl = document.getElementById('checkout-summary');
    const totalEl = document.getElementById('checkout-total');
    if (!summaryEl) return;

    // Lấy giỏ hàng đang thanh toán
    let items = [];
    try {
        const raw = JSON.parse(localStorage.getItem('selectedCart') || '[]');
        items = raw.map(normalizeItem).filter(Boolean);
    } catch (e) {
        items = [];
    }

    if (!items.length) {
        summaryEl.innerHTML =
            '<p class="checkout-empty-note">Không có sản phẩm nào để thanh toán.</p>';
        if (totalEl) totalEl.textContent = formatVnd(0);
        return;
    }

    let total = 0;

    summaryEl.innerHTML = items
        .map((item) => {
            const lineTotal = item.price * item.qty;
            total += lineTotal;
            return `
                <div class="checkout-item">
                    <div class="checkout-item-main">
                        <img src="${item.image}" alt="${item.name}">
                        <div>
                            <div class="checkout-item-name">${item.name}</div>
                            <div class="checkout-item-meta">
                                x${item.qty} • ${formatVnd(item.price)}
                            </div>
                        </div>
                    </div>
                    <div class="checkout-item-price">
                        ${formatVnd(lineTotal)}
                    </div>
                </div>
            `;
        })
        .join('');

    if (totalEl) totalEl.textContent = formatVnd(total);

    // Prefill user nếu có
    // Prefill thông tin người dùng nếu có
    try {
        const currentUserJSON = localStorage.getItem('currentUser');
        if (currentUserJSON) {
            const currentUser = JSON.parse(currentUserJSON);

            const nameInput = document.getElementById('checkout-name');
            const phoneInput = document.getElementById('checkout-phone');
            const emailInput = document.getElementById('checkout-email');
            const cityInput = document.getElementById('checkout-city');
            const districtInput = document.getElementById('checkout-district');
            const addressInput = document.getElementById('checkout-address');

            if (nameInput && currentUser.fullName)
                nameInput.value = currentUser.fullName;
            if (phoneInput && currentUser.username)
                phoneInput.value = currentUser.username;
            if (emailInput && currentUser.email)
                emailInput.value = currentUser.email;
            if (cityInput && currentUser.city)
                cityInput.value = currentUser.city;
            if (districtInput && currentUser.district)
                districtInput.value = currentUser.district;
            if (addressInput && currentUser.address)
                addressInput.value = currentUser.address;
        }
    } catch (e) {
        console.error(e);
    }

    const form = document.getElementById('checkout-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            handleCheckoutSubmit(total);
        });
    }

    const backBtn = document.getElementById('checkout-back-home');
    if (backBtn) {
        backBtn.addEventListener('click', function () {
            // Trang chủ của bạn giờ là index.html
            window.location.href = 'index.html';
        });
    }
}

function handleCheckoutSubmit(totalAmount) {
    const name = document.getElementById('checkout-name').value.trim();
    const phone = document.getElementById('checkout-phone').value.trim();
    const email = document.getElementById('checkout-email').value.trim();
    const city = document.getElementById('checkout-city').value.trim();
    const district = document.getElementById('checkout-district').value.trim();
    const address = document.getElementById('checkout-address').value.trim();
    const note = document.getElementById('checkout-note').value.trim();
    const paymentSelect = document.getElementById('payment-method');
    const payment = paymentSelect ? paymentSelect.value : 'Thanh toán khi nhận hàng (COD)';

    if (!name || !phone || !city || !address) {
        alert('Vui lòng nhập đầy đủ họ tên, số điện thoại, tỉnh/thành phố và địa chỉ.');
        return;
    }

    const orderInfo = {
        name,
        phone,
        email,
        city,
        district,
        address,
        note,
        payment,
        total: totalAmount,
        createdAt: new Date().toISOString(),
    };

    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));

    localStorage.removeItem('cosmetics_cart_v1');
    localStorage.removeItem('selectedCart');

    window.location.href = 'bill.html';
}

document.addEventListener('DOMContentLoaded', initCheckoutPage);
