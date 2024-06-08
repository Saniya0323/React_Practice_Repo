import React, { Component } from 'react'

 class RenderClick extends Component {
    render() {
        const{count,incrementCount} = this.props
        return (
          <div>
            <button onClick={incrementCount}>
              Click {count} times </button>
    
          </div>
        )
      }
}

export default RenderClick