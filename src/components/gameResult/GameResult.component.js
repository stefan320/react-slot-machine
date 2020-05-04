import React from "react";

// STYLES INHERETED FROM ../game/game.styles.scss

const GameResult = (props) => {
    return <div className="game__results">
        {props.reels.map(((fruit, index) =>
            <div key={index} className={`game__results__reel game__results__reel--${fruit}`}></div>
        ))}
    </div >

}

export default GameResult;