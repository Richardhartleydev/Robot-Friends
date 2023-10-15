import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

// Set state
export default function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  // Fetch user data from url
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // Return that data in the form of JSON
      .then(response => response.json())
      // Set robots empty array state to user data
      .then(users => setRobots(users));
    // useEffect() takes an array as a 2nd arg so it doesn't keep re-rendering
  }, []);

  // Set searchfield empty string state to searchfield.value
  const onSearchChange = event => {
    setSearchfield(event.target.value);
  };

  // Filter users on page based on updated searchfield state
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
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}
