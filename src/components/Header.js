import React from 'react'
import flyingBirds from '../images/flyingBirds.png'

export default function Header ({ 
    changeAboutClicked, 
    mappedBirds, 
    currentMonth, 
    changePause, 
    pauseClicked }) {
    
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December']
    
    function showMonth () {
        if (mappedBirds.length !== 0){
            return (
                <div id='show-month-div'>
                    <h2>{months[currentMonth]}</h2>
                    <button onClick={changePause}>
                        {pauseClicked ? 'Stop Migration': 'Start Migration'}
                    </button>
                </div>
            )
        }
    }
 
    return(
        <header className="App-header">
        <div id="logo">
            <div id="logo">
                <img src={flyingBirds} alt='birds' />
                {/* <h1>M i g r a t i o n M a p p e r</h1> */}
                <h1>Migration Mapper</h1>
            </div>
        </div>
        <div id='header-buttons'>
            <button onClick={changeAboutClicked}>Show/Hide About Section</button>
            {showMonth()}
        </div>
      </header>
    )
}