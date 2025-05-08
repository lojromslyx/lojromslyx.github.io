let currentSlide = 0;
const slides = document.querySelectorAll('.slider-inner img');
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Byt bild var 4:e sekund
setInterval(showNextSlide, 4000);
