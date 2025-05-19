let currentSlide = 0;
const slides = document.querySelectorAll('.slider-inner img'); //bilden hämtas
const totalSlides = slides.length; //räknas hur många bilder det finns totalt

function showNextSlide() {
    slides[currentSlide].classList.remove('active'); //tar bort klassen active från den nuvarande bilden
    currentSlide = (currentSlide + 1) % totalSlides; //ökar curentslide med 1 
    slides[currentSlide].classList.add('active'); // lägger till klassen active på den nya bilden
}

// Byt bild var 4:e sekund
setInterval(showNextSlide, 4000);
