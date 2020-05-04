import React from "react";

import "./customButton.styles.scss"

const CustomButton = (props) => {
    return <button className={`button button--${props.color}`} type={props.type} onClick={props.clicked}>{props.children}</button>
}

export default CustomButton;