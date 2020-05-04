import React from "react";
import CustomButton from "../customButton/CustomButton.component";

import "./form.styles.scss";

const Form = () => {
    return (
        <form className="form">
            <label className="label" htmlFor="name">Name</label>
            <input className="input" type="text" id="name" required />
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" required />
            <label className="label" htmlFor="password">Password</label>
            <input className="input" type="password" id="password" required />
            <CustomButton type={"submit"} color={"form"}>Submit</CustomButton>
        </form >
    )
}

export default Form;