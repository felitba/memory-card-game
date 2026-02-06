import { Howl } from "howler";

const click = new Howl({
  src: ["/frogSound.mp3"],
  volume: 0.5,
});

export function playSound(){
  click.play();
}
