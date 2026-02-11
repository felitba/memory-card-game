const gifModules = import.meta.glob<{default:string}>(
  "../assets/dancing_gifs_fric_frog/*.gif",
  { eager: true }
);

const gifs = Object.values(gifModules).map(module => module.default);



export function getRandomGif() {
  return gifs[Math.floor(Math.random() * gifs.length)];
}
