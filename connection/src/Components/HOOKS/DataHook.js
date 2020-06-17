import React from 'react';
import axios from 'axios';

function DataHook() {
    const [Post,setpost]=React.useState([])
    const [id,setId]=React.useState(1)
    const [idf,setidf]=React.useState(1)
    const handleclick=()=>{
        setidf(id)
    }
    React.useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
        console.log(res)
        setpost(res.data)
    })
    .catch(err=>{
        alert(err)
    })
    },[idf])
    return (
        <div>
            this is a http data fetching by the id
            <input type='text' value={id} onChange={e=>setId(e.target.value)}/>
            <div>
                <input type="text " value={Post.title}/>
            </div>
            <button type="button" onClick={handleclick}>FETCH POST</button>
           
        </div>
    )
}
export default DataHook