# Cosmetic.vn

Website demo bán mỹ phẩm với **frontend HTML/CSS/JS thuần** và **backend Node.js + Express**.  
Dự án mô phỏng một cửa hàng mỹ phẩm online với giỏ hàng, thanh toán, quản lý tài khoản và chatbot tư vấn skincare.

---

## 🎯 Tính năng chính

- Trang chủ với banner, slider và danh sách sản phẩm nổi bật.
- Danh sách sản phẩm theo thương hiệu:
  - CeraVe, L'Oréal, Vaseline, Cocoon.
- Trang chi tiết sản phẩm:
  - Ảnh sản phẩm, mô tả, dung tích, giá hiện tại, giá cũ, rating…
- Giỏ hàng:
  - Thêm/xóa sản phẩm, cập nhật số lượng, tính tổng tiền (VND).
- Quy trình thanh toán:
  - Trang checkout, nhập thông tin người nhận, chọn phương thức thanh toán.
  - Trang hóa đơn (bill) hiển thị lại toàn bộ thông tin đơn hàng.
- Hệ thống tài khoản:
  - Đăng ký / đăng nhập, validate form khá chặt (email, SĐT, password).
  - Lưu thông tin người dùng trong `localStorage`.
  - Trang thông tin cá nhân (`personalInformation.html`).
- Chatbot **“Quẹt Mai”**:
  - Tư vấn skincare, gợi ý sản phẩm theo brand/loại da/câu hỏi.
  - Có thể chạy **không cần backend** (logic hoàn toàn trên frontend).
  - Nếu có backend Node.js, ưu tiên gọi API `/api/chat` để trả lời linh hoạt hơn.

---

## 🛠 Công nghệ sử dụng

**Frontend**

- HTML5, CSS3
- JavaScript thuần
- Bootstrap (grid, reboot…)
- jQuery (một số hiệu ứng/UI)

**Backend**

- Node.js
- Express
- CORS

**Lưu trữ phía client**

- `localStorage` cho:
  - Người dùng (tài khoản đã đăng ký, user đang đăng nhập).
  - Giỏ hàng.
  - Danh sách sản phẩm đã chọn để thanh toán (selectedCart).

---

## 📁 Cấu trúc thư mục

```text
Cosmetic.vn/
├── index.html              # Redirect sang html/index.html
├── html/                   # Các trang giao diện
│   ├── index.html          # Trang chủ
│   ├── productList.html    # Danh sách sản phẩm theo brand
│   ├── productDetails.html # Chi tiết sản phẩm
│   ├── shoppingCart.html   # Giỏ hàng
│   ├── checkOut.html       # Thanh toán
│   ├── bill.html           # Hóa đơn
│   ├── login.html          # Đăng nhập
│   ├── signUp.html         # Đăng ký
│   └── personalInformation.html # Thông tin tài khoản
├── css/                    # Styles chung & từng trang
├── js/                     # Toàn bộ logic phía client
│   ├── index.js            # Slider + sản phẩm trang chủ
│   ├── productList.js      # Render list sản phẩm theo brand
│   ├── productDetails.js   # Dữ liệu & render chi tiết sản phẩm
│   ├── cart.js             # Giỏ hàng (localStorage)
│   ├── checkOut.js         # Trang thanh toán
│   ├── bill.js             # Render hóa đơn
│   ├── auth.js             # Đăng ký/đăng nhập
│   ├── user.js             # Hiển thị trạng thái user trên header
│   ├── search.js           # Tìm kiếm sản phẩm
│   ├── chatbot.js          # Chatbot Quẹt Mai (FE + gọi /api/chat)
│   ├── jquery-3.6.4.min.js
│   └── bootstrap.min.js
├── images/                 # Logo, banner, ảnh sản phẩm
├── server.js               # Backend Node + Express (/api/chat)
├── package.json
└── package-lock.json
