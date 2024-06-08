import React, { Component } from 'react'
import axios from 'axios'

export class CounterClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    componentDidMount(){
        this.interval=setInterval(this.incCount,2000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }

  incCount = () => {
    this.setState({
        count: this.state.count+1
    } )
  }
  render() {
    return (
      <div>
        Count  {this.state.count}
      </div>
    )
  }
}

export default CounterClass