// js/user.js

// ----- HEADER AUTH (avatar + tên + dropdown) -----
function setupHeaderAuth() {
    const currentUserJSON = localStorage.getItem("currentUser");
    const currentUser = currentUserJSON ? JSON.parse(currentUserJSON) : null;

    const authLink = document.getElementById("header-auth-text");

    if (!authLink) return;

    if (currentUser) {
        // Hiển thị HỌ TÊN trước, không dùng số điện thoại
        const displayName = currentUser.fullName || currentUser.username || "Tài khoản";

        // Biến authLink thành nút toggle dropdown
        authLink.href = "javascript:void(0)";
        authLink.classList.add("header-user-toggle");
        authLink.innerHTML = `
            <img src="../images/icon/user.png" alt="User" class="header-user-avatar">
            <span class="header-user-name">${displayName}</span>
            <i class="fas fa-chevron-down header-user-caret"></i>
        `;

        // Tạo dropdown nếu chưa có
        let dropdown = document.getElementById("header-user-dropdown");
        if (!dropdown) {
            dropdown = document.createElement("div");
            dropdown.id = "header-user-dropdown";
            dropdown.className = "header-user-dropdown";
            dropdown.innerHTML = `
                <a href="personalInformation.html" class="header-user-item">
                    Chỉnh sửa thông tin cá nhân
                </a>
                <button type="button" class="header-user-item header-user-logout" id="header-logout-btn">
                    Đăng xuất
                </button>
            `;
            // append ngay sau authLink trong .header-right
            authLink.parentNode.appendChild(dropdown);
        }
    } else {
        // Chưa đăng nhập
        authLink.classList.remove("header-user-toggle");
        authLink.innerHTML = "Đăng nhập / Đăng ký";
        authLink.href = "login.html";

        const dropdown = document.getElementById("header-user-dropdown");
        if (dropdown) dropdown.remove();
    }

    // Cập nhật badge giỏ hàng dùng hàm trong cart.js (nếu có)
    if (typeof updateCartBadge === "function") {
        updateCartBadge();
    }
}

// ----- DROPDOWN TOGGLE + LOGOUT -----
function setupHeaderEvents() {
    document.addEventListener("click", function (e) {
        const authLink = document.getElementById("header-auth-text");
        const dropdown = document.getElementById("header-user-dropdown");

        // Nếu chưa có user dropdown thì bỏ qua
        if (!authLink || !dropdown) return;

        const clickedToggle = authLink.contains(e.target);
        const clickedDropdown = dropdown.contains(e.target);

        if (clickedToggle) {
            // Toggle dropdown
            dropdown.classList.toggle("show");
        } else if (!clickedDropdown) {
            // Click ra ngoài -> đóng dropdown
            dropdown.classList.remove("show");
        }

        // ✅ Xử lý nút Đăng xuất
        const logoutBtn = e.target.closest("#header-logout-btn");
        if (logoutBtn) {
            e.preventDefault();
            if (confirm("Bạn có chắc muốn đăng xuất?")) {
                // Xóa thông tin đăng nhập
                localStorage.removeItem("currentUser");

                // ✅ Xóa giỏ hàng các kiểu
                localStorage.removeItem("cosmetics_cart_v1"); // CART_KEY mới
                localStorage.removeItem("selectedCart");       // giỏ đang thanh toán
                localStorage.removeItem("cart");               // nếu còn giỏ kiểu cũ

                // Nếu hàm updateCartBadge có tồn tại (trong cart.js) thì gọi cho chắc
                if (typeof updateCartBadge === "function") {
                    updateCartBadge();
                }

                // Về trang chủ
                window.location.href = "index.html";
            }
        }
    });
}

// ====== TRANG THÔNG TIN CÁ NHÂN ======
function initPersonalInfoPage() {
    const currentUserJSON = localStorage.getItem("currentUser");
    const currentUser = currentUserJSON ? JSON.parse(currentUserJSON) : null;

    if (!currentUser) {
        alert("Bạn cần đăng nhập.");
        window.location.href = "login.html";
        return;
    }

    // Lấy element
    const fullNameInput = document.getElementById("profile-fullname");
    const phoneInput = document.getElementById("profile-phone");
    const emailInput = document.getElementById("profile-email");
    const cityInput = document.getElementById("profile-city");
    const districtInput = document.getElementById("profile-district");
    const addressInput = document.getElementById("profile-address");
    const form = document.getElementById("profile-form");
    const backHomeBtn = document.getElementById("btn-back-home");

    // Đổ dữ liệu từ currentUser
    if (fullNameInput) fullNameInput.value = currentUser.fullName || "";
    if (phoneInput) phoneInput.value = currentUser.username || "";
    if (emailInput) emailInput.value = currentUser.email || "";
    if (cityInput) cityInput.value = currentUser.city || "";
    if (districtInput) districtInput.value = currentUser.district || "";
    if (addressInput) addressInput.value = currentUser.address || "";

    // Nút về trang chủ
    if (backHomeBtn) {
        backHomeBtn.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }

    // Submit form -> lưu thay đổi
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullName = fullNameInput.value.trim();
            const phone = phoneInput.value.trim();
            const email = emailInput.value.trim();
            const city = cityInput.value.trim();
            const district = districtInput.value.trim();
            const address = addressInput.value.trim();

            if (!fullName || !phone) {
                alert("Vui lòng nhập đầy đủ Họ tên và Số điện thoại.");
                return;
            }

            // Cập nhật currentUser
            currentUser.fullName = fullName;
            currentUser.username = phone;
            currentUser.email = email;
            currentUser.city = city;
            currentUser.district = district;
            currentUser.address = address;

            // Lưu lại currentUser
            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            // Cập nhật vào danh sách accounts (giả DB)
            const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
            const idx = accounts.findIndex(acc => acc.id === currentUser.id);
            if (idx !== -1) {
                accounts[idx] = {
                    ...accounts[idx],
                    fullName,
                    username: phone,
                    email,
                    city,
                    district,
                    address
                };
                localStorage.setItem("accounts", JSON.stringify(accounts));
            }

            alert("Đã lưu thay đổi thông tin cá nhân!");
            // Cập nhật lại header (tên user)
            if (typeof setupHeaderAuth === "function") {
                setupHeaderAuth();
            }
        });
    }
}

// ====== KHỞI TẠO CHUNG ======
document.addEventListener("DOMContentLoaded", function () {
    setupHeaderAuth();
    setupHeaderEvents();

    const path = window.location.pathname;
    if (path.endsWith("personalInformation.html")) {
        initPersonalInfoPage();
    }
});
