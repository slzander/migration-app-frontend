import React from 'react'
import './App.scss'
import ViewMap from './components/ViewMap'
import Header from './components/Header'
import CardContainer from './components/CardContainer'
import About from './components/About'

const baseURL = 'https://migration-mapper.herokuapp.com'
// const baseURL = 'http://localhost:3000'

export default class App extends React.Component {
  state = {
    birdData: [],
    mappedBirds: [],
    selectedOption: null,
    month: 0,
    aboutClicked: false,
    pauseClicked: false,
    intervalID: 0
  }
  
  componentDidMount(){
    fetch(`${baseURL}/birds`)
    .then(response => response.json())
    .then(birdData => this.setState({ 
      birdData: birdData.sort((a,b) => a.id - b.id),
      mappedBirds: birdData.filter(bird => {
        return bird.on_map
      })
    }))
  }

  changeAboutClicked = () => {
    if (this.state.aboutClicked){
      this.setState({ aboutClicked: false })
    } else {
      this.setState({ aboutClicked: true})
    }
    return this.showView
  }

  changeMonth = () => {
    if (this.state.month < 11){
      this.setState({ month: this.state.month + 1})
    } else {
      this.setState({ month: 0 })
    }
  }

  startMonthChange = () => {
    const intervalID = setInterval(this.changeMonth, 1000)
    this.setState({ intervalID })
    this.setState({ pauseClicked: true })
  }

  stopMonthChange = () => {
    clearInterval(this.state.intervalID)
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
      addAllBirds={this.addAllBirds}
      removeAllBirds={this.removeAllBirds}
      addFilteredBirds={this.addFilteredBirds}
      mappedBirds={this.state.mappedBirds} />
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
    this.setState({ mappedBirds: [...this.state.mappedBirds, ...this.filterBirds()] })
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

  componentDidUpdate(){
    this.updateOnMap()
  }

  updateOnMap = () => {
    fetch(`${baseURL}/birds/1`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        mappedBirds: this.state.mappedBirds.map(bird => bird.id)
      })
    })  
  }

  render(){
    return(
      <div className="App">
        <Header
          changeAboutClicked={this.changeAboutClicked}
          aboutClicked={this.state.aboutClicked}
          mappedBirds={this.state.mappedBirds}
          currentMonth={this.state.month}
          changePause={this.changePause}
          pauseClicked={this.state.pauseClicked} />
        <main>
          {this.showView()}
          <ViewMap
            mappedBirds={this.state.mappedBirds}
            currentMonth={this.state.month} />
        </main>
      </div>
    )
    }
}