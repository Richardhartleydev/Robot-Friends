import React, { Component } from "react";

// Creating Error Catch for any problem with CardList component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // Similar to try catch block in Vanilla JS
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  // If hasError state = true, render error msg - else render children
  render() {
    if (this.state.hasError) {
      return <h1>Sorry an error has occurred</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
