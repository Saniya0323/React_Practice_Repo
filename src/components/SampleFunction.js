import React from 'react'

// normal function
function SampleFunction(props){
    return(
        <div>
            <h2>
                {props.state} !!
            </h2>
        </div>
    )
}

// const SampleFunction = (props) => 
// <div> {props.state}</div>

export default SampleFunction