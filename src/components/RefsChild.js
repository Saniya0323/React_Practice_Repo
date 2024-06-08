import React, { Component } from 'react'
import RefsParent from './RefsParent'

 class RefsChild extends Component {
    constructor(props) {
      super(props)
    
      this.compRef = React.createRef()
    }
    clickHandler = () => {
        this.compRef.current.foucsOnInput()
    }
  render() {
    return (
      <div>
        <RefsParent ref= {this.compRef} />
        <button onClick={this.clickHandler}> Click</button>
      </div>
    )
  }
}

export default RefsChild