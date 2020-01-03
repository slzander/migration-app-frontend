import React from 'react'
import Select from 'react-select'
import BirdCard from './BirdCard'

export default function CardContainer({ 
    birdData, 
    birdAction, 
    filterChange, 
    selectedOption, 
    addAllBirds, 
    removeAllBirds, 
    addFilteredBirds,
    mappedBirds
    }) {

    const birdsArray = birdData.map(bird => {
        return mappedBirds.includes(bird) ? 
         <BirdCard
            key={bird.id}
            bird={bird}
            birdAction={birdAction} />
        : <BirdCard
        key={bird.id}
        bird={bird}
        birdAction={birdAction}
        onMap={true} />
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
                    <div id='select-div'>
                    <Select
                        options={birdSpecies}
                        value={selectedOption}
                        onChange={filterChange}
                        placeholder='Filter by Species...' />
                    </div>
                    <div id='filter-buttons'>
                        <button onClick={addFilteredBirds}>
                            Add Filtered Birds
                        </button>
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