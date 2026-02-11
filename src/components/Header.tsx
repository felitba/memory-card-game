import "../styles/styles.css"
import muteSpeaker from "../assets/muteSpeaker.png";
import speaker from "../assets/speaker.png";

type HeaderProps={
    handleClick: ()=> void;
    isMute: boolean;
    score: number;
    bestScore: number;
    startGame: boolean;
}

function Header({handleClick,isMute,score, bestScore, startGame}:HeaderProps){
    return (
        <div className="Header">
            <div>
                {startGame && (<>
                        <h2>Score: {score}</h2>
                        <h2>Best Score: {bestScore}</h2>
                        </>)}

            </div>
            <div className='controls'>
                <button onClick={handleClick}><img src={isMute ? muteSpeaker : speaker} alt='speaker' className='speaker' draggable={false}/></button>
            </div>
        </div>
    );
}

export default Header