import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

    render() {

// Using short circuit operator

        return this.state.isLoggedIn && <h1>Welcome Emman</h1>

// Using ternary operator

       return this.state.isLoggedIn ? <h1>Welcome Emman</h1> : <h1>Welcome Emma</h1>

// Rendering using a variable

        let message
        if (this.state.isLoggedIn) {
             message = <h1>Welcome Emman</h1>
        }
        else {
            message = <h1>Welcome Emma</h1>
        }

        return <div>{message}</div>

// Using if else conditional statement

    if (this.state.isLoggedIn) {
        return ( <h1>Welcome Emman</h1> )
    }
    else {
        return ( <h1>Welcome Emma</h1> )
    }

  }
}

export default UserGreeting
