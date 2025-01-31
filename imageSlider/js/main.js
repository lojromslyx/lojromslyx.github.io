//sparar .prev och .next i variabeln knapp
let knapp=$(".prev, .next")
//visar knapp om javascript är aktiverat
knapp.show();

//skapar en funktion till slidern
$(document).ready(function() {
    //om man klickar pil åt höger så aktiveras funktionen, här flyttar den bak bilden och lägger fram nästa bild
    $('.next').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });
    //om man klickar pil åt vänster så aktiveras funktionen, här flyttar den bak bilden och lägger fram förekommande bild
    $('.prev').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});


//radiobuttons

//sparar dots-container till variabel dots
let dots=$(".dots-container")
//visar dot när javascirpt är aktiverat
dots.show();

//hämtar och sparar prickarna till slide show
const slide1 = document.getElementById("dot1");
const slide2 = document.getElementById("dot2");
const slide3 = document.getElementById("dot3");
const slide4 = document.getElementById("dot4");

//sparar alla slides i en array
let radio_array = [slide1, slide2, slide3, slide4]; 
//kollar längden på arrayen
let radio_length = radio_array.length;

//sparar variabel i som 0
let i = 0;
//kollar om array = 0 för att veta första sliden
radio_array[i].checked = true; 

//sparar tag .next och .prev  
const right = document.querySelector(".next"); 
const screenLeft = document.querySelector(".prev");

//om man klickar till höger så lägger den på +1 på slidern, dvs flyttar pricken åt höger
right.onclick = () => {
    i++;
    if (i < 0) {
      i = radio_length - 1;}
      radio_array[i].checked = true;
};

//om man klickar till vänster så lägger den på -1 på slidern, dvs flyttar pricken åt vänster
screenLeft.onclick = () => {
    i--;
    if (i < 0) {
      i = radio_length - 1;}
      radio_array[i].checked = true;
};

