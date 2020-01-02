import React from 'react'

export default class  BirdCard extends React.Component {
    state = {
        cardColor: '#5c86b5'
    }
    
    changeCardColor = () => {
        if(this.state.cardColor === '#5c86b5'){
            this.setState({ cardColor: 'rgb(155, 130, 99)' })
        } else {
            this.setState({ cardColor: '#5c86b5' })
        }
    }

    render() {
        return(
            <div 
                className='bird-card'
                style={{backgroundColor: this.state.cardColor}}
                onClick={() => {
                    this.props.birdAction(this.props.bird)
                    this.changeCardColor()
                }}
            >
                <h2>{this.props.bird.name}</h2>
                <p>{this.props.bird.species}</p>
                <p>ID Tag#: {this.props.bird.tag}</p>
            </div>
        )
    }
}