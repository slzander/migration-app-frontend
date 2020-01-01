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
    aboutClicked: false
    // cardColor: 'lightblue'
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

  showView = () => {
    if (!this.state.aboutClicked){
      return <CardContainer
      birdData={this.filterBirds()}
      birdAction={this.addBirdToMap}
      filterChange={this.filterChange}
      selectedOption={this.state.selectedOption}
      changeCardColor={this.changeCardColor}
      addAllBirds={this.addAllBirds} />
    } else {
      return <About />
    }
  }


  // changeCardColor = () => {
  //   if (this.state.cardColor === 'lightblue'){
  //     this.setState({ cardColor: 'red' })
  //   } else {
  //     this.setState({ cardColor: 'lightblue' })
  //   }
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

  addAllBirds = () => {
    this.setState({ mappedBirds: this.state.birdData })
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
        <Header
          changeAboutClicked={this.changeAboutClicked} />
        <main>
          {this.showView()}
          <ViewMap
            mappedBirds={this.state.mappedBirds}
            currentMonth={this.state.month}
            createIcon={this.createIcon} />
        </main>
      </div>
    )
    }
}