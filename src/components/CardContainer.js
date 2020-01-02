import React from 'react'
import Select from 'react-select'
import BirdCard from './BirdCard'

export default function CardContainer({ 
    birdData, 
    birdAction, 
    filterChange, 
    selectedOption, 
    changeCardColor,
    addAllBirds, 
    removeAllBirds, 
    addFilteredBirds,
    removeFilteredBirds
    }) {

    const birdsArray = birdData.map(bird => {
        return <BirdCard
            key={bird.id}
            bird={bird}
            birdAction={birdAction}
            changeCardColor={changeCardColor} />
    })

    const birdSpecies = [
        { label: 'Select All' },
        { label: 'Grasshopper Sparrow' },
        { label: 'Upland Sandpiper' },
        { label: "Swainson's Hawk" },
        { label: 'Golden Eagle' }
    ]

    return(
        <div id='card-container'>
            <div id='card-header'>
                <button onClick={addAllBirds}>
                    Add All Birds To Map
                </button>
                <button onClick={removeAllBirds}>
                    Remove All Birds From Map
                </button>
                <button onClick={addFilteredBirds}>
                    Add Filtered Birds To Map
                </button>
                <button onClick={removeFilteredBirds}>
                    Remove Filtered Birds From Map
                </button>
            </div>
            <div id='select-div'>
                <Select
                    options={birdSpecies}
                    value={selectedOption}
                    onChange={filterChange}
                    placeholder='Filter by Species...' />
            </div>
            <div id='cards-div'>
                {birdsArray}
            </div>
        </div>
    )
}