import { useState, useEffect } from 'react';
import WelcomeSign from "./components/WelcomeSign"
import CardList from './components/CardList';
import "./styles/styles.css";
import {toggleBGM} from "./utils/sound";
import { getRandomGif } from './utils/randomDancingGif';
import Header from './components/Header';
import LossWinSign from './components/LossWinSign';

export type GameState = "playing" | "lost" | "win";

function App() {


  const [startGame, setStartGame] = useState(false);
  const [isMute,setIsMute] = useState(true);
  const [gif, setGif] = useState(getRandomGif());

  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);

  const [gameState, setGameState] = useState<GameState>("playing");

    useEffect(() => {
    const interval = setInterval(() => {
      setGif(getRandomGif());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleClickMusic = ()=>{
    toggleBGM();
    setIsMute(prev=>!prev);
  }

  return (
    <>
      <Header startGame={startGame} score={score} bestScore={bestScore} handleClick={handleClickMusic} isMute={isMute}/>
      {startGame? ( 
        <>
        {gameState!="playing" && <LossWinSign/>}
        <CardList score={score} setBestScore={setBestScore} setScore={setScore} bestScore={bestScore} setGameState={setGameState}/>
        </>
      ):(
        <div>
          <div className="WelcomeSignWrapper SignWrapper">
            <WelcomeSign handleClick={()=> {setStartGame(true)}}/>
          </div>
          <div className='corner-gifs'>
            <img className='corner-gif' src={gif} typeof='gif'/>
            <img className='corner-gif' src={gif} typeof='gif'/>
            <img className='corner-gif' src={gif} typeof='gif'/>
            <img className='corner-gif' src={gif} typeof='gif'/>
            <img className='corner-gif' src={gif} typeof='gif'/>

          </div>
        </div>
      )}
    </>
  )
}

export default App
