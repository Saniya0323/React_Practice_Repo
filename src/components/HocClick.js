import React, { Component } from 'react'
import withCounterHOC from './withCounterHOC'

 class HocClick extends Component {
  render() {
    const{count,incrementCount,name} = this.props
    return (
      <div>
        <button onClick={incrementCount}>
           {name}  Click {count} times </button>

      </div>
    )
  }
}

export default  withCounterHOC(HocClick,6)