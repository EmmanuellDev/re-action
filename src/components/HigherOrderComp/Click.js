import React, { Component } from 'react';

class Click extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 5
    }));
  };

  render() {
    const { count } = this.state; // Corrected: Destructure count from this.state
    return (
      <div>
        <button onClick={this.handleCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default Click;
