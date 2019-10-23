import React, { Component } from "react";

class ErrorHandeling extends Component {
  state = {
    isError: false
  };
  componentDidCatch(error) {
    console.log(error);
  }
  static getDerivedStateFromError(Error) {
    return {
      isError: true
    };
  }
  render() {
    if (!this.state.isError) return this.props.children;
    else
      return (
        <div>
          <h1>Error Handeling</h1>
        </div>
      );
  }
}

export default ErrorHandeling;
