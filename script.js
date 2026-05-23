const audio =
document.getElementById("audio");

const playBtn =
document.getElementById("play");

const progress =
document.getElementById("progress");

const progressContainer =
document.getElementById("progress-container");

const currentTimeEl =
document.getElementById("current-time");

const durationEl =
document.getElementById("duration");

/* Play y pausa */

playBtn.addEventListener("click",()=>{

    if(audio.paused){

        audio.play();

        playBtn.innerHTML = "❚❚";

    }else{

        audio.pause();

        playBtn.innerHTML = "▶";
    }

});

/* Actualizar barra */

audio.addEventListener("timeupdate",()=>{

    const current =
    audio.currentTime;

    const duration =
    audio.duration;

    const progressPercent =
    (current / duration) * 100;

    progress.style.width =
    progressPercent + "%";

    /* Tiempo actual */

    let currentMinutes =
    Math.floor(current / 60);

    let currentSeconds =
    Math.floor(current % 60);

    if(currentSeconds < 10){

        currentSeconds =
        "0" + currentSeconds;
    }

    currentTimeEl.textContent =
    currentMinutes +
    ":" +
    currentSeconds;

    /* Duración */

    let durationMinutes =
    Math.floor(duration / 60);

    let durationSeconds =
    Math.floor(duration % 60);

    if(durationSeconds < 10){

        durationSeconds =
        "0" + durationSeconds;
    }

    durationEl.textContent =
    durationMinutes +
    ":" +
    durationSeconds;

});

/* Retroceder barra */

progressContainer.addEventListener("click",(e)=>{

    const width =
    progressContainer.clientWidth;

    const clickX =
    e.offsetX;

    const duration =
    audio.duration;

    audio.currentTime =
    (clickX / width) * duration;

});