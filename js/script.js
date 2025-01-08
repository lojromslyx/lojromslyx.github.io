document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".recension-karusell");
    const intervalTime = 2500; 
    let scrollAmount = 0;

    function scrollCarousel() {
        const singleReviewWidth = carousel.firstElementChild.offsetWidth + 20; 
        scrollAmount += singleReviewWidth;

        if (scrollAmount >= carousel.scrollWidth) {
            scrollAmount = 0; 
        }

        carousel.scrollTo({
            left: scrollAmount,
            behavior: "smooth", 
        });
    }

    setInterval(scrollCarousel, intervalTime);
});