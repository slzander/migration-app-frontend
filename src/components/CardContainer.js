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
                <div className='card-buttons'>
                    <div id='filter-buttons'>
                        <button onClick={addFilteredBirds}>
                            Add Filtered Birds
                        </button>
                        <button onClick={removeFilteredBirds}>
                            Remove Filtered Birds
                        </button>
                    </div>
                    <div id='select-div'>
                    <Select
                        options={birdSpecies}
                        value={selectedOption}
                        onChange={filterChange}
                        placeholder='Filter by Species...' />
                    </div>
                </div>
                <div className='card-buttons'>
                    <button onClick={addAllBirds}>
                        Add All Birds
                    </button>
                    <button onClick={removeAllBirds}>
                        Remove All Birds
                    </button>
                </div>
            </div>

            <div id='cards-div'>
                {birdsArray}
            </div>
        </div>
    )
}