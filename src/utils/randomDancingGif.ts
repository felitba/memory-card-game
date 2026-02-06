const gifs = [
  "/dacing_gifs_fric_frog/B Boy Dance Sticker.gif",
  "/dacing_gifs_fric_frog/Dance Illustration Sticker.gif",
  "/dacing_gifs_fric_frog/Drawing Agree Sticker.gif",
  "/dacing_gifs_fric_frog/Drawing Cheer Sticker.gif",
  "/dacing_gifs_fric_frog/Drawing Doodle Sticker.gif",
  "/dacing_gifs_fric_frog/Drawing Fighting Sticker.gif",
  "/dacing_gifs_fric_frog/Drawing Office GIF.gif",
  "/dacing_gifs_fric_frog/Happy Dance Sticker (1).gif",
  "/dacing_gifs_fric_frog/Happy Dance Sticker.gif",
  "/dacing_gifs_fric_frog/Heart Love Sticker (1).gif",
  "/dacing_gifs_fric_frog/Heart Love Sticker.gif",
  "/dacing_gifs_fric_frog/Illustration Drawing Sticker (1).gif",
  "/dacing_gifs_fric_frog/Illustration Drawing Sticker (2).gif",
  "/dacing_gifs_fric_frog/Illustration Drawing Sticker.gif",
  "/dacing_gifs_fric_frog/Merry Christmas Dance GIF.gif",
  "/dacing_gifs_fric_frog/Mood Frog Sticker.gif",
  "/dacing_gifs_fric_frog/Party Dj Sticker.gif",
  "/dacing_gifs_fric_frog/Summer Wave GIF.gif",
];


export function getRandomGif() {
  return gifs[Math.floor(Math.random() * gifs.length)];
}
