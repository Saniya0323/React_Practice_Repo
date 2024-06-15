import React, { Component } from 'react'
import axios from 'axios'

class httpdemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         err:""
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({
                posts:response.data
            })
        })
        .catch(error=> {
            console.log(error)
            this.setState({err:"error !!"})
        })
    }

  render() {
    const {posts,err} = this.state
    return (
      <div>
        list of posts
     {
        posts.length ?
        posts.map(post => <div key={post.id}> { post.title} </div>):
        null
     }
     {err ? <div> {err} </div> : null}
    </div>
    )
  }
}

export default httpdemo


