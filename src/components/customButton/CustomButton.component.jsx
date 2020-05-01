import React from "react";

const CustomButton = (props) => {
    return <button type="props.type" onClick={props.clicked}>{props.children}</button>
}

export default CustomButton;