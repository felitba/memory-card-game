import { useState, useEffect } from 'react';
import WelcomeSign from "./components/WelcomeSign"
import CardList from './components/CardList';
import "./styles/styles.css";
import {toggleBGM} from "./utils/sound";
import { getRandomGif } from './utils/randomDancingGif';
import Header from './components/Header';

function App() {

  const [startGame, setStartGame] = useState(false);
  const [isMute,setIsMute] = useState(true);
  const [gif, setGif] = useState(getRandomGif());

  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);


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
      <CardList score={score} setBestScore={setBestScore} setScore={setScore} bestScore={bestScore}/>
    ):(
      <div>
        <div className="WelcomeSignWrapper">
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
