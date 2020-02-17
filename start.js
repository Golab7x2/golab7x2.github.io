const START = 1597446000000;
const DIV_TIME = document.getElementById('time');

function converter(timeLeft) {
    timeLeft = Math.floor(timeLeft / 1000);
    let d = Math.floor(timeLeft / 86400);
    timeLeft -= (d * 86400);
    let h = Math.floor(timeLeft / 3600);
    timeLeft -= (h * 3600);
    let m = Math.floor(timeLeft / 60);
    timeLeft -= (m * 60);
    let s = timeLeft;

    let mS = m < 10 ? `0${m}` : `${m}`;
    let sS = s < 10 ? `0${s}` : `${s}`;

    return `DNI: ${d}
    GODZINY: ${h}
    MINUTY: ${mS}
    SEKUNDY: ${sS}`;
}

function runTimer() {
    let timeLeft = START - Date.now();
    setInterval(() => {
        DIV_TIME.innerText = converter(timeLeft);
        timeLeft -= 1000;
    }, 1000);
}

runTimer();
