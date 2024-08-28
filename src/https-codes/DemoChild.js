import React, { Component } from 'react'
class DemoChild extends Component {
    constructor(props) {
      super(props)
    
      this.inrefer = React.createRef()
    }
    
  render() {
    return (
      <div>
        <button onClick={this.inrefer}>Click</button>
      </div>
    )
  }
}

export default DemoChild