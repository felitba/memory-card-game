import './styles.css'

function WelcomeSign(){

    const handleClick = ()=> { }

    return (
        <div className='WelcomeSign'>
            <h1>Memory Game</h1>
            <label>The rule is simple.</label><br></br>
            <label>Win by clicking all the images <b>ONLY ONCE.</b></label><br></br>
            <label>Are you ready?</label><br></br>
            <button onClick={handleClick}>Yes</button>
        </div>
    );
}

export default WelcomeSign;