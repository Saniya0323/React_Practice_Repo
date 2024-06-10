import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state,action) => {
 switch(action){
    case 'increment':
        return state + 1
    case 'decrement' :
        return state - 1
    case 'reset':
        return initialState
    default:
        return state
 }}

function UseReducerBasic() {
    // const arr = [1,2,3,4,5]
    // const reducer = (accumulator,currentValue) => accumulator+currentValue
    // console.log(arr.reduce(reducer))
    // console.log(arr.reduce(reducer,10))

    const [count,dispatch]=useReducer(reducer,initialState)

  return (
    <div> {count}
        <button onClick={() => dispatch('increment')} >Increment</button>
        <button onClick={() => dispatch('decrement')} >Decrement</button>
        <button onClick={() => dispatch('reset')} >Reset</button>
        
    </div>
  )
}

export default UseReducerBasic