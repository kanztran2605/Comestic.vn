// js/auth.js

// Đăng ký
function initSignUpPage() {
    const form = document.getElementById("signup-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullNameInput = document.getElementById("signup-fullname");
        const phoneInput = document.getElementById("signup-phone");
        const emailInput = document.getElementById("signup-email");
        const passwordInput = document.getElementById("signup-password");
        const confirmInput = document.getElementById("signup-confirm");

        const fullName = fullNameInput.value.trim();
        const phone = phoneInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;   // giữ nguyên để kiểm tra khoảng trắng
        const confirm = confirmInput.value;

        // Check bắt buộc
        if (!fullName || !phone || !password || !confirm) {
            alert("Vui lòng nhập đầy đủ thông tin bắt buộc.");
            return;
        }

        const normalizedPassword = password.trim();

        // 1. Độ dài tối thiểu
        if (normalizedPassword.length < 8) {
            alert("Mật khẩu phải có ít nhất 8 ký tự.");
            passwordInput.focus();
            return;
        }

        // 2. Không chứa khoảng trắng
        if (/\s/.test(password)) {
            alert("Mật khẩu không được chứa khoảng trắng.");
            passwordInput.focus();
            return;
        }

        // 3. Ít nhất 1 chữ thường, 1 chữ hoa, 1 chữ số, 1 ký tự đặc biệt
        const hasLower = /[a-z]/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecial = /[!@#$%^&*()\-_+=\{\}\[\]\\|;:«'"<>,.?\/]/.test(password);

        if (!hasLower || !hasUpper || !hasNumber || !hasSpecial) {
            alert("Mật khẩu phải bao gồm ít nhất 1 chữ thường, 1 chữ hoa, 1 chữ số và 1 ký tự đặc biệt.");
            passwordInput.focus();
            return;
        }

        // 4. Không trùng với số điện thoại
        if (password === phone) {
            alert("Mật khẩu không được trùng với số điện thoại.");
            passwordInput.focus();
            return;
        }

        // 5. Không quá đơn giản (một vài mật khẩu phổ biến)
        const weakPasswords = [
            "123456",
            "12345678",
            "123456789",
            "password",
            "qwerty",
            "111111",
            "abc123"
        ];
        if (weakPasswords.includes(password.toLowerCase())) {
            alert("Mật khẩu quá đơn giản, vui lòng chọn mật khẩu khác.");
            passwordInput.focus();
            return;
        }

        // 6. Xác nhận mật khẩu
        if (password !== confirm) {
            alert("Mật khẩu nhập lại không khớp.");
            confirmInput.focus();
            return;
        }

        // Check SĐT đã tồn tại
        const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");
        const existed = accounts.find(acc => acc.username === phone);
        if (existed) {
            alert("Số điện thoại đã được đăng ký.");
            phoneInput.focus();
            return;
        }

        const newId = (Number(localStorage.getItem("lastUserId")) || 0) + 1;

        const newAccount = {
            id: newId,
            fullName,
            username: phone, // dùng SĐT làm tên đăng nhập
            email,
            password: normalizedPassword
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
