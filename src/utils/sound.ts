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

export function playBGM(){
  bgm.play();
}

