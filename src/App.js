import React from 'react'
import './App.scss'
// import * as d3 from 'd3';
import ViewMap from './components/ViewMap'
import CardContainer from './components/CardContainer'
const baseURL = 'http://localhost:3000'

export default class App extends React.Component {
  state = {
    birdData: [],
    mappedBirds: [],
    selectedOption: null,
    birdLocation: [0,0],
    month: 0
  }
  
  componentDidMount(){
    setInterval(this.changeMonth, 1000)

    fetch(`${baseURL}/birds`)
      .then(response => response.json())
      .then(birdData => this.setState({ birdData }))
  }

  changeMonth = () => {
    if (this.state.month < 11){
    this.setState({ month: this.state.month + 1})
    } else {
      this.setState({ month: 1 })
    }
  }

  // setBirdLocation = (bird) => {
  //   console.log(bird.locations[this.state.month].latitude)
  //   this.setState({ birdLocation:
  //     [bird.locations[this.state.month].latitude, 
  //     bird.locations[this.state.month].latitude] })
  // }

  addBirdToMap = (bird) => {
    if (!this.state.mappedBirds.includes(bird)){
      this.setState({ mappedBirds: [...this.state.mappedBirds, bird] })
    }
  }

  removeBirdFromMap = (bird) => {
    const mappedBirds = this.state.mappedBirds.filter(mappedBird => {
      return mappedBird !== bird
    })
    this.setState({ mappedBirds })
  }

  filterChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  filterBirds = () => {
    if (this.state.selectedOption){
      return this.state.birdData.filter(bird => {
        return bird.name === this.state.selectedOption.label
      })
    } else {
      return this.state.birdData
    }
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <div id="logo">
              <div id="title">
                  <h1>Migrate</h1>
              </div>
          </div>
          <ul>
              <li><button>Home</button></li>
              <li>|</li>
              <li><button>About</button></li>
          </ul>
        </header>
        <main>
          <CardContainer
            birdData={this.filterBirds()}
            birdAction={this.addBirdToMap}
            filterChange={this.filterChange}
            selectedOption={this.state.selectedOption} />
          <ViewMap
            mappedBirds={this.state.mappedBirds}
            month={this.state.month} />
        </main>
      </div>
    )
    }
}