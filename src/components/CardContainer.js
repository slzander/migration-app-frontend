import React from 'react'
import Select from 'react-select'
import BirdCard from './BirdCard'

export default function CardContainer({birdData, birdAction, filterChange, selectedOption }) {
    const birdsArray = birdData.map(bird => {
        return <BirdCard
            key={bird.id}
            bird={bird}
            birdAction={birdAction} />
    })

    const birdSpecies = [
        { label: 'Grasshopper Sparrow'},
        { label: 'Upland Sandpiper'}
    ]
    
    return(
        <div id='card-container'>
            <h1>Birds</h1>
            <Select
                options={birdSpecies}
                value={selectedOption}
                onChange={filterChange} />
            <div id='cards-div'>
                {birdsArray}
            </div>
        </div>
    )
}