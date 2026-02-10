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
}


function CardList({ score, setScore, bestScore, setBestScore, setGameState }:CardListProp){

    const API_KEY = "2u23y0WAD7WHXY7dvSCdehA6sy8cSRA3";
    const [gifs, setGifs] = useState<Gif[]>([]);
    const gifSet = useRef(new Set<string>());


   useEffect(() => {
        const loadGifs = async () => {
            const data:GiphyResponse = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=frog-fric&limit=12`)
            .then(res=> res.json());
            setGifs(data.data);
  };
        loadGifs();
}, []);


    useEffect(()=>{
        if(score> bestScore){
            setBestScore(score);
        }
    },[score]);


    const handleClick= (gifId:string)=> {
        playSound(); //TODO: play this sound only when user turned on the speaker
        setGifs(shuffle(gifs));
        if(gifSet.current.size==gifs.length){
            setGameState("win");
        }
        else if (!gifSet.current.has(gifId)){
            setScore(s=> s+1);
            gifSet.current.add(gifId);
        } 
        else {
            setScore(0);
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