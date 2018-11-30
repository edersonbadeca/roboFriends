import React, { Component } from "react";

import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor(robotsList) {
    super(robots);
    this.state = {
      "allRobots": robotsList,
      "filteredRobots": null
      "searchfield": "",
    };
  }
  onSearchChange = (event) => {
    const filterRobots = this.state.allRobots.filter(robot =>
      allRobots.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
    )

    this.setState({
      "filteredRobots": filterRobots,
      "searchfield": event.target.value,
    });
  }
  render() {
    return (
      <div className="tc">
        <h1> RoboFriend </h1>
        <SearchBox SearchChange={this.onSearchChange} />
        <CardList robots={this.state.filteredRobots} />
     </div>
    );
  }
}

export default App;
