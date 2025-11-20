// js/bill.js

function formatCurrencyVnd(num) {
    return (Number(num) || 0).toLocaleString('vi-VN') + 'đ';
}

function generateRandomOrderId(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let res = '';
    for (let i = 0; i < length; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return res;
}

function initBillPage() {
    const orderInfoJSON = localStorage.getItem('orderInfo');
    const orderInfo = orderInfoJSON ? JSON.parse(orderInfoJSON) : null;

    if (!orderInfo) {
        const card = document.querySelector('.bill-card');
        if (card) {
            card.innerHTML = `
                <h1>Không tìm thấy đơn hàng</h1>
                <p>Vui lòng đặt lại đơn hoặc quay về trang chủ.</p>
                <button class="btn bill-btn" onclick="location.href='index.html'">
                    Về trang chủ
                </button>
            `;
        }
        return;
    }

    const nameEl = document.getElementById('bill-name');
    const phoneEl = document.getElementById('bill-phone');
    const addressEl = document.getElementById('bill-address');
    const noteEl = document.getElementById('bill-note');
    const totalEl = document.getElementById('bill-total');
    const codeEl = document.getElementById('bill-code');
    const paymentEl = document.getElementById('bill-payment');

    if (nameEl) nameEl.textContent = orderInfo.name || '';
    if (phoneEl) phoneEl.textContent = orderInfo.phone || '';

    if (addressEl) {
        const addr = [orderInfo.address, orderInfo.district, orderInfo.city]
            .filter(Boolean)
            .join(', ');
        addressEl.textContent = addr;
    }

    if (noteEl) {
        noteEl.textContent = orderInfo.note && orderInfo.note.trim()
            ? orderInfo.note
            : 'Không có';
    }

    if (totalEl) totalEl.textContent = formatCurrencyVnd(orderInfo.total);

    if (paymentEl) {
        paymentEl.textContent =
            orderInfo.payment || 'Thanh toán khi nhận hàng (COD)';
    }

    if (codeEl) codeEl.textContent = generateRandomOrderId();

    const continueBtn = document.getElementById('bill-continue');
    if (continueBtn) {
        continueBtn.addEventListener('click', function () {
            window.location.href = 'index.html';
        });
    }
}

document.addEventListener('DOMContentLoaded', initBillPage);