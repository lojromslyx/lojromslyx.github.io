document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".recension-karusell");
    const intervalTime = 2500; // Hur ofta (ms) recensionerna ska byta
    let scrollAmount = 0;

    function scrollCarousel() {
        const singleReviewWidth = carousel.firstElementChild.offsetWidth + 20; // Bredden på en recension plus margin
        scrollAmount += singleReviewWidth;

        if (scrollAmount >= carousel.scrollWidth) {
            scrollAmount = 0; // Återställ om vi har nått slutet
        }

        carousel.scrollTo({
            left: scrollAmount,
            behavior: "smooth", // Gör scrollningen mjuk
        });
    }

    setInterval(scrollCarousel, intervalTime); // Starta scrollandet var 3:e sekund
});