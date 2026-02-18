import Card from "./Card";
import "../styles/styles.css"

import { useState,useEffect, useRef} from "react";
import { shuffle } from "../utils/shuffle";
import {playSound} from "../utils/sound";
import { GameState } from "../App";


type Gif = {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
};

type GiphyResponse = {
  data: Gif[];
};

type CardListProp ={
    score: number;
    bestScore:number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
    setBestScore: React.Dispatch<React.SetStateAction<number>>;
    setGameState: React.Dispatch<React.SetStateAction<GameState>>;
    level: number;
}


function CardList({ score, setScore, bestScore, setBestScore, setGameState,level }:CardListProp){

    //TODO: hide this
    const API_KEY = "2u23y0WAD7WHXY7dvSCdehA6sy8cSRA3";
    const [gifs, setGifs] = useState<Gif[]>([]);
    const gifSet = useRef(new Set<string>());


   useEffect(() => {
        const loadGifs = async () => {
            const url = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=frog-fric&limit=${level * 4}`;

            const data:GiphyResponse = await fetch(url)
            .then(res=> res.json());
            setGifs(data.data);

  };
        loadGifs();
}, [level]);


    useEffect(()=>{
        if(score> bestScore){
            setBestScore(score);
        }
    },[score]);


    const handleClick= (gifId:string)=> {
        playSound(); //TODO: play this sound only when user turned on the speaker
        setGifs(shuffle(gifs));
    
        //If implementation were like this: 
        // there would be a race condition.
        // Depending on who ran first, score can be set to 0 or 4*level. 
        //Solution: use an useEffect in App(when gamestate is win... do...) or setScore in HandleClick func.
        if (!gifSet.current.has(gifId)){
            setScore(s=> s+1);
            gifSet.current.add(gifId);
            if(gifSet.current.size==gifs.length){
                gifSet.current.clear();
                setGameState("win");
                // setScore(0);
            }
        } 
        else {
            // setScore(0);
            gifSet.current.clear();
            setGameState("lost");
        }
    };


    const cardItems = gifs.map(gif=>{
        return <Card key = {gif.id} receivedGif={gif} handleClick = {()=>handleClick(gif.id)}/>
    })

    return (
        <>
        <div className="card-list">
            {cardItems}
        </div>
        </>
    );
}

export default CardList