export default async function handler(req:any, res:any) {
  const { q, limit = 4 } = req.query;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${q}&limit=${limit}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
