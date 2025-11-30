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
                desc: "Chi tiết sản phẩm: Sữa rửa mặt dạng gel tạo bọt nhẹ, làm sạch sâu bụi bẩn và bã nhờn nhưng vẫn giữ độ ẩm tự nhiên, cho da khô thoáng mà không căng rít. | Nhãn hàng: CeraVe – thương hiệu dược mỹ phẩm được nhiều bác sĩ da liễu khuyên dùng. | Thể tích: 473ml, phù hợp sử dụng sáng tối trong thời gian dài. | Thành phần: Ceramide, Niacinamide, Hyaluronic Acid, hệ chất làm sạch dịu nhẹ, không chứa hương liệu. | Công dụng: Giúp làm sạch sâu, hỗ trợ cải thiện độ mịn màng bề mặt da, giảm bóng dầu và tăng cường hàng rào bảo vệ da."
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
                desc: "Chi tiết sản phẩm: Kem dưỡng kết cấu dày nhưng thấm nhanh, mang lại cảm giác ẩm mượt, dễ chịu cho làn da khô và rất khô. | Nhãn hàng: CeraVe – dòng chăm sóc da chuyên biệt cho da nhạy cảm và da khô. | Thể tích: 340g dạng hũ lớn, có thể dùng cho mặt và toàn thân. | Thành phần: Ceramide 1-3-6II, Glycerin, Hyaluronic Acid, không chứa hương liệu. | Công dụng: Hỗ trợ phục hồi hàng rào bảo vệ da, cấp ẩm bền vững, giảm tình trạng khô ráp, bong tróc, cho da mềm mịn hơn."
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
                desc: "Chi tiết sản phẩm: Sữa rửa mặt dành cho da dầu mụn với khả năng làm sạch sâu, mang lại cảm giác thông thoáng sau khi rửa. | Nhãn hàng: CeraVe – thương hiệu nổi tiếng với công thức dịu nhẹ, an toàn cho da. | Thể tích: 236ml tiện dụng cho chăm sóc da hằng ngày. | Thành phần: Salicylic Acid (BHA), Ceramide, Niacinamide, chất làm sạch dịu nhẹ. | Công dụng: Hỗ trợ làm sạch lỗ chân lông, giảm bã nhờn dư thừa, góp phần hạn chế hình thành mụn và giúp bề mặt da trông mịn màng hơn."
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
                desc: "Chi tiết sản phẩm: Kem dưỡng dạng gel mỏng nhẹ, thấm nhanh, không nhờn dính, mang lại cảm giác khô thoáng dễ chịu trên da. | Nhãn hàng: CeraVe – giải pháp cấp ẩm nhưng vẫn thoáng cho da dầu. | Thể tích: 52ml nhỏ gọn, dễ mang theo khi di chuyển. | Thành phần: Ceramide, Niacinamide, Hyaluronic Acid, thành phần hỗ trợ kiểm soát dầu. | Công dụng: Giúp cân bằng ẩm, hỗ trợ kiềm dầu, giảm bóng nhờn vùng chữ T, cho làn da mềm mịn nhưng không bí tắc."
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
                desc: "Chi tiết sản phẩm: Sữa rửa mặt dịu nhẹ, tạo bọt mềm mịn, phù hợp cho làn da thường đến khô, kể cả da nhạy cảm. | Nhãn hàng: CeraVe – dược mỹ phẩm chăm sóc da được tin dùng toàn cầu. | Thể tích: 88ml mini, tiện mang theo khi đi làm, đi học, du lịch. | Thành phần: Ceramide, Hyaluronic Acid, Amino Acid, không chứa hương liệu. | Công dụng: Hỗ trợ làm sạch bụi bẩn, mồ hôi trên da, đồng thời giúp duy trì độ ẩm, hạn chế cảm giác căng khô sau khi rửa mặt."
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
                desc: "Chi tiết sản phẩm: Phiên bản dung tích lớn của sữa rửa mặt dịu nhẹ chuyên dùng cho da thường đến khô. | Nhãn hàng: CeraVe – công thức nghiên cứu cùng chuyên gia da liễu. | Thể tích: 236ml dùng được trong thời gian dài. | Thành phần: Ceramide, Hyaluronic Acid, Glycerin giúp hỗ trợ dưỡng ẩm trong lúc làm sạch. | Công dụng: Giúp loại bỏ bụi bẩn nhẹ nhàng, hỗ trợ làm mềm bề mặt da, mang lại làn da ẩm mượt, dễ chịu sau khi rửa."
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
                desc: "Chi tiết sản phẩm: Nước tẩy trang micellar giúp làm sạch lớp kem chống nắng, bụi bẩn và trang điểm nhẹ một cách nhanh chóng, mang lại cảm giác tươi mát. | Nhãn hàng: L'Oréal Paris – thương hiệu chăm sóc sắc đẹp hàng đầu thế giới. | Thể tích: 400ml, dùng được lâu cho cả sáng và tối. | Thành phần: Hạt micellar, chiết xuất bạc hà, glycerin, không chứa dầu khoáng nặng. | Công dụng: Giúp làm sạch da, hỗ trợ giảm cảm giác nhờn dính, cho bề mặt da khô thoáng và sẵn sàng cho các bước dưỡng tiếp theo."
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
                desc: "Chi tiết sản phẩm: Nước tẩy trang làm sạch sâu, phù hợp cho làn da thường xuyên tiếp xúc với môi trường ô nhiễm hoặc trang điểm. | Nhãn hàng: L'Oréal Paris – chuyên gia trong lĩnh vực làm sạch và chăm sóc da. | Thể tích: 400ml đáp ứng nhu cầu sử dụng hằng ngày. | Thành phần: Công nghệ Micellar, glycerin, thành phần hỗ trợ làm sạch lớp trang điểm lâu trôi. | Công dụng: Giúp cuốn trôi bụi bẩn, bã nhờn và cặn trang điểm, mang lại bề mặt da sạch sẽ, thông thoáng hơn."
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
                desc: "Chi tiết sản phẩm: Nước tẩy trang dịu nhẹ, ưu tiên cảm giác ẩm mượt, căng mịn sau khi lau. | Nhãn hàng: L'Oréal Paris – kết hợp giữa công nghệ làm sạch và dưỡng da. | Thể tích: 400ml phù hợp dùng lâu dài. | Thành phần: Micellar water, glycerin, vitamin B3 và các thành phần dưỡng ẩm. | Công dụng: Hỗ trợ làm sạch lớp trang điểm và bụi bẩn, đồng thời giúp làn da trông mềm mại, ẩm mượt, hạn chế cảm giác khô căng."
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
                desc: "Chi tiết sản phẩm: Nước tẩy trang dành cho trang điểm đậm, mascara chống trôi và son lì khó trôi. | Nhãn hàng: L'Oréal Paris – thương hiệu trang điểm và chăm sóc da uy tín. | Thể tích: 400ml, lý tưởng cho những ai trang điểm thường xuyên. | Thành phần: Micellar water, dầu làm sạch nhẹ, glycerin. | Công dụng: Giúp hòa tan nhanh lớp trang điểm cứng đầu, hỗ trợ làm sạch da mà vẫn giữ lại độ ẩm, cho da mềm mại hơn sau khi lau."
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
                desc: "Chi tiết sản phẩm: Kem chống nắng kết cấu lỏng nhẹ, dễ tán, gần như không trọng lượng trên da. | Nhãn hàng: L'Oréal Paris – tiên phong trong công nghệ màng lọc chống nắng. | Thể tích: 50ml nhỏ gọn, dễ mang theo bên mình. | Thành phần: Màng lọc UVB/UVA, Niacinamide, Vitamin E, thành phần giúp kiểm soát dầu. | Công dụng: Hỗ trợ bảo vệ da trước tác động của ánh nắng, giúp bề mặt da khô thoáng, hạn chế bóng nhờn suốt ngày dài."
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
                desc: "Chi tiết sản phẩm: Bộ gội xả chăm sóc tóc toàn diện, giúp làm sạch da đầu và dưỡng mềm thân tóc. | Nhãn hàng: L'Oréal Paris – chuyên gia chăm sóc tóc chuyên nghiệp. | Thể tích: Bộ 2 chai 440ml, dùng được cho cả gia đình. | Thành phần: Keratin, dầu argan, các thành phần dưỡng ẩm và làm mượt. | Công dụng: Giúp giảm tình trạng xơ rối, hỗ trợ phục hồi độ óng mượt, giúp tóc dễ chải và nhìn khỏe khoắn hơn."
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
                desc: "Chi tiết sản phẩm: Serum dưỡng thể kết cấu mỏng nhẹ, thấm nhanh, không nhờn dính, phù hợp khí hậu nóng ẩm. | Nhãn hàng: Vaseline – thương hiệu dưỡng ẩm lâu đời được yêu thích. | Thể tích: 300ml tiện dùng hằng ngày. | Thành phần: Niacinamide, Hyaluronic Acid, vitamin B3, Jelly dưỡng ẩm và thành phần chống nắng hỗ trợ. | Công dụng: Giúp dưỡng ẩm, hỗ trợ làm sáng da cơ thể, tạo cảm giác da mềm mịn, tươi tắn hơn khi sử dụng đều đặn."
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
                desc: "Chi tiết sản phẩm: Sữa dưỡng thể có hiệu ứng nâng tông nhẹ, tạo lớp nền da sáng hơn ngay sau khi thoa. | Nhãn hàng: Vaseline – chuyên gia trong lĩnh vực dưỡng thể. | Thể tích: 300ml phù hợp dùng mỗi ngày. | Thành phần: Glutathione, Hyaluronic Acid, Niacinamide, Jelly dưỡng ẩm. | Công dụng: Hỗ trợ làm đều màu da, giữ ẩm và mang lại cảm giác da sáng khỏe, rạng rỡ hơn theo thời gian."
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
                desc: "Chi tiết sản phẩm: Sáp dưỡng môi nhỏ gọn, dễ mang theo, thích hợp dùng nhiều lần trong ngày. | Nhãn hàng: Vaseline – nổi tiếng với công nghệ Jelly dưỡng ẩm. | Thể tích: 7g dạng sáp. | Thành phần: Petroleum Jelly, vitamin E, sắc tố hồng nhẹ nhàng. | Công dụng: Giúp giảm khô nứt, dưỡng ẩm môi, tạo sắc hồng tự nhiên, hỗ trợ lớp son màu lên đều hơn."
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
                desc: "Chi tiết sản phẩm: Combo dưỡng thể dành cho ban đêm, kết cấu êm mượt, phù hợp thoa trước khi ngủ. | Nhãn hàng: Vaseline – dòng dưỡng sáng da cơ thể được nhiều người tin dùng. | Thể tích: 2 chai x 300ml. | Thành phần: Niacinamide, Vitamin C, Jelly dưỡng ẩm, các chất chống oxy hóa hỗ trợ. | Công dụng: Giúp nuôi dưỡng làn da trong lúc ngủ, hỗ trợ cải thiện độ sáng, giảm xỉn màu, cho da mềm mỏng hơn vào sáng hôm sau."
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
                desc: "Chi tiết sản phẩm: Son dưỡng có màu với sắc hồng cam ngọt ngào, mang lại vẻ tươi tắn tự nhiên. | Nhãn hàng: Vaseline – thương hiệu dưỡng môi quen thuộc với mọi độ tuổi. | Thể tích: 3g dạng thỏi nhỏ gọn. | Thành phần: Petroleum Jelly, dầu dưỡng, sắc tố hồng cam. | Công dụng: Giúp dưỡng ẩm, làm mềm môi, tạo lớp bóng nhẹ và sắc màu trẻ trung phù hợp dùng hằng ngày."
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
                desc: "Chi tiết sản phẩm: Sữa dưỡng thể có hiệu ứng sáng da tức thì, tạo bề mặt da đều màu hơn ngay khi thoa. | Nhãn hàng: Vaseline – chuyên gia dưỡng ẩm và chăm sóc da cơ thể. | Thể tích: 320ml phù hợp dùng ban ngày. | Thành phần: Niacinamide, Vitamin C, glycerin, Jelly dưỡng ẩm. | Công dụng: Giúp cấp ẩm, hỗ trợ cải thiện độ sáng và mịn màng của làn da, phù hợp dùng trước khi ra ngoài."
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
                desc: "Chi tiết sản phẩm: Combo làm sạch và cân bằng da từ nguyên liệu thực vật Việt Nam, phù hợp chăm sóc da hằng ngày. | Nhãn hàng: Cocoon – thương hiệu thuần chay nội địa được yêu thích. | Thể tích: Nước cân bằng 310ml + nước tẩy trang 500ml. | Thành phần: Chiết xuất sen Hậu Giang, bí đao, glycerin, panthenol. | Công dụng: Giúp loại bỏ bụi bẩn, lớp trang điểm nhẹ, đồng thời hỗ trợ làm dịu và cân bằng bề mặt da."
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
                desc: "Chi tiết sản phẩm: Bộ gội xả chiết xuất bưởi giúp làm sạch da đầu nhẹ nhàng và nuôi dưỡng sợi tóc. | Nhãn hàng: Cocoon – mỹ phẩm thuần chay lấy cảm hứng từ nông sản Việt. | Thể tích: Dầu gội 500ml + dầu xả 310ml. | Thành phần: Chiết xuất vỏ bưởi, biotin, provitamin B5, các dưỡng chất thực vật. | Công dụng: Hỗ trợ giảm gãy rụng, giúp tóc trông dày và khỏe hơn, đồng thời mang lại cảm giác sạch thoáng cho da đầu."
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
                desc: "Chi tiết sản phẩm: Combo tẩy da chết mặt và body từ hạt cà phê Đắk Lắk xay mịn, mang đến trải nghiệm spa tại nhà. | Nhãn hàng: Cocoon – nổi tiếng với sản phẩm tẩy da chết từ cà phê. | Thể tích: Tẩy da chết mặt 150ml + body 200ml. | Thành phần: Hạt cà phê Đắk Lắk, bơ cacao, glycerin, dầu thực vật. | Công dụng: Giúp loại bỏ tế bào chết, hỗ trợ làm sáng và mịn bề mặt da, giúp da dễ hấp thu dưỡng chất hơn."
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
                desc: "Chi tiết sản phẩm: Combo hai chai nước tẩy trang bí đao dành cho da dầu, hỗn hợp, thường xuyên trang điểm hoặc dùng kem chống nắng. | Nhãn hàng: Cocoon – thương hiệu thuần chay Việt Nam. | Thể tích: 2 chai x 500ml. | Thành phần: Chiết xuất bí đao, rau má, glycerin, chất làm sạch nguồn gốc thực vật. | Công dụng: Giúp làm sạch lớp trang điểm và bụi bẩn, hỗ trợ kiểm soát dầu, mang lại cảm giác mát dịu cho làn da."
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
                desc: "Chi tiết sản phẩm: Combo kết hợp chăm sóc da mặt và body với mặt nạ nghệ và tẩy da chết cà phê. | Nhãn hàng: Cocoon – tôn vinh nguyên liệu địa phương Việt Nam. | Thể tích: Mặt nạ nghệ 30ml + tẩy da chết body 200ml. | Thành phần: Bột nghệ Hưng Yên, chiết xuất cam thảo, hạt cà phê Đắk Lắk, bơ cacao. | Công dụng: Hỗ trợ làm sáng và mịn da, giúp bề mặt da thông thoáng, cảm giác sạch và mềm sau khi sử dụng."
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
                desc: "Chi tiết sản phẩm: Xịt dưỡng tóc tinh dầu bưởi dạng sương nhẹ, dùng được cho tóc ẩm hoặc khô. | Nhãn hàng: Cocoon – thương hiệu thuần chay thân thiện với mái tóc và da đầu. | Thể tích: 140ml. | Thành phần: Tinh dầu vỏ bưởi, biotin, provitamin B5, glycerin. | Công dụng: Giúp cung cấp độ ẩm nhẹ, hỗ trợ tóc trông dày và khỏe hơn, mang lại mùi hương bưởi dễ chịu khi sử dụng."
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

        if (descEl && product.desc) {
            const rows = product.desc
                .split("|")
                .map(item => item.trim())
                .filter(Boolean);

            const html = rows.map(row => {
                const [label, ...rest] = row.split(":");
                const value = rest.join(":").trim();

                return `
                <div class="desc-row">
                    <span class="desc-label">${(label || "").trim()}:</span>
                    <span class="desc-value">${value}</span>
                </div>
            `;
            }).join("");

            descEl.innerHTML = html;
        }
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
