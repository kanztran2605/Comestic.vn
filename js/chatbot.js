// js/chatbot.js
// -------------------------------------------
// Quẹt Mai ChatBot - phiên bản teencode :3
// - Chạy được cả khi KHÔNG có backend (GitHub Pages)
// - Nếu có backend (Node + Express) thì ưu tiên gọi /api/chat
// -------------------------------------------

// =======================
// CONFIG & CONSTANTS
// =======================
const BOT_NAME = "Quẹt Mai ChatBot";
const BOT_PREFIX = "";
const USER_PREFIX = ""; // nhẹ nhàng, không prefix cho user

// =======================
// DATA 24 SẢN PHẨM
// =======================
const AI_PRODUCTS = [
    // ===== CeraVe =====
    {
        id: "cerave-1",
        brandKey: "cerave",
        brandName: "CeraVe",
        name: "Sữa Rửa Mặt CeraVe Sạch Sâu Cho Da Thường Đến Da Dầu 473ml",
        volume: "473ml",
        oldPrice: 490000,
        price: 334000,
    },
    {
        id: "cerave-2",
        brandKey: "cerave",
        brandName: "CeraVe",
        name: "Kem Dưỡng CeraVe Cho Da Khô Đến Rất Khô 340g",
        volume: "340g",
        oldPrice: 450000,
        price: 304000,
    },
    {
        id: "cerave-3",
        brandKey: "cerave",
        brandName: "CeraVe",
        name: "Sữa Rửa Mặt Cerave Cho Da Dầu Mụn 236ml",
        volume: "236ml",
        oldPrice: 370000,
        price: 262000,
    },
    {
        id: "cerave-4",
        brandKey: "cerave",
        brandName: "CeraVe",
        name: "Kem Dưỡng CeraVe Dạng Gel Kiềm Dầu Cho Da Dầu & Hỗn Hợp 52ml",
        volume: "52ml",
        oldPrice: 370000,
        price: 249000,
    },
    {
        id: "cerave-5",
        brandKey: "cerave",
        brandName: "CeraVe",
        name: "Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 88ml",
        volume: "88ml",
        oldPrice: 160000,
        price: 121000,
    },
    {
        id: "cerave-6",
        brandKey: "cerave",
        brandName: "CeraVe",
        name: "Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 236ml",
        volume: "236ml",
        oldPrice: 330000,
        price: 233000,
    },

    // ===== L'Oreal =====
    {
        id: "loreal-1",
        brandKey: "loreal",
        brandName: "L'Oreal",
        name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml",
        volume: "400ml",
        oldPrice: 239000,
        price: 125000,
    },
    {
        id: "loreal-2",
        brandKey: "loreal",
        brandName: "L'Oreal",
        name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Cho Da Dầu 400ml",
        volume: "400ml",
        oldPrice: 279000,
        price: 154000,
    },
    {
        id: "loreal-3",
        brandKey: "loreal",
        brandName: "L'Oreal",
        name: "Nước Tẩy Trang L'Oreal Căng Mịn Da 400ml",
        volume: "400ml",
        oldPrice: 279000,
        price: 154000,
    },
    {
        id: "loreal-4",
        brandKey: "loreal",
        brandName: "L'Oreal",
        name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Trang Điểm 400ml",
        volume: "400ml",
        oldPrice: 279000,
        price: 143000,
    },
    {
        id: "loreal-5",
        brandKey: "loreal",
        brandName: "L'Oreal",
        name: "Kem Chống Nắng L'Oreal X20 Thoáng Da Mỏng Nhẹ 50ml",
        volume: "50ml",
        oldPrice: 399000,
        price: 228000,
    },
    {
        id: "loreal-6",
        brandKey: "loreal",
        brandName: "L'Oreal",
        name: "Bộ Gội Xả L'Oreal Dưỡng Tóc Suôn Mượt Tóc Cao Cấp 440ml x 2",
        volume: "440ml x 2",
        oldPrice: 518000,
        price: 288000,
    },

    // ===== Vaseline =====
    {
        id: "vaseline-1",
        brandKey: "vaseline",
        brandName: "Vaseline",
        name: "Serum Dưỡng Thể Vaseline Chống Nắng Sáng Da 300ml (Mới)",
        volume: "300ml",
        oldPrice: 203000,
        price: 119000,
    },
    {
        id: "vaseline-2",
        brandKey: "vaseline",
        brandName: "Vaseline",
        name: "Sữa Dưỡng Thể Vaseline Gluta-Hya Nâng Tông Tức Thì 300ml",
        volume: "300ml",
        oldPrice: 195000,
        price: 119000,
    },
    {
        id: "vaseline-3",
        brandKey: "vaseline",
        brandName: "Vaseline",
        name: "Sáp Dưỡng Môi Vaseline Hồng Xinh 7g",
        volume: "7g",
        oldPrice: 82000,
        price: 70000,
    },
    {
        id: "vaseline-4",
        brandKey: "vaseline",
        brandName: "Vaseline",
        name: "Combo 2 Sữa Dưỡng Thể Vaseline Sáng Da Chuyên Sâu Ban Đêm 300ml (Mới)",
        volume: "300ml x 2",
        oldPrice: 300000,
        price: 198000,
    },
    {
        id: "vaseline-5",
        brandKey: "vaseline",
        brandName: "Vaseline",
        name: "Son Dưỡng Có Màu Vaseline Hồng Cam Êm Dịu 3g",
        volume: "3g",
        oldPrice: 99000,
        price: 87000,
    },
    {
        id: "vaseline-6",
        brandKey: "vaseline",
        brandName: "Vaseline",
        name: "Sữa Dưỡng Thể Vaseline Sáng Da Tức Thì 320ml",
        volume: "320ml",
        oldPrice: 143000,
        price: 93000,
    },

    // ===== Cocoon =====
    {
        id: "cocoon-1",
        brandKey: "cocoon",
        brandName: "Cocoon",
        name: "Combo Cocoon Nước Cân Bằng Sen Hậu Giang 310ml + Nước Tẩy Trang Bí Đao 500ml",
        volume: "310ml + 500ml",
        oldPrice: 590000,
        price: 217000,
    },
    {
        id: "cocoon-2",
        brandKey: "cocoon",
        brandName: "Cocoon",
        name: "Bộ Gội Xả Bưởi Cocoon Không Sulfate Và Giảm Gãy Rụng 500ml + 310ml",
        volume: "500ml + 310ml",
        oldPrice: 560000,
        price: 290000,
    },
    {
        id: "cocoon-3",
        brandKey: "cocoon",
        brandName: "Cocoon",
        name: "Combo Cocoon Tẩy Da Chết Cho Mặt 150ml + Toàn Thân 200ml Từ Cà Phê Đắk Lắk",
        volume: "150ml + 200ml",
        oldPrice: 290000,
        price: 165000,
    },
    {
        id: "cocoon-4",
        brandKey: "cocoon",
        brandName: "Cocoon",
        name: "Combo 2 Nước Tẩy Trang Bí Đao Cocoon Làm Sạch & Giảm Dầu 500ml",
        volume: "500ml x 2",
        oldPrice: 590000,
        price: 299000,
    },
    {
        id: "cocoon-5",
        brandKey: "cocoon",
        brandName: "Cocoon",
        name: "Combo Cocoon Mặt Nạ Nghệ Hưng Yên & Tẩy Da Chết Toàn Thân Cà Phê Đắk Lắk 30ml + 200ml",
        volume: "30ml + 200ml",
        oldPrice: 270000,
        price: 165000,
    },
    {
        id: "cocoon-6",
        brandKey: "cocoon",
        brandName: "Cocoon",
        name: "Nước Dưỡng Tóc Cocoon Tinh Dầu Bưởi 140ml (Mới)",
        volume: "140ml",
        oldPrice: 165000,
        price: 113000,
    },
];

// =======================
// HÀM XỬ LÝ CHAT (FRONTEND)
// =======================
function aiDetectBrandKey(text) {
    const lower = text.toLowerCase();
    if (lower.includes("cerave")) return "cerave";
    if (lower.includes("l'oreal") || lower.includes("loreal") || lower.includes("l oreal")) return "loreal";
    if (lower.includes("vaseline")) return "vaseline";
    if (lower.includes("cocoon")) return "cocoon";
    return null;
}

function aiFormatPrice(price) {
    return Number(price).toLocaleString("vi-VN");
}

function aiBuildReply(message) {
    const text = (message || "").toString().trim();

    // =======================
    // 0. Không nhập gì
    // =======================
    if (!text) {
        return (
            "- " + BOT_NAME + " đang onl nè, Giggity~ :3\n" +
            "- Con vợ cứ quăng câu hỏi về giá, khuyến mãi hay nhờ Gleen gợi ý routine CeraVe, L'Oreal, Vaseline, Cocoon là Gleen quẫy liền nha."
        );
    }

    const lower = text.toLowerCase();

    const brandKey = aiDetectBrandKey(lower);
    const hasPriceWord = /(giá|bao nhiêu|mấy tiền|bn tiền|tiền|đồng|k)/.test(lower);
    const hasSuggestWord = /(gợi ý|gợi y|nên dùng|nên mua|tu van|tư vấn|hợp với|phù hợp)/.test(lower);

    const hasGiggity = lower.includes("giggity");
    const hasQuagmire = lower.includes("quagmire");
    const hasGlennName = lower.includes("glenn") || lower.includes("gleen");
    const hasBotNameJoke =
        lower.includes("quẹt mai") ||
        lower.includes("quet mai") ||
        lower.includes("quang mai");

    // từ chửi mạnh / tục -> nhắc nhở
    const hardSwearList = [
        "cặc", "cak", "cak*", "cc ", " cc", "cl ", " cl",
        "lồn", "lon", "loz", "lz", "l`", "địt", "dit", "đĩ", "di",
        "đỉ", "dỉ", "đụ", "du", "dut", "đụ mẹ", "du me",
        "đụ mợ", "du mo", "đcm", "dcm", "đmm", "vl", "vcl", "vk l", "vkl",
        "đéo", "deo", "đéo mẹ", "deo me", "đéo mợ", "deo mo",
        "đm", "dm"
    ];

    // chửi nhẹ / cà khịa -> Gleen bật lại cho vui
    const mildInsultList = [
        "ngu", "ngu quá", "ngu vl", "ngu vcl", "ngu vãi", "ngu thế", "ngu the", "mẹ mày",
        "đồ ngu", "đồ gà", "đồ óc chó", "óc chó", "óc cho", "đồ điên", "con chó", "con mẹ mày",
        "đồ khùng", "dốt quá", "dốt vl", "dốt vcl", "như shit", "kém quá", "óc heo", "gà", "con gà", "gà quá",
        "bà nội cha mày", "bà nội mày", "thằng cha mày",
        "đần", "đần độn", "đần độn vcl", "đần độn vl"
    ];

    const hasHardSwear = hardSwearList.some((w) => lower.includes(w));
    const hasMildInsult = mildInsultList.some((w) => lower.includes(w));

    // từ kiểu "ủa / hả / gì vậy" -> hỏi lại cục cưng
    const hasConfusedInterjection = /(ủa|sao vậy|sao dzị|sao zậy|sao thế|hả|gì vậy|gì dzạ|gì dạ|cái gì)/.test(lower);

    // Từ phủ định: hong, không, ko, no, không thích...
    const hasNegativeWord = /(hong|hông|hổng|không\b|khong\b|ko\b|k0\b|nope\b|no\b|không thích|khong thich|hong thích|hong thich|không ưa|không mê|không khoái)/.test(lower);

    // Từ đồng ý / chốt: ok, oke, được đó, tới luôn, yes, ngonn...
    const hasPositiveWord = /(ok\b|oki\b|oke\b|okela\b|được đó|được á|duoc do|duoc á|tới luôn|tới đi|toi luôn|yes\b|yep\b|yeah\b|chuẩn đó|chuẩn r|ngon\b|ngonn|quá đã|quá đỉnh)/.test(lower);

    // Easter egg ẤU RAI
    const hasAuRai = /(ấu rai|ấu raiiiii|ấu rài|ấu ràiiii|au rai|au raiiii)/.test(lower);

    // Mode buồn / ế / thất tình
    const hasSadOrSingle = /(buồn|buon|buồn quá|chán|chan|cô đơn|co don|thất tình|that tinh|bị đá|bi da|bị bỏ|bi bo|bỏ rơi|bo roi|bị cắm sừng|cam sung|cắm sừng|ế\b|ế quá|ế chỏng gọng|ế dài hạn)/.test(lower);

    // Mood: Ghét / giận / dỗi
    const hasAngryMood = /(ghét|ghet|ghết|ghet|giận|gian|giận quá|gian qua|dỗi|doi|dỗi quá|doi qua|hờn|hon|hờn dỗi|hon doi|hứ\b|bực|buc|khó chịu|kho chiu)/.test(lower);

    // Mood: Vui / haha / hihi
    const hasHappyMood = /(hihi|hi hi|haha|ha ha|hí hí|hi hi|hô hô|ho ho|đang vui|dang vui|đang rất vui|dang rat vui|vui vãi|vui vai|vui vl|vui vcl|hài vãi|hai vai|cười muốn xỉu|cuoi muon xiu)/.test(lower);

    // Mood: Yêu / iu / crush
    const hasLoveMood = /(\biu\b|iu anh|iu em|iloveu|i love u|i love you|yêu anh|yeu anh|yêu em|yeu em|thương anh|thuong anh|thương em|thuong em|\bcrush\b|crush ơi|crush oi|ỏ\b)/.test(lower);

    // Keyword về loại da / vùng cần chăm sóc
    const hasOilSkin = /(da dầu|da dau|da nhờn|da nhon)/.test(lower);
    const hasDrySkin = /(da khô|da kho|khô quá|kho quá)/.test(lower);
    const hasAcne = /(mụn|mun)/.test(lower);
    const hasBodyCare = /(body|dưỡng thể|duong the|sữa dưỡng thể|sua duong the|toàn thân|toan than)/.test(lower);
    const hasHairCare = /(tóc|toc|gội xả|goi xa|dưỡng tóc|duong toc)/.test(lower);
    const hasLipCare = /(môi|moi|son dưỡng|son duong|dưỡng môi|duong moi)/.test(lower);

    // Budget: 200k, 300k, 500k..., hoặc 300000đ
    let budget = null;
    const budgetMatchK = lower.match(/(\d{2,4})\s*k\b/);
    if (budgetMatchK) {
        budget = parseInt(budgetMatchK[1], 10) * 1000;
    } else {
        const budgetMatchDong = lower.match(/(\d{5,8})\s*đ/);
        if (budgetMatchDong) {
            budget = parseInt(budgetMatchDong[1], 10);
        }
    }

    // =======================
    // 0.1: Nếu chửi tục → nhắc nhẹ
    // =======================
    if (hasHardSwear) {
        return (
            "- Ê ê, chill chill lại ní ơi! Gleen sợ :'(\n" +
            "- Gleen nghe thấy vài từ hơi gắt luôn á, mình né bớt mấy câu chửi tục nha.\n" +
            "- Tập trung quẩy skincare cho da đẹp, mood lên cao rồi chửi… giá sale thôi, Giggity~"
        );
    }

    // =======================
    // 0.2: Nếu cà khịa / chửi nhẹ → Gleen bật lại
    // =======================
    if (hasMildInsult) {
        return (
            "- Á à con vợ này gan dữ ha =)))\n" +
            "- Chê Gleen thì được chứ đừng chê làn da xinh đẹp tương lai của con vợ nha.\n" +
            "- Khai mau loại da + brand con vợ thích đi, để Gleen gỡ kèo bằng mấy deal skincare ngon, giggity~"
        );
    }

    // =======================
    // 0.3: Ủa / hả / gì vậy… -> hỏi lại cục cưng
    // =======================
    if (hasConfusedInterjection && !hasPriceWord && !hasSuggestWord && !brandKey) {
        return (
            "- Thắc mắc gì hả babe? :3\n" +
            "- Gleen vẫn đang ngồi đây nè, con vợ đừng nóng nhen!\n" +
            "- Con vợ nói rõ giúp Gleen: đang hỏi về giá, routine hay brand nào để Gleen tư vấn cho chuẩn nè, giggity~"
        );
    }

    // =======================
    // 0.4: Mode buồn / ế / thất tình → combo skincare chữa lành
    // =======================
    if (hasSadOrSingle) {
        let healingList = AI_PRODUCTS;

        if (brandKey) {
            healingList = healingList.filter((p) => p.brandKey === brandKey);
        }

        const healingKeys = [
            "dưỡng thể",
            "sữa dưỡng thể",
            "serum dưỡng thể",
            "body",
            "sáp dưỡng môi",
            "son dưỡng",
            "môi",
            "tẩy da chết",
            "mặt nạ",
            "nước cân bằng",
            "dưỡng tóc",
            "gội xả"
        ];

        healingList = healingList.filter((p) => {
            const n = p.name.toLowerCase();
            return healingKeys.some((k) => n.includes(k));
        });

        if (budget) {
            healingList = healingList.filter((p) => p.price <= budget);
        }

        if (!healingList.length) {
            healingList = AI_PRODUCTS.filter((p) => !brandKey || p.brandKey === brandKey);
            if (budget) {
                healingList = healingList.filter((p) => p.price <= budget);
            }
        }

        healingList = healingList
            .slice()
            .sort((a, b) => a.price - b.price)
            .slice(0, 4);

        const lines = healingList.map(
            (p) =>
                "• [" +
                p.brandName +
                "] " +
                p.name +
                " ~ " +
                aiFormatPrice(p.price) +
                "đ"
        );

        const brandNameForText = healingList.length ? healingList[0].brandName : "mấy bé skincare";

        return (
            "- Ôi ôi, nghe mùi buồn buồn với ế thất tình đâu đây nè :<\n" +
            "- Người ta bỏ con vợ chứ Gleen không bỏ con vợ đâu nha.\n" +
            "- Giờ mình yêu bản thân trước, dưỡng da cho đẹp rồi người sau tự khắc phải quỳ, Giggity~\n\n" +
            "- Gleen set cho con vợ combo \"skincare chữa lành\" chill chill nè (" + brandNameForText + "):\n\n" +
            lines.join("\n") +
            (budget
                ? "\n\n- Tất cả đều đang trong tầm budget con vợ nói luôn đó, ẤU RAI chưa? :3"
                : "\n\n- Nếu con vợ nói thêm budget tầm bao nhiêu, Gleen còn cân chỉnh combo cho chuẩn ví hơn nữa nha.")
        );
    }

    // =======================
    // 0.45: Ghét / giận / dỗi → mode dỗ dành tsundere
    // =======================
    if (hasAngryMood && !hasPriceWord && !hasSuggestWord) {
        let list = AI_PRODUCTS.slice();

        if (brandKey) {
            list = list.filter((p) => p.brandKey === brandKey);
        }

        list = list
            .sort((a, b) => a.price - b.price)
            .slice(0, 3);

        const lines = list.map(
            (p) =>
                "• [" +
                p.brandName +
                "] " +
                p.name +
                " ~ " +
                aiFormatPrice(p.price) +
                "đ"
        );

        const brandNameForText = list.length ? list[0].brandName : "mấy bé skincare";

        return (
            "- Ui ui, ai dám chọc công chúa của anh Gleen giận vậy nè? Cho tên, anh xử đẹp liền, Giggity~\n" +
            "- Giận thì giận chứ đừng giận làn da xinh đẹp của mình nha.\n" +
            "- Để anh lấy " + brandNameForText + " ra dỗ con vợ nè:\n\n" +
            (list.length
                ? lines.join("\n") +
                "\n\n- Rửa mặt xong bôi nhẹ một lớp là hết muốn ghét cả thế giới luôn á, còn mỗi anh cho con vợ ghét… nhưng ghét theo kiểu thương :3"
                : "- Con vợ hint thêm brand hoặc budget, anh Gleen quẹt cho combo xả giận thơm tho liền.")
        );
    }

    // =======================
    // 0.46: Vui / haha / hihi → mode quẩy & dụ chốt đơn
    // =======================
    if (hasHappyMood && !hasPriceWord && !hasSuggestWord) {
        let list = AI_PRODUCTS.slice();

        if (brandKey) {
            list = list.filter((p) => p.brandKey === brandKey);
        }

        list = list
            .sort((a, b) => a.price - b.price)
            .slice(0, 3);

        const lines = list.map(
            (p) =>
                "• [" +
                p.brandName +
                "] " +
                p.name +
                " ~ " +
                aiFormatPrice(p.price) +
                "đ"
        );

        const brandNameForText = list.length ? list[0].brandName : "mấy bé skincare";

        return (
            "- Thấy con vợ cười hihi haha là anh Gleen muốn quẹt deal mừng liền luôn á, Giggity~\n" +
            (brandKey
                ? "- Đang vui mà réo tên " + brandNameForText + " nữa là hiểu rồi đó, gu xịn nha ;)\n\n"
                : "- Đang mood vui là phải tranh thủ skincare cho da cũng vui theo nè:\n\n") +
            (list.length
                ? lines.join("\n") +
                "\n\n- Nhích nhẹ một em thôi, mai soi gương con vợ cười còn to hơn tiếng haha bây giờ luôn."
                : "- Con vợ cho anh xin thêm brand hoặc tầm tiền, anh mix cho combo \"vui là phải đẹp\" chuẩn bài luôn nha.")
        );
    }

    // =======================
    // 0.47: Yêu / iu / crush → Quagmire bật flirt max level
    // =======================
    if (hasLoveMood && !hasPriceWord && !hasSuggestWord) {
        let list = AI_PRODUCTS.filter((p) => {
            const n = p.name.toLowerCase();
            const matchBrand = !brandKey || p.brandKey === brandKey;
            const matchLoveVibe =
                n.includes("son") ||
                n.includes("môi") ||
                n.includes("dưỡng thể") ||
                n.includes("serum") ||
                n.includes("body");
            return matchBrand && matchLoveVibe;
        });

        if (!list.length) {
            list = AI_PRODUCTS.filter((p) => !brandKey || p.brandKey === brandKey);
        }

        list = list
            .sort((a, b) => a.price - b.price)
            .slice(0, 3);

        const lines = list.map(
            (p) =>
                "• [" +
                p.brandName +
                "] " +
                p.name +
                " ~ " +
                aiFormatPrice(p.price) +
                "đ"
        );

        const brandNameForText = list.length ? list[0].brandName : "mấy bé skincare";

        return (
            "- Ố dề, nghe chữ \"iu\" là tim anh Glenn đập Giggity Giggity luôn đó nha ~\n" +
            (brandKey
                ? "- Nếu con vợ đã yêu " + brandNameForText + " rồi thì để anh cho tình yêu này… có da có thịt thêm nè:\n\n"
                : "- Yêu ai thì yêu chứ nhớ yêu làn da mình trước cái đã nha, anh Gleen support liền:\n\n") +
            (list.length
                ? lines.join("\n") +
                "\n\n- Mình coi như là tam giác tình yêu: Con vợ – anh Gleen – " + brandNameForText +
                ". Skincare đều tay là auto happy ending luôn, hiểu không nè? ;)"
                : "- Con vợ nói nhẹ anh nghe brand + loại da, anh setup luôn combo \"iu bản thân\" cho đúng chất quý cô của Glenn nha.")
        );
    }

    // =======================
    // 0.5: Từ phủ định (hong/không/no/không thích...)
    // =======================
    if (hasNegativeWord && !hasPriceWord) {
        if (brandKey) {
            let altList = AI_PRODUCTS
                .filter((p) => p.brandKey !== brandKey);

            if (budget) {
                altList = altList.filter((p) => p.price <= budget);
            }

            altList = altList
                .slice()
                .sort((a, b) => a.price - b.price)
                .slice(0, 4);

            const lines = altList.map(
                (p) =>
                    "• [" +
                    p.brandName +
                    "] " +
                    p.name +
                    " ~ " +
                    aiFormatPrice(p.price) +
                    "đ"
            );

            return (
                "- Không ẤU RAI brand này hả con vợ? =)) Không sao, Gleen còn cả bầu trời cho con vợ nè.\n\n" +
                "- Thử mấy bé khác coi hợp gu hơn hông:\n\n" +
                lines.join("\n") +
                "\n\n- Con vợ thấy ưng bé nào thì hú Gleen bóc info chi tiết cho nha, giggity~"
            );
        }

        return (
            "- Không ẤU RAI luôn hả con vợ? :))\n" +
            "- Không thích style này thì Gleen đổi mode tư vấn khác cho con vợ được luôn.\n" +
            "- Con vợ nói nhẹ cho Gleen biết: da dầu / khô / hỗn hợp, với gu brand CeraVe, L'Oreal, Vaseline hay Cocoon, Gleen set kèo lại liền, giggity~"
        );
    }

    // =======================
    // 0.6: Từ đồng ý (ok/yes/tới luôn/ngonn...)
    // =======================
    if (hasPositiveWord && !hasPriceWord) {
        if (brandKey) {
            let list = AI_PRODUCTS.filter((p) => p.brandKey === brandKey);

            if (budget) {
                list = list.filter((p) => p.price <= budget);
            }

            list = list
                .slice()
                .sort((a, b) => a.price - b.price)
                .slice(0, 3);

            const brandName = list[0]?.brandName || "brand này";
            const lines = list.map(
                (p) =>
                    "• " +
                    p.name +
                    " ~ " +
                    aiFormatPrice(p.price) +
                    "đ"
            );

            return (
                "- ẤU RÀIIII, con vợ gật đầu chốt vibe " + brandName + " rồi ha, Giggity~\n\n" +
                "- Vậy Gleen quăng luôn vài bé ngon lành " + brandName + " cho con vợ nè:\n\n" +
                lines.join("\n") +
                "\n\n- Con vợ muốn hỏi kỹ thêm bé nào thì gõ tên ra, Gleen bóc phốt thành phần, cách dùng cho nha :3"
            );
        }

        let hotDealsOk = AI_PRODUCTS.slice();
        if (budget) {
            hotDealsOk = hotDealsOk.filter((p) => p.price <= budget);
        }

        hotDealsOk = hotDealsOk
            .sort((a, b) => a.price - b.price)
            .slice(0, 3);

        const lines = hotDealsOk.map(
            (p) =>
                "• [" +
                p.brandName +
                "] " +
                p.name +
                " ~ " +
                aiFormatPrice(p.price) +
                "đ (gốc " +
                aiFormatPrice(p.oldPrice) +
                "đ)"
        );

        return (
            "- Nghe con vợ bảo ok là Gleen ẤU RAI tới liền luôn nha, giggity~\n\n" +
            "- Quăng sơ cho con vợ vài bé ngon-bổ-hời nè:\n\n" +
            lines.join("\n") +
            "\n\n- Con vợ muốn Gleen tư vấn theo loại da thì nói thêm: da dầu/khô/hỗn hợp/nhạy cảm để Gleen custom routine cho chuẩn gu nha."
        );
    }

    // =======================
    // 0.7: Easter egg ẤU RAI
    // =======================
    if (hasAuRai && !hasPriceWord && !hasSuggestWord && !brandKey) {
        return (
            "- ẤU RÀIIIIIIII, Đại bàng đã nhận tín hiệu của chim sẻ\n" +
            "- Gleen Quẹt Mai sẵn sàng quẩy skincare cùng con vợ rồi.\n" +
            "- Con vợ hỏi giá, hỏi brand hay hỏi routine cho da gì thì quăng ra đi, Gleen đỡ hết, Giggity~"
        );
    }

    // =======================
    // 0.8: Easter egg: chỉ gõ "giggity"
    // =======================
    if (hasGiggity && !brandKey && !hasPriceWord && !hasSuggestWord) {
        return (
            "- Nghe thấy \"giggity\" là biết fan cứng Glenn rồi đó nha.\n" +
            "- Gleen đang trực tổng đài skincare đây.\n" +
            "- Con vợ quăng thêm câu hỏi về da / giá / routine là Gleen xử đẹp cho liền, Giggity~"
        );
    }

    // =======================
    // 0.9: nhắc Quagmire / Glenn / Quẹt Mai
    // =======================
    if ((hasQuagmire || hasGlennName || hasBotNameJoke) && !hasPriceWord && !hasSuggestWord) {
        return (
            "- Gọi đúng tên idol luôn mà, Glenn Quagmire bản skincare đã có mặt, Giggity~\n" +
            "- Người ta gọi anh là Quẹt Mai ChatBot, nhưng bên trong anh là Gleen đang ngồi Quẹt Deal cho con vợ á!\n" +
            "- Mở bát bằng CeraVe, L'Oreal, Vaseline hay Cocoon đây bae?"
        );
    }

    // =======================
    // 1. Câu chào
    // =======================
    if (/(^|\s)(hi|hello|xin chào|chào shop|chào bạn)(\s|!|$)/.test(lower)) {
        return (
            "- Giggity!!\n" +
            "- " + BOT_NAME + " kính chào quý khách, phiên bản Glenn Quagmire skincare đây.\n" +
            "- Con vợ muốn hỏi giá hay nhờ Gleen tư vấn đồ của CeraVe, L'Oreal, Vaseline hay Cocoon hơm?"
        );
    }

    // =======================
    // 1.5: Chỉ nhắc brand → auto gợi ý vài món theo brand + context
    // =======================
    if (
        brandKey &&
        !hasPriceWord &&
        !hasSuggestWord &&
        !hasNegativeWord &&
        !hasPositiveWord &&
        !hasSadOrSingle &&
        !hasConfusedInterjection &&
        !hasGiggity &&
        !hasQuagmire &&
        !hasGlennName &&
        !hasBotNameJoke
    ) {
        let list = AI_PRODUCTS.filter((p) => p.brandKey === brandKey);

        if (hasBodyCare) {
            list = list.filter((p) => {
                const n = p.name.toLowerCase();
                return n.includes("dưỡng thể") || n.includes("body");
            });
        } else if (hasHairCare) {
            list = list.filter((p) => {
                const n = p.name.toLowerCase();
                return n.includes("gội") || n.includes("xả") || n.includes("tóc");
            });
        } else if (hasLipCare) {
            list = list.filter((p) => {
                const n = p.name.toLowerCase();
                return n.includes("môi") || n.includes("son");
            });
        } else if (hasOilSkin) {
            list = list.filter((p) => {
                const n = p.name.toLowerCase();
                return n.includes("da dầu") || n.includes("kiềm dầu") || n.includes("giảm dầu");
            });
        } else if (hasDrySkin) {
            list = list.filter((p) => {
                const n = p.name.toLowerCase();
                return n.includes("da khô") || n.includes("rất khô") || n.includes("dưỡng thể") || n.includes("kem dưỡng");
            });
        } else if (hasAcne) {
            list = list.filter((p) => {
                const n = p.name.toLowerCase();
                return n.includes("mụn") || n.includes("da dầu");
            });
        }

        if (budget) {
            list = list.filter((p) => p.price <= budget);
        }

        if (!list.length) {
            list = AI_PRODUCTS.filter((p) => p.brandKey === brandKey);
            if (budget) {
                list = list.filter((p) => p.price <= budget);
            }
        }

        list = list
            .slice()
            .sort((a, b) => a.price - b.price)
            .slice(0, 4);

        if (!list.length) {
            return (
                "- Gleen tìm hoài brand này mà chưa thấy sản phẩm trong kho luôn á :<\n" +
                "- Con vợ thử hỏi brand khác hoặc nói rõ hơn xem đang kiếm món gì nhen."
            );
        }

        const brandName = list[0].brandName;
        const lines = list.map(
            (p) =>
                "• " +
                p.name +
                " ~ " +
                aiFormatPrice(p.price) +
                "đ"
        );

        return (
            "- Nghe con vợ réo tên " + brandName + " là biết gu xịn rồi đó nha, Giggity~\n\n" +
            "- Gleen quăng sương sương vài bé " + brandName + " cho con vợ tham khảo nè:\n\n" +
            lines.join("\n") +
            "\n\n- Con vợ nói thêm loại da / budget nếu muốn Gleen tối ưu combo chuẩn hơn nữa nha."
        );
    }

    // =======================
    // 2. Có brand + hỏi giá
    // =======================
    if (brandKey && hasPriceWord) {
        let list = AI_PRODUCTS.filter((p) => p.brandKey === brandKey);

        if (budget) {
            list = list.filter((p) => p.price <= budget);
        }

        list = list
            .slice()
            .sort((a, b) => a.price - b.price)
            .slice(0, 6);

        if (!list.length) {
            const hints =
                '• "Giá sữa rửa mặt CeraVe cho da dầu?"\n' +
                '• "Gợi ý sản phẩm dưỡng thể Vaseline?"\n' +
                '• "Cho mình xin list sản phẩm Cocoon với giá?"';

            return (
                "- Không ẤU RAIIII :(( Gleen hơi lú, hỏng có hiểu ý con vợ muốn nói.\n" +
                "- Con vợ thử mấy câu kiểu:\n" +
                hints
            );
        }

        const brandName = list[0].brandName;
        const lines = list.map(
            (p) =>
                "• " +
                p.name +
                " ~ " +
                aiFormatPrice(p.price) +
                "đ (gốc " +
                aiFormatPrice(p.oldPrice) +
                "đ)"
        );

        return (
            "- ẤU RAIIIIIIIIIIIIIII, bắt được tín hiệu " + brandName + " rùi, Giggity~\n\n" +
            "- Một số món " + brandName + " đang sale ngon bên shop nè:\n\n" +
            lines.join("\n\n") +
            (budget
                ? "\n\n- Tất cả đều đang trong tầm tiền con vợ hint đó nha."
                : "\n\n- Nếu con vợ chốt món nào thì quăng tên cho Gleen, mình bóc info chi tiết hơn cho nha.")
        );
    }

    // =======================
    // 3. Có brand + xin gợi ý
    // =======================
    if (brandKey && hasSuggestWord) {
        let list = AI_PRODUCTS.filter((p) => p.brandKey === brandKey);

        if (budget) {
            list = list.filter((p) => p.price <= budget);
        }

        list = list
            .slice()
            .sort((a, b) => a.price - b.price)
            .slice(0, 3);

        const brandName = list[0]?.brandName || "thương hiệu này";
        const lines = list.map(
            (p) => "• " + p.name + " ~ " + aiFormatPrice(p.price) + "đ"
        );

        return (
            "- ẤU RAIIIIIIIIIIIIIII, chuẩn gu " + brandName + " của Gleen luôn, Giggity~\n\n" +
            "- Gleen recommend sơ cho con vợ vài món " + brandName + " xịn xò nè:\n\n" +
            lines.join("\n\n") +
            '\n\n- Con vợ có thể hỏi thêm kiểu: "Giá sản phẩm ... bao nhiêu?" hoặc "Món này hợp da dầu/khô hông?" để Gleen tư vấn kỹ hơn nha.'
        );
    }

    // =======================
    // 4. Không ghi rõ brand nhưng có hỏi giá → show hot deals
    // =======================
    if (hasPriceWord) {
        let hotDeals = AI_PRODUCTS.slice();

        if (budget) {
            hotDeals = hotDeals.filter((p) => p.price <= budget);
        }

        hotDeals = hotDeals
            .sort((a, b) => a.price - b.price)
            .slice(0, 5);

        const lines = hotDeals.map(
            (p) =>
                "• [" +
                p.brandName +
                "] " +
                p.name +
                " ~ " +
                aiFormatPrice(p.price) +
                "đ (gốc " +
                aiFormatPrice(p.oldPrice) +
                "đ)"
        );

        return (
            "- ẤU RAIIIIIIIIIIIIIII, ai đang săn sale đó! Có Gleen lo, Giggity~\n\n" +
            "- Một vài deal thơm trong shop nè, nhìn là muốn quẹt giỏ lun:\n\n" +
            lines.join("\n\n") +
            '\n\n- Con vợ có thể nhắn thêm kiểu: "Giá CeraVe cho da dầu" hoặc "Gợi ý Vaseline dưỡng thể" để Gleen filter đúng hơn cho con vợ nha.'
        );
    }

    // =======================
    // 5. Hỏi gợi ý mà không nhắc brand
    // =======================
    if (hasSuggestWord) {
        if (budget) {
            let list = AI_PRODUCTS
                .slice()
                .filter((p) => p.price <= budget)
                .sort((a, b) => a.price - b.price)
                .slice(0, 4);

            const lines = list.map(
                (p) =>
                    "• [" +
                    p.brandName +
                    "] " +
                    p.name +
                    " ~ " +
                    aiFormatPrice(p.price) +
                    "đ"
            );

            return (
                "- Nghe con vợ nhờ gợi ý với budget là Gleen lên mode sale xịn luôn nè, Giggity~\n\n" +
                "- Vài bé hợp túi tiền con vợ nè:\n\n" +
                lines.join("\n") +
                "\n\n- Nếu con vợ cho thêm info loại da (dầu / khô / hỗn hợp / nhạy cảm...) thì Gleen mix combo chuẩn bài hơn nữa luôn."
            );
        }

        return (
            "- Ok luôn, để Gleen tư vấn cho chuẩn bài nha, Giggity~\n\n" +
            "- Cho Gleen xin thêm vài info nè:\n" +
            "- Loại da của con vợ (dầu / khô / hỗn hợp / nhạy cảm ...)\n" +
            "- Vấn đề con vợ đang quan tâm (mụn, thâm, dưỡng ẩm, body, tóc ...)\n" +
            "- Hãng con vợ thích (CeraVe, L'Oreal, Vaseline, Cocoon)\n\n" +
            "- Xong Gleen mix cho con vợ combo hợp gu với túi tiền luôn :3"
        );
    }

    // =======================
    // 6. Mặc định: không hiểu rõ câu hỏi
    // =======================
    const hints =
        '• "Giá sữa rửa mặt CeraVe cho da dầu?"\n' +
        '• "Gợi ý sản phẩm dưỡng thể Vaseline?"\n' +
        '• "Cho mình xin list sản phẩm Cocoon với giá?"';

    return (
        "- Không ẤU RAI :(( Gleen hỏng có hiểu, chưa được dạy cách trả lời huhu.\n" +
        "- Con vợ thử hỏi theo kiểu:\n" +
        hints +
        "\n- Giggity~ thử lại phát nữa xem sao nè!"
    );
}

// =======================
// GỌI BACKEND (NẾU CÓ) + FALLBACK FRONTEND
// =======================
async function askBotSmart(messageText) {
    // Ưu tiên gọi BE: /api/chat
    try {
        const res = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: messageText }),
        });

        if (res.ok) {
            const data = await res.json();
            if (data && data.reply) {
                return data.reply;
            }
        }
    } catch (err) {
        console.warn("Không gọi được /api/chat, fallback sang frontend logic.", err);
    }

    // Nếu tới đây thì dùng logic FE
    return aiBuildReply(messageText);
}

// =======================
// UI CHATBOT
// =======================
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".ai-chatbot-container");
    if (!container) return; // chỉ chạy ở trang có widget

    const toggleBtn = container.querySelector(".ai-chatbot-button");
    const chatWindow = container.querySelector(".ai-chatbot-window");
    const closeBtn = container.querySelector(".ai-chatbot-close");
    const messagesEl = container.querySelector(".ai-chatbot-messages");
    const form = container.querySelector("#ai-chatbot-form");
    const input = container.querySelector("#ai-chatbot-input");

    if (!toggleBtn || !chatWindow || !messagesEl || !form || !input) return;

    /**
     * Thêm / cập nhật 1 bubble chat
     * - role: 'user' | 'bot'
     * - text: nội dung
     * - existingNode: nếu truyền vào thì chỉ thay text (dùng cho loading -> reply)
     */
    function addMessage(role, text, existingNode) {
        const prefix = role === "user" ? USER_PREFIX : BOT_PREFIX;

        const node = existingNode || document.createElement("div");
        node.className =
            "ai-chatbot-message " +
            (role === "user" ? "ai-chatbot-message--user" : "ai-chatbot-message--bot");

        node.textContent = prefix + text;

        if (!existingNode) {
            messagesEl.appendChild(node);
        }

        messagesEl.scrollTop = messagesEl.scrollHeight;
        return node;
    }

    // Toggle khung chat
    toggleBtn.addEventListener("click", () => {
        chatWindow.classList.toggle("open");
        if (chatWindow.classList.contains("open")) {
            input.focus();
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            chatWindow.classList.remove("open");
        });
    }

    // Lời chào mặc định khi mở trang
    // Lời chào mặc định khi mở trang
    addMessage(
        "bot",
        "- Giggity!!\n" +
        "- " + BOT_NAME + " kính chào quý khách, phiên bản Glenn Quagmire skincare đây.\n" +
        "- Bạn cứ hỏi Gleen về giá, deal hời hoặc nhờ gợi ý sản phẩm CeraVe, L'Oreal, Vaseline, Cocoon là Gleen support liền nha."
    );

    // Xử lý gửi tin
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const text = input.value.trim();
        if (!text) return;

        // Reset input
        input.value = "";

        // Thêm tin nhắn user
        addMessage("user", text);

        // Tin nhắn loading (sẽ bị thay bởi câu trả lời)
        const loadingNode = addMessage("bot", "Đang suy nghĩ... Con vợ chờ xíu nha... :3");

        // Hỏi bot (BE nếu có, FE nếu không)
        const reply = await askBotSmart(text);

        // Thay nội dung loading bằng reply
        addMessage("bot", reply, loadingNode);
    });
});
