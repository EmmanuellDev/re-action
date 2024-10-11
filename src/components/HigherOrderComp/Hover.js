import React, { Component } from 'react';

class Hover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleHover = () => {
    this.setState((prevState) => ({
      count: prevState.count + 5
    }));
  };

  render() {
    const { count } = this.state; // Corrected: Destructure count from this.state
    return (
      <div>
        <button onMouseMove={this.handleHover}>Hovered {count} times</button>
      </div>
    );
  }
}

export default Hover;
