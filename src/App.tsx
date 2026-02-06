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
        <button onClick={playBGM}><img src="/speaker.png" alt='speaker' className='speaker'/></button>
        <div className="WelcomeSignWrapper">
          <WelcomeSign handleClick={()=> {setStartGame(true)}}/>
        </div>
        <div className=''>
          <img src={gif} typeof='gif'/>
          <img src={gif} typeof='gif'/>
          <img src={gif} typeof='gif'/>
          <img src={gif} typeof='gif'/>
        </div>
      </div>
    )}
    </>
  )
}

export default App
