import React, { Component } from 'react'
import FwdRefs from './FwdRefs'

 class FwdRefParent extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }
    clickHandler = () => {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <FwdRefs ref={this.inputRef} />
        <button onClick={this.clickHandler}> Focus Input</button>
      </div>
    )
  }
}

export default FwdRefParent