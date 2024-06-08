import React,{useState} from 'react'
import UseEffectOnce from './UseEffectOnce'

function UseEffectCleanup() {
    
    const[display,setDisplay] = useState(0)
  return (
    <div>
        
        <button onClick={()=> setDisplay(!display)} >On / Off</button>
         {display && <UseEffectOnce />}

    </div>
  )
}

export default UseEffectCleanup