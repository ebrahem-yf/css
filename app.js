

// محتوى ملف index.js
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0; 

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);



