import React, { Component } from 'react'
// import SampleFunction from './SampleFunction'
 class SampleClass extends Component {
  render() {
    return (
      <div>
        <h2> 
          Hii {this.props.name}
          {/* <SampleFunction state='Function' /> */}
        </h2>

      </div>
    )
  }
}

export default SampleClass