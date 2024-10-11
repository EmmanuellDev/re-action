import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    this.inputRefs = React.createRef()
    this.cbRef = null
    this.setCbRef = element => {
        this.cdRef = element
    }
    }

    componentDidMount() {
        if (this.cbRef) {
            this.cbRef.focus()
        }
        this.inputRefs.current.focus()
        console.log(this.inputRefs);
        
    }

    HandleClick = () => {
       alert (this.inputRefs.current.value)
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRefs}/>
        <input type='text' ref={this.setCbRef}/>
        <button onClick={this.HandleClick}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
