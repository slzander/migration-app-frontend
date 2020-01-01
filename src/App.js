import React from 'react'
import './App.scss'
import L from 'leaflet'
// import * as d3 from 'd3';
import ViewMap from './components/ViewMap'
import CardContainer from './components/CardContainer'
import sparrow from './images/sparrow.png'
import sandpiper from './images/sandpiper.png'
const baseURL = 'http://localhost:3000'

export default class App extends React.Component {
  state = {
    birdData: [],
    mappedBirds: [],
    selectedOption: null,
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

  // createIcon = (bird) => {
  //   if (bird.name === 'Upland Sandpiper'){
  //     this.setState({ birdIcon: L.icon({
  //       iconUrl: sandpiper,
  //       iconSize: [20, 20],
  //       iconAnchor: [30, 30]
  //       })
  //     })
  //   } else {
  //     this.setState({ birdIcon: L.icon({
  //       iconUrl: sparrow,
  //       iconSize: [20, 20],
  //       iconAnchor: [30, 30]
  //       })
  //     })
  //   }
  //   return this.state.birdIcon
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
            month={this.state.month}
            createIcon={this.createIcon} />
        </main>
      </div>
    )
    }
}