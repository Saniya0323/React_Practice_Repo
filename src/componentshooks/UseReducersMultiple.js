import React, { useReducer } from 'react'

function UseReducersMultiple() {
    const initialState = 0;
    const reducer = (state,action)=>{
        switch(action){
            case 'inr':
                return state +1 
            case 'dec':
                return state-1
            case 'reset':
                 return initialState
        }
    }

    const [ count,dispatch] = useReducer(reducer,initialState)
    const [ count2,dispatch2] = useReducer(reducer,initialState)
  return (
    <div> count - {count} <br></br>
        count2 - {count2}
        <button onClick={()=>dispatch('inr')}>inr</button>
        <button onClick={()=>dispatch('dec')}>dec</button>
        <button onClick={()=>dispatch('reset')}>reset</button>
        <br></br>
        <button onClick={()=>dispatch2('inr')}>inr 2</button>
        <button onClick={()=>dispatch2('dec')}>dec 2</button>
        <button onClick={()=>dispatch2('reset')}>reset 2</button>
    </div>
  )
}

export default UseReducersMultiple