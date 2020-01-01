import React from 'react'
import Select from 'react-select'
import BirdCard from './BirdCard'

export default function CardContainer({ birdData, birdAction, filterChange, selectedOption, addAllBirds }) {
    const birdsArray = birdData.map(bird => {
        return <BirdCard
            key={bird.id}
            bird={bird}
            birdAction={birdAction} />
    })

    const birdSpecies = [
        { label: 'Grasshopper Sparrow' },
        { label: 'Upland Sandpiper' },
        { label: "Swainson's Hawk" }
    ]

    return(
        <div id='card-container'>
            <div id='card-header'>
                <h1>Birds</h1>
                <button onClick={addAllBirds}>
                    Add All Birds To Map
                </button>
            </div>
            <Select
                options={birdSpecies}
                value={selectedOption}
                onChange={filterChange}
                placeholder='Filter by Species...' />
            <div id='cards-div'>
                {birdsArray}
            </div>
        </div>
    )
}