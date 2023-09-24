const x = document.getElementById("myAudio")
const playPauseButton = document.getElementById("btn-play-pause")

let isPlaying = false
playPauseButton.classList.add("play")

let togglePlayButton = () => {
  let newClass, oldClass
  if (isPlaying) {
    newClass = "play"
    oldClass = "pause"
  } else {
    newClass = "pause"
    oldClass = "play"
  }

  if (playPauseButton.classList.contains(oldClass)) playPauseButton.classList.remove(oldClass)
  playPauseButton.classList.add(newClass)
  isPlaying = !isPlaying
}

const playOrPause = () => {
  if (isPlaying) {pauseAudio()}
  else {playAudio()}
  togglePlayButton()
}

const playAudio = () => {
  x.play();
}

const pauseAudio = () => {
  x.pause();
}
