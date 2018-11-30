import React, { Component } from 'react'

import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'
import './App.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      'robots': robots,
      'searchfield': '',
      'filteredRobots': robots
    }
  }
  onSearchChange = (event) => {
    const filterRobots = this.state.robots.filter(robots =>
      robots.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
    )

    this.setState({
      'searchfield': event.target.value,
      'filteredRobots': filterRobots
    })
    console.log(this.state.filteredRobots)
  }
  render() {
    return (
      <div className='tc'>
        <h1 className='f1'> RoboFriend </h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <CardList robots={this.state.filteredRobots} />
     </div>
    )
  }
}

export default App;
