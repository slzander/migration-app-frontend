import React from 'react'

export default function About () {
    return(
        <div id='about-div'>
            <div className='about-cards'>
                <div className='about-titles'>
                    <h2>Swainson's Hawks</h2>
                </div>
                <h3>Buteo swainsoni</h3>
                <p>Principal Investigator: Michael N. Kochert</p>
                <p>Study dates: 7/29/1995-6/24/1998</p>
                <p>Average Annual Migration distance: 25,456km</p>
            </div>
            <div className='about-cards'>
                <h2>Golden Eagles</h2>
                <h3>Aquila chrysaetos</h3>
                <p>Principal Investigator: Jeff P. Smith</p>
                <p>Study dates: 10/2/1999-10/17/2009</p>
                <p>Average Annual Migration distance: 25,456km</p>
            </div>
            <div className='about-cards'>
                <h2>Grasshopper Sparrow</h2>
                <h3>Ammodramus savannarum</h3>
                <p>Principal Investigator: Rosalind Renfrow</p>
                <p>Study dates: 5/13/2015-5/11/2016</p>
                <p>Average Annual Migration distance: 25,456km</p>
            </div>
            <div className='about-cards'>
                <h2>Upland Sandpiper</h2>
                <h3>Bartramia longicauda</h3>
                <p>Principal Investigator: Rosalind Renfrow</p>
                <p>Study dates: 4/24/2016-7/17/2019</p>
                <p>Average Annual Migration distance: 25,456km</p>
            </div>

        </div>
    )
}