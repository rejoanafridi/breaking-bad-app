import React from 'react'
import logo from '../images/cover.png'
import './style.css'
function Header() {
    return (
        <header className="container">
            <img className="logo" src={ logo } alt="logo"></img>
        </header>
    )
}

export default Header
