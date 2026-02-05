import { useState } from 'react';
import WelcomeSign from "./components/WelcomeSign"
import CardList from './components/CardList';
import "./styles/styles.css"

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
