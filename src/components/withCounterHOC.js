import React, { Component } from 'react'

// const UpdatedComponent = OriginalComponent => {
    // class NewComponent extends React.Component {

const withCounterHOC = (WrappedComponent,incCount) => {
class WithCounter extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 1
      }
    }
    incrementCount = () => {
        this.setState(prevState => ({
            count: prevState.count+incCount
        }))
    }



  render() {
    return (
      <div>
        <WrappedComponent count={this.state.count} 
        incrementCount={this.incrementCount}

        // to pass down all props through hoc's
        {...this.props} />
      </div>
    )
  }
}
return WithCounter
}

export default withCounterHOC