import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()

        // this.cbref = null
        // this.setcb = (element) =>{
        //     this.cbref = element
        // }

    }
    inputmethod() {
        this.inputRef.current.focus()
        console.log(this.inputRef)

        // if(cbref){
        //     this.cbref.focus()
        // }
    }
    handleClick = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div><h4>RefsDemo </h4>
                <input type='text'
                    ref={this.inputRef}
                    // ref={this.setcb}
                />

                <button onClick={this.handleClick}> Click </button>
            </div>
        )
    }
}

export default RefsDemo