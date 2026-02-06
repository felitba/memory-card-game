import { useState, useEffect } from 'react';
import WelcomeSign from "./components/WelcomeSign"
import CardList from './components/CardList';
import "./styles/styles.css";
import {playBGM} from "./utils/sound";
import { getRandomGif } from './utils/randomDancingGif';

function App() {

  const [startGame, setStartGame] = useState(false);
  const [gif, setGif] = useState(getRandomGif());

    useEffect(() => {
    const interval = setInterval(() => {
      setGif(getRandomGif());
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {startGame? (
      <CardList/>
    ):(
      <div>
        <div className='controls'>
        <button onClick={playBGM}><img src="/speaker.png" alt='speaker' className='speaker'/></button>
        </div>
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
