import React from 'react'

export default function Header ({ changeAboutClicked }) {
    return(
        <header className="App-header">
        <div id="logo">
            <div id="title">
                <h1>Migrate</h1>
            </div>
        </div>
        <ul>
            <li><button onClick={changeAboutClicked}>Home</button></li>
            <li>|</li>
            <li><button onClick={changeAboutClicked}>About</button></li>
        </ul>
      </header>
    )
}