// const x = document.getElementById("myAudio")
const playPauseButton = document.getElementById("btn-play-pause")

let isPlaying = false
playPauseButton.classList.add("play")
playPauseButton.innerText = ">"

let togglePlayButton = () => {
  let newClass, oldClass
  if (isPlaying) {
    playPauseButton.innerText = ">"
    newClass = "play"
    oldClass = "pause"
  } else {
    playPauseButton.innerText = "||"
    newClass = "pause"
    oldClass = "play"
  }

  if (playPauseButton.classList.contains(oldClass)) playPauseButton.classList.remove(oldClass)
  playPauseButton.classList.add(newClass)
  isPlaying = !isPlaying
}

const playOrPause = () => {
  if (isPlaying) {pauseAudio(index)}
  else {playAudio(index)}
  togglePlayButton()
}

const playAudio = (index) => {
  console.log(audios[index])
  try{audios[index].play()}
  catch(e){console.error(e)}
}

const pauseAudio = (index) => {
  try{audios[index].pause()}
  catch(e){console.error(e)}
}

const prev = () => {
  try{audios[index].pause()}
  catch(e){console.error(e)}
  index -= 1
  if (index<0) index += audios.length
  console.log("index=",index)
  try{audios[index].play()}
  catch(e){console.error(e)}
}

const next = () => {
  try{audios[index].pause()}
  catch(e){console.error(e)}
  index += 1
  if (index>=audio.length) index -= audios.length
  console.log("index=",index)
  try{audios[index].play()}
  catch(e){console.error(e)}
}



let index = 0
const audios = []
audios.push(new Audio('https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav'))
audios.push(new Audio('https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav'))

// async function asyncPlayAudio() {
//   audio.type = 'audio/wav';
//   const audio = new Audio('https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav');  

//   try {
//     await audio.play();
//     console.log('Playing...');
//   } catch (err) {
//     console.error('Failed to play...' + err);
//   }
// }
