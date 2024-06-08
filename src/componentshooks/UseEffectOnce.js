import React,{useEffect, useState} from 'react'

function UseEffectOnce(){
    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

    const movedMouse = (e) => {
        console.log('mouse moved')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('useeffect called')
        window.addEventListener('mouseover',movedMouse)

        
        return () =>{
            console.log('useEffect stopped')
            window.removeEventListener('mouseover',movedMouse)
        }
    },[])  // to call useEffect only once use [] 
    
    return(
        <div>
            X co-ordinate : {x}
            <br></br>
            Y co-ordinate : {y}
        </div>
    )
}
export default UseEffectOnce