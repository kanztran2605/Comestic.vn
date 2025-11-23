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
const BOT_PREFIX = "Quẹt Mai: ";
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
    return price.toLocaleString("vi-VN");
}

/**
 * Build câu trả lời mini-AI ngay trên frontend.
 * Dùng khi:
 *  - Không có backend
 *  - Hoặc backend lỗi
 */
function aiBuildReply(message) {
    const text = (message || "").toString().trim();

    if (!text) {
        return (
            BOT_NAME +
            " xin chào bạn nè :3\n" +
            "Bạn có thể hỏi mình về giá, khuyến mãi hoặc gợi ý sản phẩm nha."
        );
    }

    const lower = text.toLowerCase();

    // 1. Câu chào
    if (/(^|\s)(hi|hello|xin chào|chào shop|chào bạn)(\s|!|$)/.test(lower)) {
        return (
            ":3\n" +
            BOT_NAME +
            " xin chào bạn nha.\n" +
            "Bạn muốn tư vấn sản phẩm nào (CeraVe, L'Oreal, Vaseline, Cocoon)?"
        );
    }

    const brandKey = aiDetectBrandKey(lower);
    const hasPriceWord = /(giá|bao nhiêu|mấy tiền|bn tiền|tiền|đồng|k)/.test(lower);
    const hasSuggestWord = /(gợi ý|nên dùng|nên mua|tư vấn|hợp với|phù hợp)/.test(lower);

    // 2. Có brand + hỏi giá
    if (brandKey && hasPriceWord) {
        const list = AI_PRODUCTS.filter((p) => p.brandKey === brandKey).slice(0, 6);

        if (!list.length) {
            const hints =
                '• "Giá sữa rửa mặt CeraVe cho da dầu?"\n' +
                '• "Gợi ý sản phẩm dưỡng thể Vaseline?"\n' +
                '• "Cho mình xin list sản phẩm Cocoon với giá?"';

            return (
                "Không ẤU RAIIIII :(((, tôi không hiểu ý của bạn, bạn có thể thử các ý sau:\n" +
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
                "đ (giá gốc " +
                aiFormatPrice(p.oldPrice) +
                "đ)"
        );

        // mỗi sản phẩm cách nhau 1 hàng trống
        return (
            "ẤU RAIIIIIIIIIIIIIII, đây là thông tin bạn muốn tìm :3\n\n" +
            "Một số sản phẩm " +
            brandName +
            " bên shop và giá sau giảm nè:\n\n" +
            lines.join("\n\n") +
            "\n\nBạn có thể hỏi chi tiết hơn về từng sản phẩm nha ^^"
        );
    }

    // 3. Có brand + xin gợi ý
    if (brandKey && hasSuggestWord) {
        const list = AI_PRODUCTS.filter((p) => p.brandKey === brandKey).slice(0, 3);
        const brandName = list[0]?.brandName || "thương hiệu này";
        const lines = list.map(
            (p) => "• " + p.name + " ~ " + aiFormatPrice(p.price) + "đ"
        );

        return (
            "ẤU RAIIIIIIIIIIIIIII, đây là thông tin bạn muốn tìm :3\n\n" +
            "Đây là vài gợi ý " +
            brandName +
            " cho bạn nè :3\n\n" +
            lines.join("\n\n") +
            '\n\nBạn có thể hỏi thêm: "Giá sản phẩm ... bao nhiêu?" để mình nói rõ hơn nha.'
        );
    }

    // 4. Không ghi rõ brand nhưng có hỏi giá → show hot deals
    if (hasPriceWord) {
        const hotDeals = [...AI_PRODUCTS].sort((a, b) => a.price - b.price).slice(0, 5);
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
            "ẤU RAIIIIIIIIIIIIIII, đây là thông tin bạn muốn tìm :3\n\n" +
            "Một vài deal thơm trong shop nè, nhìn cũng okela lắm :)))\n\n" +
            lines.join("\n\n") +
            '\n\nBạn có thể nhắn: "Giá CeraVe cho da dầu" hoặc "Gợi ý Vaseline dưỡng thể" để mình tư vấn kỹ hơn nha.'
        );
    }

    // 5. Hỏi gợi ý mà không nhắc brand
    if (hasSuggestWord) {
        return (
            "Cho mình xin thêm info xíu nha :3\n" +
            "- Loại da của bạn (dầu / khô / hỗn hợp / nhạy cảm ...)\n" +
            "- Hãng bạn thích (CeraVe, L'Oreal, Vaseline, Cocoon)\n\n" +
            "Xong mình gợi ý chuẩn gu cho bạn luôn ^^"
        );
    }

    // 6. Mặc định: không hiểu rõ câu hỏi
    const hints =
        '• "Giá sữa rửa mặt CeraVe cho da dầu?"\n' +
        '• "Gợi ý sản phẩm dưỡng thể Vaseline?"\n' +
        '• "Cho mình xin list sản phẩm Cocoon với giá?"';

    return (
        "Không ẤU RAIIIII :(((, tôi không hiểu ý của bạn, bạn có thể thử các ý sau:\n" +
        hints
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
    addMessage(
        "bot",
        ":3\n" +
        BOT_NAME +
        " xin chào bạn!\n" +
        "Bạn có thể hỏi mình về giá hoặc gợi ý sản phẩm CeraVe, L'Oreal, Vaseline, Cocoon nha."
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
        const loadingNode = addMessage("bot", "Đang suy nghĩ cho bạn chút xíu nha... :3");

        // Hỏi bot (BE nếu có, FE nếu không)
        const reply = await askBotSmart(text);

        // Thay nội dung loading bằng reply
        addMessage("bot", reply, loadingNode);
    });
});
