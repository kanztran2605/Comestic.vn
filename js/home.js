// js/home.js

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.hero-slide');
    const nextBtn = document.querySelector('.hero-next');
    const prevBtn = document.querySelector('.hero-prev');

    if (!slides.length) return;

    let currentIndex = 0;
    let timerId;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        timerId = setInterval(nextSlide, 5000); // 5 giây đổi 1 lần
    }

    function resetAutoSlide() {
        clearInterval(timerId);
        startAutoSlide();
    }

    // Event nút bấm
    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            nextSlide();
            resetAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            prevSlide();
            resetAutoSlide();
        });
    }

    // Khởi động
    showSlide(currentIndex);
    startAutoSlide();
});
