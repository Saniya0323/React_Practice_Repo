import React, { useState } from 'react'

function UseStateObject() {
    const [name,setName] = useState({firstname:'', lastname:''})
  return (
    <div>
        <form>
        <input type='text' 
        value= {name.firstname}
        onChange={(e) => setName({...name, firstname: e.target.value})}
        /> 

        <input type='text'
        value={name.lastname}
        onChange={e => setName({...name, lastname:e.target.value})}
        />

        <h3> firstname = {name.firstname} </h3>
        <h3> lastname = {name.lastname} </h3>
       <h2> {JSON.stringify(name)} </h2>
        </form>

    </div>
  )
}

export default UseStateObject