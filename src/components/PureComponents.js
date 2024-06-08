import React, { PureComponent } from 'react'

 class PureComponents extends PureComponent {
  render() {
    return (
      <div>PureComponents {this.props.name}</div>
    )
  }
}

export default PureComponents