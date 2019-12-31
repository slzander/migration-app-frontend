import React from 'react'
import BirdCard from './BirdCard'

export default function CardContainer({birdData, birdAction }) {
    const birdsArray = birdData.map(bird => {
        return <BirdCard
            key={bird.id}
            bird={bird}
            birdAction={birdAction} />
    })
    
    return(
        <div id='card-container'>
            <h1>Birds</h1>
            <div id='cards-div'>
                {birdsArray}
            </div>
        </div>
    )
}