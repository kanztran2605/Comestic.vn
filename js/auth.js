// js/auth.js

// Đăng ký
function initSignUpPage() {
    const form = document.getElementById("signup-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("signup-fullname").value.trim();
        const phone = document.getElementById("signup-phone").value.trim();
        const email = document.getElementById("signup-email").value.trim();
        const password = document.getElementById("signup-password").value.trim();
        const confirm = document.getElementById("signup-confirm").value.trim();

        if (!fullName || !phone || !password || !confirm) {
            alert("Vui lòng nhập đầy đủ thông tin bắt buộc.");
            return;
        }

        if (password.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự.");
            return;
        }

        if (password !== confirm) {
            alert("Mật khẩu nhập lại không khớp.");
            return;
        }

        const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");

        const existed = accounts.find(acc => acc.username === phone);
        if (existed) {
            alert("Số điện thoại đã được đăng ký.");
            return;
        }

        const newId = (Number(localStorage.getItem("lastUserId")) || 0) + 1;

        const newAccount = {
            id: newId,
            fullName,
            username: phone, // dùng SĐT làm tên đăng nhập
            email,
            password
        };

        accounts.push(newAccount);
        localStorage.setItem("accounts", JSON.stringify(accounts));
        localStorage.setItem("lastUserId", newId);

        // Auto login sau khi đăng ký
        localStorage.setItem("currentUser", JSON.stringify(newAccount));

        alert("Đăng ký thành công! Bạn đã được đăng nhập.");
        window.location.href = "index.html";
    });
}

// Đăng nhập
function initLoginPage() {
    const form = document.getElementById("login-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const phoneOrEmail = document.getElementById("login-phone").value.trim();
        const password = document.getElementById("login-password").value.trim();

        if (!phoneOrEmail || !password) {
            alert("Vui lòng nhập đủ thông tin đăng nhập.");
            return;
        }

        const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
        const user = accounts.find(acc =>
            (acc.username === phoneOrEmail || acc.email === phoneOrEmail) &&
            acc.password === password
        );

        if (!user) {
            alert("Sai tài khoản hoặc mật khẩu.");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Đăng nhập thành công!");
        window.location.href = "index.html";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const path = window.location.pathname;
    if (path.endsWith("signUp.html")) {
        initSignUpPage();
    } else if (path.endsWith("login.html")) {
        initLoginPage();
    }
});
