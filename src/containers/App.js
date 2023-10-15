import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

// Old way of doing React classes but good to know for 1st project
class App extends Component {
  constructor() {
    // Cant run constructor without super()
    super();
    // Set state
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  // Fetch user data from url
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // Return that data in the form of JSON
      .then(response => response.json())
      // Set robots empty array state to user data
      .then(users => this.setState({ robots: users }));
  }

  // A function that sets searchfield empty string state to searchfield.value
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    // destructuring to not repeat "this.state" lots in the code
    const { robots, searchfield } = this.state;
    // filter users on page based on updated searchfield state
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // If fetch request fails or takes too long, display this msg
    // Can add loading GIF in future
    return !robots.length ? (
      <h1 className="tc">Loading or Failed API Request</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
