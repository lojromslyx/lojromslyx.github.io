var text = document.getElementById('text');
var originalText = text.innerText;
var words = originalText.split(' ');
var animationDelay = 90;
var newDom = '';

for (let i = 0; i < words.length; i++) {
    newDom += '<span class="char" style="animation-delay:' + (i * animationDelay) + 'ms">' + words[i] + '</span> ';
}

text.innerHTML = newDom;

