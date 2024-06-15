import React,{useState,useEffect} from 'react'
import axios from 'axios'

function HttpsOne() {
    const[post,setPost] = useState([])
    const[id,setId] = useState(1)
    const[idDeomBtnClick,setIdFrmBtnClick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idDeomBtnClick}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[idDeomBtnClick])

    const handleClick = () =>{
        setIdFrmBtnClick(id)
    }

  return (
      <div>
        <input type='text' value={id} onChange={e=> setId(e.target.value)} />
        <br></br>
        {post.title}
        {/* <ul>
      {
        post.map(postt => (
        <li key={postt.id}>{postt.title}</li>))
      }
        </ul> */}

        <button type='button' onClick={handleClick}> submit </button>
       
    </div>
  )
} 

export default HttpsOne