import React, { useState } from 'react'

function UseState() {
    const initValu = 0
    const[count,setCount]= useState(initValu)

   const incrementCount = () => {
        for(let i=0;i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div> Count {count}
    {/* <button onClick={() => setCount(count+1)}> Click </button>  */}
    <button onClick={() => setCount (prevCount => prevCount+1)}> Increment </button> 
    <button onClick={() => setCount (prevCount => prevCount-1)}> Decrement </button> 
    <button onClick={() => setCount (initValu)}> initial </button> 
    <button onClick={incrementCount}> Incr 5 </button> 
    </div>
  )
}

export default UseState




// extra practice
// import React, { useState } from 'react'

// function UseState() {
//   const[count,setCount] = useState(8)
//   const[name,setName] = useState({fname:'',lname:''})
//  const increment=() => {
//     setCount(count +1)
//   }
//   return (
//     <div>
//      {count} <button onClick={increment}>Click </button>
//     <br></br>
//     <br></br>

//     <form>
//     <label> Fname </label>
//      <input value={name.fname} 
//      onChange={(e)=>setName({...name,fname:e.target.value})} /> 
//     <label> Lname </label>
//      <input value={name.lname}  
//      onChange={(e)=> setName({...name,lname:e.target.value})}/> 
//      <br></br>
//      fname -- {name.fname}
//     <br />
//      lname -- {name.lname}
//      <br></br>
//     <button>Submit </button>
//     </form>
//     </div>
//   )
// }

// export default UseState
