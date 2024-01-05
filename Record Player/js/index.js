let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let slider = document.querySelector(".slider");
let songSelect = document.getElementById("songSelect");
let song;

function createOrUpdateSong(src) {
    if(!song) {
        song = new Audio();
        song.volume = slider.value;
    }
    song.src = src;
}

btn.addEventListener("click", () => {
    if(!state) {
        record.classList.add("on");
        toneArm.classList.add("play");
        setTimeout(() => {
            createOrUpdateSong(songSelect.value);
            song.play();
        },1000);
    } else {
        record.classList.remove("on");
        toneArm.classList.remove("play");
        if (song) song.pause();
    }
    state = !state;
});

slider.addEventListener("input", (e) => {
    if(song) song.volume = Number(e.target.value);
});

songSelect.addEventListener("change", () => {
    if(state) {
        createOrUpdateSong(songSelect.value);
        song.play();
    }
});