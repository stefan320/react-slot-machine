import React from "react";
import CustomButton from "../customButton/CustomButton.component"
const Form = () => {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
            <CustomButton type={"submit"}>Submit</CustomButton>
        </form>
    )
}

export default Form;