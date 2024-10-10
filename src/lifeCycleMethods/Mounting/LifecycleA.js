import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Emman'
      }
      console.log('LifecycleA Constructor')
    }

    static getDerivedStateFromProps (props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount () {
        console.log('LifecycleA componentDidMount');
        
    }
    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');
        
    }
    handleChange = () => {
        this.setState ({
            name: 'Espoir'
        })
    }
  render() {
    console.log('LifecycleA Render')
    return (
      <div>
        <h2>Lifecycle A</h2>
        <button onChange={this.handleChange}>Change State</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA
