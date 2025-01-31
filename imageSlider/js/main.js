
let knapp=$(".prev, .next")

knapp.show();


$(document).ready(function() {
    
    $('.next').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});

let dots=$(".dots-container")
dots.show();

const slide1 = document.getElementById("dot1");
const slide2 = document.getElementById("dot2");
const slide3 = document.getElementById("dot3");
const slide4 = document.getElementById("dot4");

let radio_array = [slide1, slide2, slide3, slide4]; 
let radio_length = radio_array.length;

let i = 0;
radio_array[i].checked = true; 

const right = document.querySelector(".next"); 
const screenLeft = document.querySelector(".prev");

right.onclick = () => {
    i++;
    if (i < 0) {
      i = radio_length - 1;}
      radio_array[i].checked = true;
};

screenLeft.onclick = () => {
    i--;
    if (i < 0) {
      i = radio_length - 1;}
      radio_array[i].checked = true;
};

