import React, { Component } from 'react'

import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'

class App extends Component {
  constructor(){
    super()
    this.state = {
      'robots': robots,
      'searchfield': ''
    }
  }
  onSearchChange = (event) => {
    this.setState({
      'searchfield': event.target.value
    })
  }
  render() {
    const filterRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(
        this.state.searchfield
      )
    })

    return (
      <div className='tc'>
        <h1> RoboFriend </h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <CardList robots={filterRobots} />
     </div>
    )
  }
}

export default App;
