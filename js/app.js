const playBtn = document.getElementById("playBtnToggle")
const audioEl = document.getElementById("audio")
const coverEl = document.getElementById("cover")
const player = document.getElementById("player")
const backwardEL = document.getElementById("backward")
const forwardEL = document.getElementById("forward")
const changeVolume = document.getElementById("changeVolume")
const tracks = [ 'allMyFriendAreToxic','bilmaydi-konsta','chumoli-konsta','daylight','falling','hope','insonlar-konsta','jujutsuKaisenOP1','mood','novacain','revenge','sunflower','suzume','sweaterWeather','untilIFoundYou']
let currentTrack = 0
const changeTrack = (index) => {
    audioEl.src = `./musics/${tracks[index]}.mp3`
    coverEl.src = `./images/${tracks[index]}.jpg`
};
changeTrack(currentTrack)
playBtn.addEventListener("click", () => {
    if(player.classList.contains("play")){
        audioEl.pause()
        player.classList.remove("play")
        playBtn.classList = "fa-solid fa-play"
    } else {
        player.classList.add("play")
        audioEl.play()
        playBtn.classList = "fa-solid fa-pause"
    }
})
changeVolume.addEventListener("input" , (e) => {
    audioEl.volume = e.target.value
})
const plas = () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    changeTrack(currentTrack);
    audioEl.play();
    playBtn.classList = "fa-solid fa-pause"
}
const minus = () => {
    currentTrack = (currentTrack - 1 + tracks.length ) % tracks.length;
    changeTrack(currentTrack);
    audioEl.play();
    playBtn.classList = "fa-solid fa-pause"
}

backwardEL.addEventListener('click', () => {
    plas();
});

forwardEL.addEventListener('click', () => {
    minus();
});
