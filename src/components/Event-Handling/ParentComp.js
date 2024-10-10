import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Amma'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent (childName) {
    alert(`Hello ${this.state.parentName}, this is your son ${childName}`)
  }

  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComp

