import Header from "./Header";
import { useState,useEffect } from "react";
import Card from "./Card";
import { shuffle } from "../utils/shuffle";
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
            await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=frog-fric&limit=10`)
            .then(res=> res.json())
            .then(data=> setGifs(data.data));
  };
        loadGifs();
}, []);

    const handleClick= ()=> {setGifs(shuffle(gifs))};

    const cardItems = gifs.map(gif=>{
        return <Card key = {gif.id} receivedGif={gif} handleClick = {handleClick}/>
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