import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler () {
        this.setState ({
            message: 'Good bye!'
        })
    }

    clickHandler = () => {
        this.setState ({
            message: 'Good bye!'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button> // Bind Approach
        <button onClick={() => this.clickHandler()}>Click</button> // Arrow Approach
        <button onClick={this.clickHandler}>Click</button> //Binding inside the constructor
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
