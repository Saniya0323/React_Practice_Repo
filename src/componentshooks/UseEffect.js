// run after every render i.e. title gets updated on button click
// run conditionally i.e only on count btn it should render 

import React, { useEffect, useState } from 'react'

function UseEffect() {
    const[count,setCount] = useState(0)
    const[name,setName] = useState('')
    useEffect(()=> {
        console.log('clicked on button')
        document.title=`Click ${count} times`
    },[count])      // count is a condition passed 
    return (
        <div>UseEffect
        <button onClick={()=> setCount(count+1)}> Click {count} </button>
        <br /><br />
        <label> Name </label>
        <input value={name} onChange={(e)=> setName(e.target.value)}/>
        <button>click name</button>
        </div>
  )
}
export default UseEffect