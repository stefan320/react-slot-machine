import React from "react";
import { Link } from "react-router-dom"

import "./nav.styles.scss"

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <Link to="/countries" style={{ textDecoration: 'none' }} >
                    <li className="nav__list--item">Countries</li>
                </Link>
                <Link to="/game" style={{ textDecoration: 'none' }} >
                    <li className="nav__list--item">Game</li>
                </Link>
                <Link to="/form" style={{ textDecoration: 'none' }} >
                    <li className="nav__list--item">Form</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;