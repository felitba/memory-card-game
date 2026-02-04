import { useState } from 'react';
import WelcomeSign from "./WelcomeSign"
import CardList from './CardList';
import './styles.css'

function App() {

  const [startGame, setStartGame] = useState(false);

  return (
    <>
    {startGame? (
      <CardList/>
    ):(
      <div className="WelcomeSignWrapper">
        <WelcomeSign handleClick={()=> {setStartGame(true)}}/>
      </div>
    )}
    </>
  )
}

export default App
