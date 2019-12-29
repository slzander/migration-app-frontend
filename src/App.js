import React from 'react'
import './App.css'
import * as d3 from 'd3';
import data from './sandpiper-test.csv'
import Map from './components/Map'

export default class App extends React.Component {
  state = {
    birdData: {}
  }
  
  componentDidMount(){
    d3.csv(data)
      .then(data => console.log(data))
  }

  render(){
    return(
      <div className="App">
        <header className="App-header"></header>
        <Map
          birdData={this.state.birdData} />
      </div>
    )
    }
}