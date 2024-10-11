import React, { Component, PureComponent } from 'react'
import RegularComponent from './RegularComponent'
import PureComp from './PureComp'
import MemoComp from './MemoComp'


class ParentComponent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Emman'
      }
    }

    componentDidMount () {
        setInterval(() => {
            this.setState({
                name: 'Emman'
            })
        }, 2000)
    }
    
  render() {
    console.log('Parent Comp Render');
    
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name}/>
        {/* <RegularComponent name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComponent
