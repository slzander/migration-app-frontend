import React from 'react'
import flyingBirds from '../images/flyingBirds.png'

export default function Header ({ changeAboutClicked }) {
    return(
        <header className="App-header">
        <div id="logo">
            <div id="logo">
                <img src={flyingBirds} alt='birds' />
                <h1>Migrate</h1>
            </div>
        </div>
        <button onClick={changeAboutClicked}>Show/Hide About Section</button>
      </header>
    )
}