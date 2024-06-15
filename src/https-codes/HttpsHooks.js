import React,{useState , useEffect} from 'react'
import axios from 'axios'

function HttpsHooks() {
    const[lists,setList] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            setList(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
  return (
    <div>
        list 
        {
            lists.map(list => <div key={list.id}> {list.title} </div>)
        }
    </div>
  )
}

export default HttpsHooks