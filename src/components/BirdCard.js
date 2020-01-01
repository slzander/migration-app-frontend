import React from 'react'

export default function BirdCard({ bird, birdAction }) {
    return(
        <div 
            className='bird-card'
            onClick={() => birdAction(bird)}>
                <h2>{bird.name}</h2>
                <p>{bird.species}</p>
                <p>ID Tag#: {bird.tag}</p>
        </div>
    )
}