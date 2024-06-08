// import React, { useState } from 'react'

// function PracticeHooks() {

//   const [name,setName] = useState({fname:'', lname:''})

//   const submitHandler = (e) =>{
//     e.preventDefault()
//     alert(`data - ${name.fname} ${name.lname}`)
//   }

//   return (
//     <div>PracticeHooks
//     <div>
//       <form>
//       <label> first name </label>
//       <input type='text'
//       value={name.fname}
//       onChange={(e)=> setName({...name,fname: e.target.value})}
//       ></input>
//       <br></br>
//       <label> last name </label>
//       <input type='text'
//       value={name.lname}
//       onChange={(e)=> setName({...name,lname: e.target.value})}
//       ></input>
//       <br></br>
//       <button  onClick={submitHandler} >Click </button>
//       <br></br>
//     {/* {JSON.stringify(name)} */}
//       </form>
//     </div>
//     </div>
//   )
// }
// export default PracticeHooks



// useeffect hook
import React, { useState } from 'react'
import usePracticeHooks from './usePracticeHooks'

function PracticeHooks() {
  const[count,setCount] = useState(0)
  usePracticeHooks(count)
  return (
    <div>
      <button onClick={()=> setCount(count+1)}> Click {count} </button>
    </div>
  )
}

export default PracticeHooks