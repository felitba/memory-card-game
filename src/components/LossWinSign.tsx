import "../styles/styles.css"
import { GameState } from "../App";
import FireBurn from "../assets/Fire Burn GIF.gif"
import Celebrate from "../assets/Drawing Celebrate GIF.gif"

type LossWinSignProps={
    gameState: GameState;
    level: number;
    onClick: ()=>void;
}

function LossWinSign({gameState,level,onClick}:LossWinSignProps){
    return (
    <div className="SignWrapper overlay">
        <div className="Sign">
            {gameState=="lost" && (
                <>
                <h1>You Lost!! </h1>
                <img src={FireBurn} />
                <h2>Clicking the same frog twice implies losing.</h2>
                <h2>Just saying...</h2>
                <button onClick={onClick}>Retry</button>
                </>
            )}
            {gameState=="win" && (
                <>
                <h1>You Won Level {level}!! </h1>
                <img src={Celebrate} />
                <h2>Somehow you did it...Next One?</h2>
                <button onClick={onClick}>Go!</button>
                </>
            )}
        </div>
    </div>
    );
}

export default LossWinSign;