import React from 'react'

export default function Header ({ changeAboutClicked }) {
    return(
        <header className="App-header">
        <div id="logo">
            <div id="title">
                <h1>Migrate</h1>
            </div>
        </div>
        <button onClick={changeAboutClicked}>Show/Hide About Section</button>
        {/* <ul>
            <li></li>
            <li>|</li>
            <li><button onClick={changeAboutClicked}>About</button></li>
        </ul> */}
      </header>
    )
}