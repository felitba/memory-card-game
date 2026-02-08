import { Howl } from "howler";

const frogClick = new Howl({
  src: ["/frogSound.mp3"],
  volume: 0.5,
});

const bgm = new Howl({
  src: ["/bgm.mp3"],
  volume: 0.5,
  loop:true
})

export function playSound(){
  frogClick.play();
}

//note: Never ever use mute again... pls read the documentation carefully. 
// mute keeps running on the background, just silent.
//  while pause saves the progress.
export function toggleBGM(){
  if (bgm.playing()) {
  bgm.pause();
  } else {
  bgm.play();
  }
}

