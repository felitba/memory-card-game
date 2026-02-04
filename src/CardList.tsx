import Header from "./Header";
import { useState,useEffect } from "react";
import Card from "./Card";

type Gif = {
  id: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
};

function CardList(){

    const API_KEY = "2u23y0WAD7WHXY7dvSCdehA6sy8cSRA3"
    const [gifs, setGifs] = useState<Gif[]>([]);

   useEffect(() => {
        const loadGifs = async () => {
            const data = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=frog-fric&limit=10`)
            .then(res=> res.json())
            .then(data=> data.data);

        setGifs(data); 
  };

        loadGifs();
}, []);

    const cardItems = gifs.map(gif=>{
        // return <Card key={gif.id} receivedGif={gif}/>
        return <Card receivedGif={gif}/>
    })

    return (
        <>
        <Header/>
        <div>
            {cardItems}
        </div>
        </>
    );
}

export default CardList