// js/search.js

const SEARCH_KEY = "header_search_keyword";

function isHomePage() {
    const path = window.location.pathname;
    return (
        path.endsWith("/") ||
        path.endsWith("index.html") ||
        path.endsWith("home.html")  // phòng khi bạn còn file cũ
    );
}

// Lọc sản phẩm trên trang home
function applySearchOnHome(keyword) {
    const cards = document.querySelectorAll(".product-card");
    if (!cards.length) return;

    const normalized = (keyword || "").toLowerCase();
    let matchCount = 0;

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const matched = !normalized || text.includes(normalized);

        card.style.display = matched ? "" : "none";
        if (matched) matchCount++;
    });

    const emptyNote = document.getElementById("search-empty-note");
    if (emptyNote) {
        if (!normalized) {
            emptyNote.style.display = "none";
        } else if (matchCount === 0) {
            emptyNote.style.display = "block";
            emptyNote.textContent = `Không tìm thấy sản phẩm phù hợp với "${keyword}".`;
        } else {
            emptyNote.style.display = "none";
        }
    }

    const productsSection =
        document.getElementById("products-section") ||
        document.querySelector(".products-section");

    if (productsSection) {
        productsSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

function setupHeaderSearch() {
    const input = document.getElementById("header-search-input");
    if (!input) return;

    const wrapper = input.closest(".search-bar");
    const icon = wrapper ? wrapper.querySelector(".search-icon") : null;

    function doSearch() {
        const keyword = input.value.trim();

        // Lưu keyword để dùng sau khi redirect
        localStorage.setItem(SEARCH_KEY, keyword);

        if (!isHomePage()) {
            // Đang ở trang khác -> nhảy về index.html
            window.location.href = "index.html";
        } else {
            // Đang ở home -> lọc luôn
            applySearchOnHome(keyword);
        }
    }

    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            doSearch();
        }
    });

    if (icon) {
        icon.addEventListener("click", function (e) {
            e.preventDefault();
            doSearch();
        });
    }

    // Nếu vừa redirect từ trang khác về home với keyword đã lưu
    if (isHomePage()) {
        const saved = localStorage.getItem(SEARCH_KEY) || "";
        if (saved) {
            input.value = saved;
            applySearchOnHome(saved);
        }
    }
}

document.addEventListener("DOMContentLoaded", setupHeaderSearch);