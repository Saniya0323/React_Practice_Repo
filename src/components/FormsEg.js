import React, { Component } from 'react'

class FormsEg extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username :'',
       uaddress : '',
       unumber :  '',
       topic : 'react'
    }
  }
 
  changeName = (event) =>{
    this.setState({
      username : event.target.value
    })
  }
  changeAddress = (event) =>{
    this.setState({
      uaddress : event.target.value
    })
  }
  changeNumber = (event) => {

    this.setState({
      unumber : event.target.value
    })
  }
  changeTopic = (event) => {
    this.setState({
      topic : event.target.value
    })
  }
  handleSubmit = (event) =>{
   alert(`${this.state.username},${this.state.uaddress},${this.state.unumber},${this.state.topic}`)
   event.preventDefault()
  }
  

  render() {
    const{username,uaddress,unumber,topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> name </label>
          <input type='text' value={username} onChange={this.changeName}></input>
        </div>
        <div>
          <label> address </label>
          <textarea value={uaddress} onChange={this.changeAddress}> </textarea>
        </div>
        <div>
          <label> number </label>
          <input type='number' value={unumber} onChange={this.changeNumber}></input>
        </div>
        <div>
          <label> topic </label>
          <select value={topic} onChange={this.changeTopic}> 
          <option value='react'> react </option>
          <option value='angular'> angular </option>
           </select>
        </div>
        <button type='submit'> Submit </button>
      </form>
    )
  }
}

export default FormsEg