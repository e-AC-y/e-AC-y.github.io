const startTime = 11 / 30;
const bpm = 146 / 4;
const playbackSpeed = 1;

const interval = 60000 / bpm / playbackSpeed;

const bgm = document.getElementById("bgm");
const dot = document.getElementById("dotGray");
const score = document.getElementById("score");

bgm.currentTime = startTime;
bgm.playbackRate = playbackSpeed;
bgm.play();

const intervalID = setInterval(getRandomXY, interval);

const newspaperSpinning = [
    { transform: ' scale(1)' },
    { transform: ' scale(0)' }
];

const newspaperTiming = {
    duration: interval + 500,
    iterations: 1,
}

function getRandomXY() {
    dot.innerHTML = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    dot.style.top = (15 + Math.random() * 70) + "vh";
    dot.style.left = (15 + Math.random() * 70) + "vw";
    dot.animate(newspaperSpinning, newspaperTiming);
    dot.style.backgroundColor = "Azure";
}

let count = 0;

document.addEventListener("keydown", (event) => {
    if (event.key == dot.innerHTML.toLowerCase()) {
        dot.style.backgroundColor = "Aquamarine";
        count++;
        score.innerHTML = "Score    " + count;
    }
    else {
        dot.style.backgroundColor = "Coral";
        count--;
        score.innerHTML = "Score    " + count;

    }
})