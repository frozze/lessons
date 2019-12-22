var dg = document.getElementById.bind(document),
    left = 1,
    right = 100,
    mid = 0,
    counter = 0,
    elTry = dg('try'),
    sTry = elTry.querySelector("span"),
    elGuess = dg('guess'),
    btnGame = dg('btn-game'),
    btnOk = dg('btn-ok'),
    btnLeft = dg('btn-left'),
    btnRight = dg('btn-right'),
    isGame = false;

btnGame.addEventListener("click", function () {
    left = 1;
    right = 100;
    counter = 0;
    guess();
});


function guess() {
    counter++;
    mid = Math.floor(left + (right - left) / 2);
    if (mid === left || mid === right) {
        answer();
    } else {
        elTry.style.display = 'block';
        sTry.innerText = '' + mid + '?';
        elGuess.style.display = 'block';
    }
}

function answer() {
    sTry.innerHTML = `${mid}!<br>Отгадал за ${counter} попыток.`;
    elGuess.style.display = 'none';
    mid = -1;
}

btnOk.addEventListener("click", answer);
btnLeft.addEventListener("click", function () {
    guess(right = mid);
});
btnRight.addEventListener("click", function () {
    guess(left = mid);
});