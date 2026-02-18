// export default async function handler(req, res) {
//   const { q = "frog", limit = 8 } = req.query;

//   try {
//     const response = await fetch(
//       `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_KEY}&q=${q}&limit=${limit}`
//     );

//     const data = await response.json();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch from Giphy" });
//   }
// }
