import React,{useReducer,useEffect} from 'react';
import axios from 'axios';

const intialState = {
  loading:true,
  error:'',
  post:{}
}

const reducer=(state,action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading:false,
                error:'',
                post:action.payload
            }

            case 'FETCH_ERROR':
                return {
                    loading:false,
                    error:'something went wrong',
                    post:{}
                }
                default:
                    return state
    }
}


function DataFetchingtwo() {
  const[state,dispatch]=  useReducer(reducer,intialState)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/5')
    .then(res=>{
        dispatch({type:'FETCH_SUCCESS',payload:res.data})
    })
    .catch(error=> {
       dispatch({type:'FETCH_ERROR'})
    })
   },[])
    return (
        <div>
          {state.loading? 'Loading' :state.post.title}
          {state.error? state.error:null}
        </div>
    )
}
export default DataFetchingtwo