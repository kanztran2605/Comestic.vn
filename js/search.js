// js/search.js

function isHomePage() {
    const path = window.location.pathname;
    const body = document.body;
    return (
        body.classList.contains("page-home") ||
        path.endsWith("/") ||
        path.endsWith("index.html") ||
        path.endsWith("home.html")
    );
}

function isProductListPage() {
    const path = window.location.pathname;
    const body = document.body;
    return (
        body.classList.contains("page-product-list") ||
        path.endsWith("productList.html")
    );
}

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("header-search-input");
    if (!input) return;

    const wrapper = input.closest(".search-bar");
    const icon = wrapper ? wrapper.querySelector(".search-icon") : null;

    function doSearch() {
        const keyword = (input.value || "").trim();

        // ĐANG Ở TRANG HOME (index.html)
        if (isHomePage()) {
            if (typeof window.applyHomeSearch === "function") {
                window.applyHomeSearch(keyword);
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
            return;
        }

        // ĐANG Ở TRANG DANH SÁCH (productList.html)
        if (isProductListPage()) {
            if (typeof window.applyProductListSearch === "function") {
                window.applyProductListSearch(keyword);
            }
            const listSection =
                document.getElementById("brand-products") ||
                document.querySelector("#brand-products");
            if (listSection) {
                listSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
            return;
        }

        // CÁC TRANG KHÁC -> ĐẨY VỀ HOME
        if (!keyword) {
            window.location.href = "index.html";
        } else {
            window.location.href =
                "index.html?keyword=" + encodeURIComponent(keyword);
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

    // Nếu từ trang khác redirect về home/index với ?keyword=...
    if (isHomePage()) {
        const params = new URLSearchParams(window.location.search);
        const kw = params.get("keyword") || "";
        if (kw && typeof window.applyHomeSearch === "function") {
            input.value = kw;
            window.applyHomeSearch(kw);
        }
    }
});