import { ScaleTiming, Scaling } from './Animate.js';

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

function getRandomXY() {
    get_score = false;
    dot.innerHTML = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    dot.style.top = (15 + Math.random() * 70) + "vh";
    dot.style.left = (15 + Math.random() * 70) + "vw";
    dot.animate(Scaling, ScaleTiming);
    dot.style.backgroundColor = "Azure";
}

let count = 0;
let get_score = false;

document.addEventListener("keydown", (event) => {
    if (event.key == dot.innerHTML.toLowerCase()) {
        dot.style.backgroundColor = "Aquamarine";
        if(!get_score){
            count++;
            score.innerHTML = "Score    " + count;
            get_score = true;
        }
    }
    else {
        dot.style.backgroundColor = "Coral";
        if(!get_score){
            count--;
            score.innerHTML = "Score    " + count;
            get_score = true;
        }
    }
})