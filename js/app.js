const playBtn = document.getElementById("playBtnToggle")
const audioEl = document.getElementById("audio")
const coverEl = document.getElementById("cover")
const player = document.getElementById("player")
const changeVolume = document.getElementById("changeVolume")
const tracks = [ 'allMyFriendAreToxic','bilmaydi-konsta','chumoli-konsta','daylight','falling','hope','insonlar-konsta','jujutsuKaisenOP1','mood','novacain','revenge','smackThat','sunflower','suzume','sweaterWeather','until_i_found_you']
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

