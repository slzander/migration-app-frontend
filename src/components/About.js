import React from 'react'
import buttonBlue from '../images/buttonBlue.png'
import buttonRed from '../images/buttonRed.png'
import buttonGray from '../images/buttonGray.png'
import buttonYellow from '../images/buttonYellow.png'
import hawk from '../images/hawk.png'
import sandpiper from '../images/sandpiper.png'
import eagle from '../images/eagle.png'
import sparrow from '../images/sparrow.png'

export default function About () {
    return(
        <div id='about-div'>
            <div className='about-cards'>
                <div className='about-titles'>
                    <img src={buttonYellow} alt='yellow button'/>
                    <h2>Swainson's Hawks</h2>
                </div>
                <h3>Buteo swainsoni</h3>
                <p>Study dates: 7/29/1995-6/24/1998</p>
                <p>Average Annual Migration: 15,817 mi</p>
                <img src={hawk} alt='hawk'/>
            </div>
            <div className='about-cards'>
                <div className='about-titles'>
                    <img src={buttonBlue} alt='eagle'/>
                    <h2>Upland Sandpiper</h2>
                </div>
                <h3>Bartramia longicauda</h3>
                <p>Study dates: 4/24/2016-7/17/2019</p>
                <p>Average Annual Migration: 11,392 mi</p>
                <img src={sandpiper} alt='sandpiper'/>
            </div>
            <div className='about-cards'>
                <div className='about-titles'>
                    <img src={buttonRed} alt='red button'/>
                    <h2>Grasshopper Sparrow</h2>
                </div>
                <h3>Ammodramus savannarum</h3>
                <p>Study dates: 5/13/2015-5/11/2016</p>
                <p>Average Annual Migration: 3,206 mi</p>
                <img src={sparrow} alt='sparrow'/>
            </div>
            <div className='about-cards'>
                <div className='about-titles'>
                    <img src={buttonGray} alt='gray button'/>
                    <h2>Golden Eagles</h2>
                </div>
                <h3>Aquila chrysaetos</h3>
                <p>Study dates: 10/2/1999-10/17/2009</p>
                <p>Average Annual Migration: 5,984 mi</p>
                <img src={eagle} alt='eagle'/>
            </div>
        </div>
    )
}