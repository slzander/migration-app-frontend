import React from 'react'
import './App.css'
import * as d3 from 'd3';
// import data from './sandpiper-test.csv'
import ViewMap from './components/ViewMap'
import CardContainer from './components/CardContainer'

export default class App extends React.Component {
  state = {
    birdData: []
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/birds')
      .then(response => response.json())
      .then(birdData => this.setState({ birdData }))
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
        <CardContainer
          birdData={this.state.birdData} />
        <ViewMap
          birdData={this.state.birdData} />
      </div>
    )
    }
}