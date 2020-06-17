import React,{useState,useEffect} from 'react';
import axios from 'axios';




function FetchApi() {
const[loading,setLoading]=useState(true)
const[error,seterror]=useState('')
const [Post,setpost]=useState({})

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/5')
    .then(res=>{
        setLoading(false)
        seterror('')
        setpost(res.data)
    })
    .catch(error=> {
       setLoading(false)
       seterror('data problem occur')
       setpost({})
    })
   },[])
    return (
        <div>
          {loading? 'Loading' :Post.title}
          {error? error:null}
        </div>
    )
}
export default FetchApi