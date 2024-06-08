import React, { Component } from 'react'
import RegularComponent from './RegularComponent'
import PureComponents from './PureComponents'
import MemoDemo from './MemoDemo'

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'saniya'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'SANIYA'
            })
        },2000)
    }
  render() {
    return (
      <div>ParentComponent
    {/* <RegularComponent name={this.state.name}></RegularComponent>
    <PureComponents name={this.state.name}></PureComponents> */}
   <MemoDemo name={this.state.name}></MemoDemo>
      </div>
    )
  }
}

export default ParentComponent