function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing');
}


function playSound(e) {
    var key = document.querySelector(`.key[data-key="${e.keyCode}"`);
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

var keys = Array.from(document.querySelectorAll(".key"));
console.log(keys);
keys.forEach(function (key) {
    return key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown', playSound)