import React, { Component } from 'react'

class ClassClick extends Component {
  ClickHandler () {
    console.log('Button Clicked')
  }

  render() {
    return (
      <div>
        <button onClick={this.ClickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
