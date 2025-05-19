var text = document.getElementById('text'); //hämtar elemtet med id "text"
var originalText = text.innerText; //hämtar innehållet och sparar den i ny variabel
var words = originalText.split(' '); //delar upp texten i en arrey av ord
var animationDelay = 90; //bestämmer hur mycket fördröjning som ska vara mellan varje varje ords animation
var newDom = '';

//Varje ord får en individuell animation-delay som ökar med i * 90 ms – så att orden animeras ett efter ett.
for (let i = 0; i < words.length; i++) {
    newDom += '<span class="char" style="animation-delay:' + (i * animationDelay) + 'ms">' + words[i] + '</span> ';
}

text.innerHTML = newDom;

