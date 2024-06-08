import React, { Component } from 'react'
import Child from './Child'
 class Parent extends Component {
constructor(props) {
  super(props)

  this.state = {
     parentName : 'parent'
  }
this.greetParent = this.greetParent.bind(this)

}

greetParent(child){
    alert(`hello ${this.state.parentName} from ${child}`)
}

  render() {
    return (
      <div>
        <Child greetHandler = {this.greetParent}> </Child>

      </div>
    )
  }
}

export default Parent