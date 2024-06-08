import React, { Component } from 'react'

class ClassStatesPrg extends Component {
constructor(props) {
  super(props)

  this.state = {
     count : 0
  }
}

// increment(){
//     this.setState({
//         count : this.state.count + 1
//     },
//     () => {
//         console.log('Callback',this.state.count)
//     })
// }

increment(){
    this.setState((prevState) => ({
        count : prevState.count + 5
    }))
}

  render() {
    const{count} = this.state
    return (
      <div>
       <h2>Count {count}   </h2>
        <button onClick={ () => this.increment()}> Click Here </button>
      </div>
    )
  }
}

export default ClassStatesPrg