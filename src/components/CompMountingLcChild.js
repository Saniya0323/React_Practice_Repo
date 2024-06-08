import React, { Component } from 'react'

 class CompMountingLcChild extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'saniyaaaa'
        }
        console.log('constrcutor B')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log(' getDerivedStateFromProps B')
        return null
    }

    componentDidMount() {
        console.log('componentDidMount B')
    }

    render() {
        console.log('render B')
        return (
            <div> Child Component </div>
        )
    }
}

export default CompMountingLcChild
