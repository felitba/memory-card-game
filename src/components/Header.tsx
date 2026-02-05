import "../styles/styles.css"

type HeaderProps={
    score: number;
    bestScore: number;
}

function Header({score,bestScore}:HeaderProps){
    return (
        <div className="Header">
            <div>
                <h1> Score: {score}</h1>
                <h1>Best Score: {bestScore} </h1>
            </div>
            <div className="Header-title">
            <h1>Memory Game</h1>
            </div>
        </div>
    );
}

export default Header