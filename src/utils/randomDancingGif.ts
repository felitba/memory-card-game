const gifs = [
  "/dacing_gifs_fric_frog/B Boy Dance Sticker.gif",
  "/dacing_gifs_fric_frog/Dance Illustration Sticker.gif",
  "/dacing_gifs_fric_frog/Drawing Doodle Sticker.gif",
  "/dacing_gifs_fric_frog/Mood Frog Sticker.gif",
];

export function getRandomGif() {
  return gifs[Math.floor(Math.random() * gifs.length)];
}
