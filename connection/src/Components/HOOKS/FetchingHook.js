import React from 'react';
import axios from 'axios';

function FetchingHook() {
    const [Post,setpost]=React.useState([])
    React.useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res)
            setpost(res.data)
        })
        .catch(err=>{
            alert(err)
            
        })
    },[])
    return (
        <div>
            this is a fetching data of the API 

            <ul>
                {
                    Post.map(post=>(
                        <li key={post.id}>{post.username}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FetchingHook