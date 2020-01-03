import React from 'react'

export default function BirdCard ({ bird, birdAction, onMap }) {
        return(
            <div 
                className='bird-card'
                style={ onMap ? null : {backgroundColor: 'rgb(146, 141, 135)'} }
                onClick={() => {
                    birdAction(bird)
                }}
            >
                <h2>{bird.name}</h2>
                <p>{bird.species}</p>
                <p>ID Tag#: {bird.tag}</p>
            </div>
        )
}