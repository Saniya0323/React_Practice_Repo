import React, { Component } from 'react'
class Conditions extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedIn:true
  }
}
  render() {

    // 1st approach
    // if(this.state.isLoggedIn)
    // {
    // return <div> Welcome Saniya</div>
    // }
    // else{
    // return <div> Welcome Guest</div>
    // }
    // }

    //  2nd approach
    // let message 
    // if(this.state.isLoggedIn)
    // {
    //     message = <div> Welcome Saniya </div> 
    // }
    // else{
    //     message = <div> Welcome Guest </div>
    // }
    // return(<div> {message}</div>)
    // }

    // 3rd approach
    // return this.state.isLoggedIn ? (
    //     <div> Welcome Saniya</div>) : ( 
    //     <div> Welcome Guest</div>)

    //  4th approach
    return this.state.isLoggedIn && <div> Welcome Saniya</div>

}
}

export default Conditions