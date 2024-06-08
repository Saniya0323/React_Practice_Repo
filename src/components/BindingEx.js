import React, { Component } from 'react'

class BindingEx extends Component {
constructor(props) {
  super(props)

  this.state = {
     msg : "Hello"
  }

//   use for 3rd type
//   this.changedMsg = this.changedMsg.bind(this)
}

//  use for 1st and 2nd type 
// changedMsg(){
//     this.setState({
//         msg : "Bye"
//     })
// }

//  use for 4th type
changedMsg = () =>{
    this.setState({
        msg : "Bye"
    })
}

  render() {
    return (
        <div>
            <h3> {this.state.msg}</h3>

        {/*  1- binding in render method --- re-render for every comp*/}
        {/* <button onClick={this.changedMsg.bind(this)}> Click</button> */}

        {/* 2 - binding in arr funct */}
        {/* <button onClick={()=>this.changedMsg()}> Click</button> */}

        {/* 3 - binding in constructor (official) */}
        {/* 4 - binding in class property as arr funct */}
        <button onClick={this.changedMsg}> Click</button>

        </div>
    )
  }
}

export default BindingEx