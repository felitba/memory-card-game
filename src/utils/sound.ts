import { Howl } from "howler";
import frogSound from "../assets/frogSound.mp3"
import bgmSound from "../assets/bgm.mp3"

const frogClick = new Howl({
  src: [frogSound],
  volume: 0.5,
});

const bgm = new Howl({
  src: [bgmSound],
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

