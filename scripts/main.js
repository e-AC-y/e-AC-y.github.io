startTime = 11 / 30; bpm = 146 / 2; playbackSpeed = 1;
interval = 60000 / bpm / playbackSpeed;
bgm = document.getElementById("bgm");
dot = document.getElementById("dotGray");
bgm.currentTime = startTime; bgm.playbackRate = playbackSpeed;
bgm.play();
intervalID = setInterval(getRandomXY, interval);

function getRandomXY() {
    dot.innerHTML = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    dot.style.top = (Math.random() * 85) + "vh";
    dot.style.left = (Math.random() * 85) + "vw";
    dot.style.backgroundColor = "Azure";
}

document.addEventListener("keydown", (event) => {
    if (event.key == dot.innerHTML.toLowerCase()) {
        dot.style.backgroundColor = "Aquamarine";
    }
    else {
        dot.style.backgroundColor = "Coral";
    }
})