// server.js - BE basic cho Cosmetic.vn
// Chạy: node server.js

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static toàn bộ project Cosmetic.vn
// (css/, js/, html/, images/, index.html,...)
app.use(express.static(path.join(__dirname)));

// Route mặc định: vào trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// ================================
// DATA 24 SẢN PHẨM (theo list bạn gửi)
// ================================
const products = [
    // ===== CeraVe =====
    {
        id: 'cerave-1',
        brandKey: 'cerave',
        brandName: 'CeraVe',
        name: 'Sữa Rửa Mặt CeraVe Sạch Sâu Cho Da Thường Đến Da Dầu 473ml',
        volume: '473ml',
        oldPrice: 490000,
        price: 334000
    },
    {
        id: 'cerave-2',
        brandKey: 'cerave',
        brandName: 'CeraVe',
        name: 'Kem Dưỡng CeraVe Cho Da Khô Đến Rất Khô 340g',
        volume: '340g',
        oldPrice: 450000,
        price: 304000
    },
    {
        id: 'cerave-3',
        brandKey: 'cerave',
        brandName: 'CeraVe',
        name: 'Sữa Rửa Mặt Cerave Cho Da Dầu Mụn 236ml',
        volume: '236ml',
        oldPrice: 370000,
        price: 262000
    },
    {
        id: 'cerave-4',
        brandKey: 'cerave',
        brandName: 'CeraVe',
        name: 'Kem Dưỡng CeraVe Dạng Gel Kiềm Dầu Cho Da Dầu & Hỗn Hợp 52ml',
        volume: '52ml',
        oldPrice: 370000,
        price: 249000
    },
    {
        id: 'cerave-5',
        brandKey: 'cerave',
        brandName: 'CeraVe',
        name: 'Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 88ml',
        volume: '88ml',
        oldPrice: 160000,
        price: 121000
    },
    {
        id: 'cerave-6',
        brandKey: 'cerave',
        brandName: 'CeraVe',
        name: 'Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 236ml',
        volume: '236ml',
        oldPrice: 330000,
        price: 233000
    },

    // ===== L'Oreal =====
    {
        id: 'loreal-1',
        brandKey: 'loreal',
        brandName: "L'Oreal",
        name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml",
        volume: '400ml',
        oldPrice: 239000,
        price: 125000
    },
    {
        id: 'loreal-2',
        brandKey: 'loreal',
        brandName: "L'Oreal",
        name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Cho Da Dầu 400ml",
        volume: '400ml',
        oldPrice: 279000,
        price: 154000
    },
    {
        id: 'loreal-3',
        brandKey: 'loreal',
        brandName: "L'Oreal",
        name: "Nước Tẩy Trang L'Oreal Căng Mịn Da 400ml",
        volume: '400ml',
        oldPrice: 279000,
        price: 154000
    },
    {
        id: 'loreal-4',
        brandKey: 'loreal',
        brandName: "L'Oreal",
        name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Trang Điểm 400ml",
        volume: '400ml',
        oldPrice: 279000,
        price: 143000
    },
    {
        id: 'loreal-5',
        brandKey: 'loreal',
        brandName: "L'Oreal",
        name: "Kem Chống Nắng L'Oreal X20 Thoáng Da Mỏng Nhẹ 50ml",
        volume: '50ml',
        oldPrice: 399000,
        price: 228000
    },
    {
        id: 'loreal-6',
        brandKey: 'loreal',
        brandName: "L'Oreal",
        name: "Bộ Gội Xả L'Oreal Dưỡng Tóc Suôn Mượt Tóc Cao Cấp 440ml x 2",
        volume: '440ml x 2',
        oldPrice: 518000,
        price: 288000
    },

    // ===== Vaseline =====
    {
        id: 'vaseline-1',
        brandKey: 'vaseline',
        brandName: 'Vaseline',
        name: 'Serum Dưỡng Thể Vaseline Chống Nắng Sáng Da 300ml (Mới)',
        volume: '300ml',
        oldPrice: 203000,
        price: 119000
    },
    {
        id: 'vaseline-2',
        brandKey: 'vaseline',
        brandName: 'Vaseline',
        name: 'Sữa Dưỡng Thể Vaseline Gluta-Hya Nâng Tông Tức Thì 300ml',
        volume: '300ml',
        oldPrice: 195000,
        price: 119000
    },
    {
        id: 'vaseline-3',
        brandKey: 'vaseline',
        brandName: 'Vaseline',
        name: 'Sáp Dưỡng Môi Vaseline Hồng Xinh 7g',
        volume: '7g',
        oldPrice: 82000,
        price: 70000
    },
    {
        id: 'vaseline-4',
        brandKey: 'vaseline',
        brandName: 'Vaseline',
        name: 'Combo 2 Sữa Dưỡng Thể Vaseline Sáng Da Chuyên Sâu Ban Đêm 300ml (Mới)',
        volume: '300ml x 2',
        oldPrice: 300000,
        price: 198000
    },
    {
        id: 'vaseline-5',
        brandKey: 'vaseline',
        brandName: 'Vaseline',
        name: 'Son Dưỡng Có Màu Vaseline Hồng Cam Êm Dịu 3g',
        volume: '3g',
        oldPrice: 99000,
        price: 87000
    },
    {
        id: 'vaseline-6',
        brandKey: 'vaseline',
        brandName: 'Vaseline',
        name: 'Sữa Dưỡng Thể Vaseline Sáng Da Tức Thì 320ml',
        volume: '320ml',
        oldPrice: 143000,
        price: 93000
    },

    // ===== Cocoon =====
    {
        id: 'cocoon-1',
        brandKey: 'cocoon',
        brandName: 'Cocoon',
        name: 'Combo Cocoon Nước Cân Bằng Sen Hậu Giang 310ml + Nước Tẩy Trang Bí Đao 500ml',
        volume: '310ml + 500ml',
        oldPrice: 590000,
        price: 217000
    },
    {
        id: 'cocoon-2',
        brandKey: 'cocoon',
        brandName: 'Cocoon',
        name: 'Bộ Gội Xả Bưởi Cocoon Không Sulfate Và Giảm Gãy Rụng 500ml + 310ml',
        volume: '500ml + 310ml',
        oldPrice: 560000,
        price: 290000
    },
    {
        id: 'cocoon-3',
        brandKey: 'cocoon',
        brandName: 'Cocoon',
        name: 'Combo Cocoon Tẩy Da Chết Cho Mặt 150ml + Toàn Thân 200ml Từ Cà Phê Đắk Lắk',
        volume: '150ml + 200ml',
        oldPrice: 290000,
        price: 165000
    },
    {
        id: 'cocoon-4',
        brandKey: 'cocoon',
        brandName: 'Cocoon',
        name: 'Combo 2 Nước Tẩy Trang Bí Đao Cocoon Làm Sạch & Giảm Dầu 500ml',
        volume: '500ml x 2',
        oldPrice: 590000,
        price: 299000
    },
    {
        id: 'cocoon-5',
        brandKey: 'cocoon',
        brandName: 'Cocoon',
        name: 'Combo Cocoon Mặt Nạ Nghệ Hưng Yên & Tẩy Da Chết Toàn Thân Cà Phê Đắk Lắk 30ml + 200ml',
        volume: '30ml + 200ml',
        oldPrice: 270000,
        price: 165000
    },
    {
        id: 'cocoon-6',
        brandKey: 'cocoon',
        brandName: 'Cocoon',
        name: 'Nước Dưỡng Tóc Cocoon Tinh Dầu Bưởi 140ml (Mới)',
        volume: '140ml',
        oldPrice: 165000,
        price: 113000
    }
];

// ================================
// API PRODUCTS BASIC
// ================================
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    if (!product) {
        return res.status(404).json({ message: 'Không tìm thấy sản phẩm.' });
    }
    res.json(product);
});

// ================================
// AI CHATBOT BASIC (rule-based đơn giản)
// ================================
function detectBrandKey(text) {
    const lower = text.toLowerCase();
    if (lower.includes('cerave')) return 'cerave';
    if (lower.includes("l'oreal") || lower.includes('loreal') || lower.includes('l oreal')) return 'loreal';
    if (lower.includes('vaseline')) return 'vaseline';
    if (lower.includes('cocoon')) return 'cocoon';
    return null;
}

function formatPrice(price) {
    return price.toLocaleString('vi-VN');
}

function buildChatReply(message) {
    const text = (message || '').toString().trim();
    if (!text) {
        return 'Chào bạn, mình là AI ChatBot của Cosmetics.vn. Bạn có thể hỏi mình về giá, khuyến mãi hoặc gợi ý sản phẩm nha.';
    }

    const lower = text.toLowerCase();

    // Câu chào
    if (/(^|\s)(hi|hello|xin chào|chào shop|chào bạn)(\s|!|$)/.test(lower)) {
        return 'Hello 👋 Mình là AI ChatBot của Cosmetics.vn. Bạn muốn tư vấn sản phẩm nào (CeraVe, L\'Oreal, Vaseline, Cocoon)?';
    }

    const brandKey = detectBrandKey(lower);
    const hasPriceWord = /(giá|bao nhiêu|mấy tiền|bn tiền|tiền|đồng|k)/.test(lower);
    const hasSuggestWord = /(gợi ý|nên dùng|nên mua|tư vấn|hợp với|phù hợp)/.test(lower);

    // Nếu có brand + hỏi giá
    if (brandKey && hasPriceWord) {
        const list = products.filter(p => p.brandKey === brandKey).slice(0, 6);
        if (!list.length) {
            return 'Hiện tại mình chưa có sản phẩm nào của hãng này trong hệ thống.';
        }
        const brandName = list[0].brandName;
        const lines = list.map(p => `- ${p.name} ~ ${formatPrice(p.price)}đ (giá gốc ${formatPrice(p.oldPrice)}đ)`);
        return `Một số sản phẩm ${brandName} bên shop và giá sau giảm:\n` + lines.join('\n');
    }

    // Nếu có brand + xin gợi ý
    if (brandKey && hasSuggestWord) {
        const list = products.filter(p => p.brandKey === brandKey).slice(0, 3);
        const brandName = list[0]?.brandName || 'thương hiệu này';
        const lines = list.map(p => `- ${p.name} ~ ${formatPrice(p.price)}đ`);
        return `Mình gợi ý một số sản phẩm ${brandName} bên shop:\n` +
            lines.join('\n') +
            '\nBạn có thể hỏi tiếp: "Giá sản phẩm ... bao nhiêu?" để mình trả lời chi tiết hơn nha.';
    }

    // Không ghi rõ brand nhưng hỏi giá/chung chung
    if (hasPriceWord) {
        const hotDeals = [...products]
            .sort((a, b) => a.price - b.price)
            .slice(0, 5);

        const lines = hotDeals.map(p =>
            `- [${p.brandName}] ${p.name} ~ ${formatPrice(p.price)}đ (gốc ${formatPrice(p.oldPrice)}đ)`
        );

        return 'Một số sản phẩm đang có giá tốt bên shop:\n' +
            lines.join('\n') +
            '\nBạn có thể nhắn thêm tên hãng (ví dụ: "Giá CeraVe cho da dầu") để mình lọc kỹ hơn nha.';
    }

    // Hỏi gợi ý mà không nhắc brand
    if (hasSuggestWord) {
        return 'Bạn cho mình xin thêm thông tin da (da dầu, da khô, da nhạy cảm...) và hãng bạn thích (CeraVe, L\'Oreal, Vaseline, Cocoon) để mình tư vấn chuẩn hơn nha.';
    }

    // Mặc định
    return 'Mình chưa hiểu rõ câu hỏi của bạn lắm 🥺 Bạn có thể hỏi kiểu như:\n' +
        '- "Giá sữa rửa mặt CeraVe cho da dầu?"\n' +
        '- "Gợi ý sản phẩm dưỡng thể Vaseline?"\n' +
        '- "Cho mình xin list sản phẩm Cocoon với giá?"';
}

app.post('/api/chat', (req, res) => {
    const { message } = req.body || {};
    const reply = buildChatReply(message);
    res.json({ reply });
});

// ================================
// START SERVER
// ================================
app.listen(PORT, () => {
    console.log(`Cosmetic.vn server đang chạy tại http://localhost:${PORT}`);
});