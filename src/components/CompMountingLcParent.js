import React, { Component } from 'react'
import CompMountingLcChild from './CompMountingLcChild'

class CompMountingLcParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ' saniya '
        }
        console.log('constrcutor A')
    }

    static getDerivedStateFromProps(props, state) {
        console.log(' getDerivedStateFromProps A')
        return null
    }

    componentDidMount() {
        console.log('componentDidMount A')
    }

    render() {
        console.log('render A')
        return (
            <div>
                <div> Parent Component </div>
                <CompMountingLcChild /> 
            </div>
        )
    }
}

export default CompMountingLcParent