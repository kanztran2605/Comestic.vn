// js/productDetails.js
document.addEventListener('DOMContentLoaded', function () {
    const brandLabels = {
        cerave: "CeraVe",
        loreal: "L'Oréal",
        vaseline: "Vaseline",
        cocoon: "Cocoon"
    };

    // ====== DATA CHI TIẾT 24 SẢN PHẨM ======
    const productData = {
        cerave: [
            {
                name: "Sữa Rửa Mặt CeraVe Sạch Sâu Cho Da Thường Đến Da Dầu 473ml",
                images: [
                    "../images/SanPham/Cerave/Cerave1_1.png",
                    "../images/SanPham/Cerave/Cerave1_2.png",
                    "../images/SanPham/Cerave/Cerave1_3.png"
                ],
                currentPrice: "334.000đ",
                oldPrice: "490.000đ",
                volume: "473ml",
                rating: "★ 4.8",
                desc: "Sữa rửa mặt tạo bọt nhẹ, làm sạch sâu cho da thường đến da dầu, không làm khô căng da."
            },
            {
                name: "Kem Dưỡng CeraVe Cho Da Khô Đến Rất Khô 340g",
                images: [
                    "../images/SanPham/Cerave/Cerave2_1.png",
                    "../images/SanPham/Cerave/Cerave2_2.png",
                    "../images/SanPham/Cerave/Cerave2_3.png"
                ],
                currentPrice: "304.000đ",
                oldPrice: "450.000đ",
                volume: "340g",
                rating: "★ 4.9",
                desc: "Kem dưỡng phục hồi hàng rào bảo vệ da, cấp ẩm lâu dài cho da khô đến rất khô."
            },
            {
                name: "Sữa Rửa Mặt CeraVe Cho Da Dầu Mụn 236ml",
                images: [
                    "../images/SanPham/Cerave/Cerave3_1.png",
                    "../images/SanPham/Cerave/Cerave3_2.png",
                    "../images/SanPham/Cerave/Cerave3_3.png"
                ],
                currentPrice: "262.000đ",
                oldPrice: "370.000đ",
                volume: "236ml",
                rating: "★ 5.0",
                desc: "Sữa rửa mặt chứa BHA hỗ trợ làm sạch lỗ chân lông, phù hợp da dầu mụn."
            },
            {
                name: "Kem Dưỡng CeraVe Dạng Gel Kiềm Dầu Cho Da Dầu & Hỗn Hợp 52ml",
                images: [
                    "../images/SanPham/Cerave/Cerave4_1.png",
                    "../images/SanPham/Cerave/Cerave4_2.png",
                    "../images/SanPham/Cerave/Cerave4_3.png"
                ],
                currentPrice: "249.000đ",
                oldPrice: "370.000đ",
                volume: "52ml",
                rating: "★ 4.8",
                desc: "Kết cấu gel mỏng nhẹ, thấm nhanh, giúp kiềm dầu và giữ ẩm cho da suốt nhiều giờ."
            },
            {
                name: "Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 88ml",
                images: [
                    "../images/SanPham/Cerave/Cerave5_1.png",
                    "../images/SanPham/Cerave/Cerave5_2.png",
                    "../images/SanPham/Cerave/Cerave5_3.png"
                ],
                currentPrice: "121.000đ",
                oldPrice: "160.000đ",
                volume: "88ml",
                rating: "★ 4.7",
                desc: "Phiên bản nhỏ gọn, dịu nhẹ cho da thường đến khô, giúp da mềm mịn sau khi rửa."
            },
            {
                name: "Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 236ml",
                images: [
                    "../images/SanPham/Cerave/Cerave6_1.png",
                    "../images/SanPham/Cerave/Cerave6_2.png",
                    "../images/SanPham/Cerave/Cerave6_3.png"
                ],
                currentPrice: "233.000đ",
                oldPrice: "330.000đ",
                volume: "236ml",
                rating: "★ 4.9",
                desc: "Sữa rửa mặt dịu nhẹ, bổ sung ceramide và HA, phù hợp cho da thường đến khô."
            }
        ],
        loreal: [
            {
                name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml",
                images: [
                    "../images/SanPham/L'Oreal/L'Oreal1_1.png",
                    "../images/SanPham/L'Oreal/L'Oreal1_2.png",
                    "../images/SanPham/L'Oreal/L'Oreal1_3.png"
                ],
                currentPrice: "125.000đ",
                oldPrice: "239.000đ",
                volume: "400ml",
                rating: "★ 4.7",
                desc: "Tẩy trang làm sạch nhẹ nhàng, mang lại cảm giác tươi mát cho da dầu và hỗn hợp."
            },
            {
                name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Cho Da Dầu 400ml",
                images: [
                    "../images/SanPham/L'Oreal/L'Oreal2_1.png",
                    "../images/SanPham/L'Oreal/L'Oreal2_2.png",
                    "../images/SanPham/L'Oreal/L'Oreal2_3.png"
                ],
                currentPrice: "154.000đ",
                oldPrice: "279.000đ",
                volume: "400ml",
                rating: "★ 4.8",
                desc: "Khả năng làm sạch sâu bụi bẩn và lớp trang điểm, phù hợp da dầu."
            },
            {
                name: "Nước Tẩy Trang L'Oreal Căng Mịn Da 400ml",
                images: [
                    "../images/SanPham/L'Oreal/L'Oreal3_1.png",
                    "../images/SanPham/L'Oreal/L'Oreal3_2.png",
                    "../images/SanPham/L'Oreal/L'Oreal3_3.png"
                ],
                currentPrice: "154.000đ",
                oldPrice: "279.000đ",
                volume: "400ml",
                rating: "★ 4.9",
                desc: "Tẩy trang dịu nhẹ giúp làn da mịn màng, ẩm mượt sau khi sử dụng."
            },
            {
                name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Trang Điểm 400ml",
                images: [
                    "../images/SanPham/L'Oreal/L'Oreal4_1.png",
                    "../images/SanPham/L'Oreal/L'Oreal4_2.png",
                    "../images/SanPham/L'Oreal/L'Oreal4_3.png"
                ],
                currentPrice: "143.000đ",
                oldPrice: "279.000đ",
                volume: "400ml",
                rating: "★ 4.8",
                desc: "Làm sạch tốt lớp trang điểm đậm, không gây khô da."
            },
            {
                name: "Kem Chống Nắng L'Oreal X20 Thoáng Da Mỏng Nhẹ 50ml",
                images: [
                    "../images/SanPham/L'Oreal/L'Oreal5_1.png",
                    "../images/SanPham/L'Oreal/L'Oreal5_2.png",
                    "../images/SanPham/L'Oreal/L'Oreal5_3.png"
                ],
                currentPrice: "228.000đ",
                oldPrice: "399.000đ",
                volume: "50ml",
                rating: "★ 4.9",
                desc: "Kem chống nắng mỏng nhẹ, thấm nhanh, giúp bảo vệ da tối ưu dưới nắng gắt."
            },
            {
                name: "Bộ Gội Xả L'Oreal Dưỡng Tóc Suôn Mượt Cao Cấp 440ml x 2",
                images: [
                    "../images/SanPham/L'Oreal/L'Oreal6_1.png",
                    "../images/SanPham/L'Oreal/L'Oreal6_2.png",
                    "../images/SanPham/L'Oreal/L'Oreal6_3.png"
                ],
                currentPrice: "288.000đ",
                oldPrice: "518.000đ",
                volume: "Bộ 2 chai 440ml",
                rating: "★ 4.8",
                desc: "Bộ gội xả giúp tóc suôn mượt, mềm mại và dễ chải."
            }
        ],
        vaseline: [
            {
                name: "Serum Dưỡng Thể Vaseline Chống Nắng Sáng Da 300ml (Mới)",
                images: [
                    "../images/SanPham/Vaseline/Vaseline1_1.png",
                    "../images/SanPham/Vaseline/Vaseline1_2.png",
                    "../images/SanPham/Vaseline/Vaseline1_3.png"
                ],
                currentPrice: "119.000đ",
                oldPrice: "203.000đ",
                volume: "300ml",
                rating: "★ 4.7",
                desc: "Serum dưỡng thể thấm nhanh, hỗ trợ chống nắng và làm sáng da cơ thể."
            },
            {
                name: "Sữa Dưỡng Thể Vaseline Gluta-Hya Nâng Tông Tức Thì 300ml",
                images: [
                    "../images/SanPham/Vaseline/Vaseline2_1.png",
                    "../images/SanPham/Vaseline/Vaseline2_2.png",
                    "../images/SanPham/Vaseline/Vaseline2_3.png"
                ],
                currentPrice: "119.000đ",
                oldPrice: "195.000đ",
                volume: "300ml",
                rating: "★ 4.8",
                desc: "Dưỡng thể nâng tông tức thì, giúp làn da tươi sáng hơn sau khi dùng."
            },
            {
                name: "Sáp Dưỡng Môi Vaseline Hồng Xinh 7g",
                images: [
                    "../images/SanPham/Vaseline/Vaseline3_1.png",
                    "../images/SanPham/Vaseline/Vaseline3_2.png",
                    "../images/SanPham/Vaseline/Vaseline3_3.png"
                ],
                currentPrice: "70.000đ",
                oldPrice: "82.000đ",
                volume: "7g",
                rating: "★ 5.0",
                desc: "Sáp dưỡng môi giúp môi ẩm mịn, có sắc hồng tự nhiên."
            },
            {
                name: "Combo 2 Sữa Dưỡng Thể Vaseline Sáng Da Chuyên Sâu Ban Đêm 300ml (Mới)",
                images: [
                    "../images/SanPham/Vaseline/Vaseline4_1.png",
                    "../images/SanPham/Vaseline/Vaseline4_2.png",
                    "../images/SanPham/Vaseline/Vaseline4_3.png"
                ],
                currentPrice: "198.000đ",
                oldPrice: "300.000đ",
                volume: "Combo 2 chai 300ml",
                rating: "★ 4.8",
                desc: "Bộ đôi dưỡng thể ban đêm giúp phục hồi và dưỡng sáng da."
            },
            {
                name: "Son Dưỡng Có Màu Vaseline Hồng Cam Êm Dịu 3g",
                images: [
                    "../images/SanPham/Vaseline/Vaseline5_1.png",
                    "../images/SanPham/Vaseline/Vaseline5_2.png",
                    "../images/SanPham/Vaseline/Vaseline5_3.png"
                ],
                currentPrice: "87.000đ",
                oldPrice: "99.000đ",
                volume: "3g",
                rating: "★ 4.9",
                desc: "Son dưỡng có màu hồng cam nhẹ nhàng, làm mềm môi và có độ bóng vừa phải."
            },
            {
                name: "Sữa Dưỡng Thể Vaseline Sáng Da Tức Thì 320ml",
                images: [
                    "../images/SanPham/Vaseline/Vaseline6_1.png",
                    "../images/SanPham/Vaseline/Vaseline6_2.png",
                    "../images/SanPham/Vaseline/Vaseline6_3.png"
                ],
                currentPrice: "93.000đ",
                oldPrice: "143.000đ",
                volume: "320ml",
                rating: "★ 4.8",
                desc: "Dưỡng thể làm sáng da tức thì, thích hợp dùng ban ngày."
            }
        ],
        cocoon: [
            {
                name: "Combo Cocoon Nước Cân Bằng Sen Hậu Giang 310ml + Nước Tẩy Trang Bí Đao 500ml",
                images: [
                    "../images/SanPham/Cocoon/Cocoon1_1.png",
                    "../images/SanPham/Cocoon/Cocoon1_2.png",
                    "../images/SanPham/Cocoon/Cocoon1_3.png"
                ],
                currentPrice: "217.000đ",
                oldPrice: "590.000đ",
                volume: "Combo 2 sản phẩm",
                rating: "★ 4.9",
                desc: "Combo làm sạch và cân bằng da, chiết xuất từ sen Hậu Giang và bí đao."
            },
            {
                name: "Bộ Gội Xả Bưởi Cocoon Không Sulfate Và Giảm Gãy Rụng 500ml + 310ml",
                images: [
                    "../images/SanPham/Cocoon/Cocoon2_1.png",
                    "../images/SanPham/Cocoon/Cocoon2_2.png",
                    "../images/SanPham/Cocoon/Cocoon2_3.png"
                ],
                currentPrice: "290.000đ",
                oldPrice: "560.000đ",
                volume: "Combo gội xả",
                rating: "★ 4.8",
                desc: "Bộ gội xả bưởi giúp giảm gãy rụng và làm tóc chắc khỏe hơn."
            },
            {
                name: "Combo Cocoon Tẩy Da Chết Cho Mặt 150ml + Toàn Thân 200ml Từ Cà Phê Đắk Lắk",
                images: [
                    "../images/SanPham/Cocoon/Cocoon3_1.png",
                    "../images/SanPham/Cocoon/Cocoon3_2.png",
                    "../images/SanPham/Cocoon/Cocoon3_3.png"
                ],
                currentPrice: "165.000đ",
                oldPrice: "290.000đ",
                volume: "Combo tẩy da chết",
                rating: "★ 5.0",
                desc: "Tẩy da chết mặt và body từ cà phê Đắk Lắk, giúp da mịn màng, sáng khỏe."
            },
            {
                name: "Combo 2 Nước Tẩy Trang Bí Đao Cocoon Làm Sạch & Giảm Dầu 500ml",
                images: [
                    "../images/SanPham/Cocoon/Cocoon4_1.png",
                    "../images/SanPham/Cocoon/Cocoon4_2.png",
                    "../images/SanPham/Cocoon/Cocoon4_3.png"
                ],
                currentPrice: "299.000đ",
                oldPrice: "590.000đ",
                volume: "Combo 2 chai 500ml",
                rating: "★ 4.9",
                desc: "Bộ đôi nước tẩy trang bí đao, hỗ trợ làm sạch và kiểm soát dầu."
            },
            {
                name: "Combo Cocoon Mặt Nạ Nghệ Hưng Yên & Tẩy Da Chết Toàn Thân Cà Phê Đắk Lắk 30ml + 200ml",
                images: [
                    "../images/SanPham/Cocoon/Cocoon5_1.png",
                    "../images/SanPham/Cocoon/Cocoon5_2.png",
                    "../images/SanPham/Cocoon/Cocoon5_3.png"
                ],
                currentPrice: "165.000đ",
                oldPrice: "270.000đ",
                volume: "Combo",
                rating: "★ 4.8",
                desc: "Kết hợp mặt nạ nghệ và tẩy da chết body cho da sáng khỏe toàn diện."
            },
            {
                name: "Nước Dưỡng Tóc Cocoon Tinh Dầu Bưởi 140ml (Mới)",
                images: [
                    "../images/SanPham/Cocoon/Cocoon6_1.png",
                    "../images/SanPham/Cocoon/Cocoon6_2.png",
                    "../images/SanPham/Cocoon/Cocoon6_3.png"
                ],
                currentPrice: "113.000đ",
                oldPrice: "165.000đ",
                volume: "140ml",
                rating: "★ 4.9",
                desc: "Xịt dưỡng tóc tinh dầu bưởi giúp tóc chắc khỏe, hỗ trợ mọc tóc."
            }
        ]
    };

    // ====== LẤY PARAM TỪ URL ======
    const params = new URLSearchParams(window.location.search);
    let brandKey = params.get('brand') || 'cerave';
    let index = parseInt(params.get('index') || '1', 10) - 1;

    if (!productData[brandKey]) {
        brandKey = 'cerave';
    }
    if (isNaN(index) || index < 0 || index >= productData[brandKey].length) {
        index = 0;
    }

    const product = productData[brandKey][index];

    // ====== DOM ELEMENTS ======
    const mainImg = document.getElementById('detail-main-img');
    const thumb1 = document.getElementById('detail-thumb-1');
    const thumb2 = document.getElementById('detail-thumb-2');
    const thumb3 = document.getElementById('detail-thumb-3');

    const nameEl = document.getElementById('detail-name');
    const brandEl = document.getElementById('detail-brand');
    const volumeEl = document.getElementById('detail-volume');
    const ratingEl = document.getElementById('detail-rating');
    const currentPriceEl = document.getElementById('detail-current-price');
    const oldPriceEl = document.getElementById('detail-old-price');
    const descEl = document.getElementById('detail-desc');

    // ====== HIỂN THỊ SẢN PHẨM CHÍNH ======
    function renderMainProduct() {
        if (!product) return;

        if (mainImg) {
            mainImg.src = product.images[0];
            mainImg.alt = product.name;
        }

        if (thumb1) thumb1.src = product.images[0];
        if (thumb2) thumb2.src = product.images[1];
        if (thumb3) thumb3.src = product.images[2];

        if (nameEl) nameEl.textContent = product.name;
        if (brandEl) brandEl.textContent = brandLabels[brandKey] || "";
        if (volumeEl) volumeEl.textContent = product.volume;
        if (ratingEl) ratingEl.textContent = product.rating;
        if (currentPriceEl) currentPriceEl.textContent = product.currentPrice;
        if (oldPriceEl) oldPriceEl.textContent = product.oldPrice;
        if (descEl) descEl.textContent = product.desc;
    }

    // đổi ảnh chính khi click thumbnail
    [thumb1, thumb2, thumb3].forEach((thumb, i) => {
        if (!thumb) return;
        thumb.addEventListener('click', () => {
            if (mainImg) {
                mainImg.src = product.images[i];
            }
        });
    });

    // ====== SẢN PHẨM LIÊN QUAN ======
    const relatedContainer = document.getElementById('related-products');

    function renderRelated() {
        if (!relatedContainer) return;

        const list = productData[brandKey];
        const cards = [];

        for (let i = 0; i < list.length; i++) {
            if (i === index) continue;      // bỏ sp hiện tại
            if (cards.length >= 4) break;   // tối đa 4

            const p = list[i];
            cards.push(`
                <article class="product-card flash">
                    <a class="product-link" href="productDetails.html?brand=${brandKey}&index=${i + 1}">
                        <div class="product-image-wrapper">
                            <img src="${p.images[0]}" alt="${p.name}" class="product-image">
                        </div>

                        <div class="product-info">
                            <div class="flash-bar">FLASH DEAL</div>

                            <div class="product-price-row">
                                <span class="current-price">${p.currentPrice}</span>
                                <span class="old-price">${p.oldPrice}</span>
                            </div>

                            <div class="product-name">${p.name}</div>

                            <div class="product-meta">
                                <span class="rating">${p.rating}</span>
                                <span>|</span>
                                <span class="volume">${p.volume}</span>
                            </div>
                        </div>
                    </a>
                </article>
            `);
        }

        relatedContainer.innerHTML = cards.join('');
    }

    // ====== GỌI HÀM RENDER ======
    renderMainProduct();
    renderRelated();

    // ====== GẮN DATA-* CHO 2 NÚT (THÊM VÀO GIỎ / MUA NGAY) ======
    const addBtn = document.getElementById('btn-add-to-cart');
    const buyBtn = document.getElementById('btn-buy-now');

    function parsePriceNumber(str) {
        return Number((str || '').replace(/\D/g, "")) || 0;
    }

    const priceNumber = parsePriceNumber(product.currentPrice);
    const productId = `${brandKey}-${index + 1}`;

    if (addBtn) {
        addBtn.dataset.addToCart = "1";
        addBtn.dataset.productId = productId;
        addBtn.dataset.name = product.name;
        addBtn.dataset.brand = brandLabels[brandKey] || "";
        addBtn.dataset.image = product.images[0];
        addBtn.dataset.price = priceNumber;
    }

    if (buyBtn) {
        buyBtn.dataset.buyNow = "1";
        buyBtn.dataset.productId = productId;
        buyBtn.dataset.name = product.name;
        buyBtn.dataset.brand = brandLabels[brandKey] || "";
        buyBtn.dataset.image = product.images[0];
        buyBtn.dataset.price = priceNumber;
    }
});
