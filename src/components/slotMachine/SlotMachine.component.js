import React from "react";

const SlotMachine = (props) => {
    return <div>
        {console.log(props.reels)}
        {props.reels.map(((fruit, index) =>
            <div key={index}>{fruit}</div>
        ))}
    </div>
}

export default SlotMachine;