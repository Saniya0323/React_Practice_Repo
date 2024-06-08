import React, { Component } from 'react'

 class RenderMain extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count: 1
        }
      }
      incrementCount = () => {
          this.setState(prevState => ({
              count: prevState.count+1
          }))
      }
  
    render() {
      return (
        <div>
           {this.props.render (this.state.count , this.incrementCount)}
           {/* {this.props.children (this.state.count , this.incrementCount)} */}
        </div>
      )
    }
}

export default RenderMain