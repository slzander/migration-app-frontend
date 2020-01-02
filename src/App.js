import React from 'react'
import './App.scss'
// import * as d3 from 'd3';
import ViewMap from './components/ViewMap'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import About from './components/About'
const baseURL = 'http://localhost:3000'

export default class App extends React.Component {
  state = {
    birdData: [],
    mappedBirds: [],
    selectedOption: null,
    month: 0,
    aboutClicked: false,
    pauseClicked: false,
    intervalID: 0,
    cardColor: 'lightblue'
  }
  
  componentDidMount(){
    fetch(`${baseURL}/birds`)
      .then(response => response.json())
      .then(birdData => this.setState({ birdData }))
  }

  changeMonth = () => {
    if (this.state.month < 11){
    this.setState({ month: this.state.month + 1})
    } else {
      this.setState({ month: 0 })
    }
  }

  changeAboutClicked = () => {
    if (this.state.aboutClicked){
      this.setState({ aboutClicked: false })
    } else {
      this.setState({ aboutClicked: true})
    }
    return this.showView
  }

  startMonthChange = () => {
    this.intervalID = setInterval(this.changeMonth, 1000)
    this.setState({ pauseClicked: true })
  }

  stopMonthChange = () => {
    clearInterval(this.intervalID)
    this.setState({ pauseClicked: false})
  }

  changePause = () => {
    if (this.state.pauseClicked){
      this.stopMonthChange()
    } else {
      this.startMonthChange()
    }
  }

  showView = () => {
    if (!this.state.aboutClicked){
      return <CardContainer
      birdData={this.filterBirds()}
      birdAction={this.addOrRemoveBird}
      filterChange={this.filterChange}
      selectedOption={this.state.selectedOption}
      changeCardColor={this.changeCardColor}
      addAllBirds={this.addAllBirds}
      removeAllBirds={this.removeAllBirds}
      addFilteredBirds={this.addFilteredBirds}
      removeFilteredBirds={this.removeFilteredBirds} />
    } else {
      return <About />
    }
  }
  
  addOrRemoveBird = (bird) => {
    if (!this.state.mappedBirds.includes(bird)){
      if (!this.state.mappedBirds.includes(bird)){
        this.setState({ mappedBirds: [...this.state.mappedBirds, bird] })
      }
    } else {
      const mappedBirds = this.state.mappedBirds.filter(mappedBird => {
        return mappedBird !== bird
      })
      this.setState({ mappedBirds })
    }
  }

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

  addAllBirds = () => {
    this.setState({ mappedBirds: this.state.birdData })
  }

  removeAllBirds = () => {
    this.setState({ mappedBirds: [] })
  }

  addFilteredBirds = () => {
    this.setState({ mappedBirds: this.filterBirds() })
    // this.setState({ mappedBirds: [...this.state.mappedBirds, this.filterBirds()] })
  }

  removeFilteredBirds = () => {
    console.log(this.state.mappedBirds.includes(this.filterBirds()))
    this.setState({ mappedBirds: [] })
  }

  filterChange = (selectedOption) => {
    if(selectedOption.label === 'Select All'){
      this.setState({ selectedOption: null })
    } else {
      this.setState({ selectedOption })
    }
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
        <Header
          changeAboutClicked={this.changeAboutClicked} />
        <main>
          {this.showView()}
          <ViewMap
            mappedBirds={this.state.mappedBirds}
            currentMonth={this.state.month}
            changePause={this.changePause}
            pauseClicked={this.state.pauseClicked} />
        </main>
      </div>
    )
    }
}