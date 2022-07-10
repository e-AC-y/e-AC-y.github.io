import { ScaleTiming, Scaling, DisappearTiming, Disappearing } from './Animate.js';
import { bgm1_data, bgm2_data, bgm3_data } from './BGM.js';


const bgm = document.getElementById("bgm");
const dot = document.getElementById("dotGray");
const score = document.getElementById("score");
const button = document.getElementById("start");


function getRandomXY() {
    get_score = true;
    dot.innerHTML = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    dot.style.display = "block";
    dot.style.top = (15 + Math.random() * 70) + "vh";
    dot.style.left = (15 + Math.random() * 70) + "vw";
    dot.animate(Scaling, ScaleTiming);
    dot.style.backgroundColor = "Azure";
}


document.addEventListener("keydown", (event) => {
    if (event.key == dot.innerHTML.toLowerCase()) {
        if(get_score){
            dot.style.backgroundColor = "Aquamarine";
            count++;
            score.innerHTML = "Score    " + count;
            get_score = false;
            dot.animate(Disappearing, DisappearTiming);
            dot.addEventListener("animationend", function() {
		        dot.style.display = "none";
            });
        }
    }
    else {
        if(get_score){
            dot.style.backgroundColor = "Coral";
            count--;
            score.innerHTML = "Score    " + count;
            get_score = false;
            dot.animate(Disappearing, DisappearTiming);
            dot.addEventListener("animationend", function() {
		        dot.style.display = "none";
            });
        }
    }
})

let startTime = 11 / 30;
let bpm = 146 / 4;
let playbackSpeed = 1;

let count = 0;
let get_score = true;

const Initialize = (music) => {
    bgm.pause();
    if(music == 1){
        bgm.src = "./media/" + bgm1_data.title;
        startTime = bgm1_data.startTime;
        bpm = bgm1_data.bpm;
    }
    else if(music == 2){
        bgm.src = "./media/" +bgm2_data.title;
        startTime = bgm2_data.startTime;
        bpm = bgm2_data.bpm;
    }
    else{
        bgm.src = "./media/" +bgm3_data.title;
        startTime = bgm3_data.startTime;
        bpm = bgm3_data.bpm;
    }
    bgm.currentTime = startTime;
    bgm.playbackRate = playbackSpeed;
    bgm.play();
}
 
let intervalID = 0;

function Gameplay(){
    if( intervalID !=0 )
        clearInterval(intervalID);
    
    playbackSpeed = document.getElementById("playbackSpeed").value;
    note = document.getElementById("note").value;
    music = document.getElementById("music").value;
    Initialize(music);

    let interval = 60000 / bpm / playbackSpeed / note;
    ScaleTiming.duration = interval * 1.5;
    intervalID = setInterval(getRandomXY, interval);
}


button.addEventListener("click", Gameplay);