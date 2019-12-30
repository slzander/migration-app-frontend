import React from 'react'

export default function CardContainer({birdData}) {
    const birdsArray = birdData.map(bird => {
        return <BirdCard />
    })
    
    return(
        <div id='cardContainer'>
            <h1>Birds</h1>
            <div>
                {birdsArray}
            </div>
        </div>
    )
}