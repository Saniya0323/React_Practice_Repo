// creating ref and assigning to another class component 

import React, { Component } from 'react'

 class RefsParent extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }
    foucsOnInput(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type='text'
        ref={this.inputRef}
        ></input>

      </div>
    )
  }
}

export default RefsParent