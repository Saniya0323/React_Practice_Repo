import React, { Component } from 'react'
import withCounterHOC from './withCounterHOC'

 class HocHover extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <h3 onMouseOver={incrementCount}> Hover {count} times </h3>
      </div>
    )
  }
}

export default withCounterHOC(HocHover,10)