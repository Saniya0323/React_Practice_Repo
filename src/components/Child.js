import React from 'react'

function Child(props) {
  return (
    // <button onClick={props.greetHandler}> greetParent </button>
    <button onClick={() => props.greetHandler("child")}> greetParent </button>
  )
}

export default Child