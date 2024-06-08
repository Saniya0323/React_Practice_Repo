import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './ComponentCreateContext'

export class ComponentE extends Component {
  // if supports public class view syntax
  static contextType = UserContext
  render() {
    return (
      <div>
        ComponentE = {this.context}
        <ComponentF />
      </div>
    )
  }
}
// ComponentE.contextType = UserContext

export default ComponentE