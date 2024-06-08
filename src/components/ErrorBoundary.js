import React, { Component } from 'react'
class ErrorBoundary extends Component {
constructor(props) {
  super(props)
  this.state = {
    hasError : false
  }
}
    static getDerivedStateFromProps(error){
        return{
            hasError : true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

  render() {
    if(this.state.hasError){
        return <h1> something wrong</h1>
    }
    return (
      <div>ErrorBoundary</div>
    ) 
    return this.props.children
  }
}

export default ErrorBoundary