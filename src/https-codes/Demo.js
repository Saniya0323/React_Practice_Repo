import React, { Component } from 'react'

class Demo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:'',
         lname:''
      }
      this.inref=React.createRef()
    }
    changeName = event => {
        const{name,value} = event.target
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    submitt =()=>{
        alert(`${this.state.fname} ${this.state.lname}`)
    }

    componentDidMount(){
        this.inref.current.focus()
    }

  render() {
    const{fname,lname} = this.state
    return (
      <div>
        <input type='text' name='fname' value={fname} onChange={this.changeName} 
        ref={this.inref}
        ></input>
        <input type='text' name='lname' value={lname} onChange={this.changeName}></input>

        <button onClick={this.submitt}>Submit</button>
      </div>
    )
  }
}

export default Demo