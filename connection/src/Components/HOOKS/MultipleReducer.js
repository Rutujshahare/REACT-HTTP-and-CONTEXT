import React,{useReducer} from 'react';
const intialState=0
const reducer=(state,action)=>{
switch(action) {
        case 'increment':
        return state+1

        case 'decrement':
        return state-1

        case 'reset':
        return intialState

        default:
        return  state
}
}


function MultipleReducer() {
    const[count,dispatch]=useReducer(reducer,intialState)
    const[counttwo,dispatchtwo]=useReducer(reducer,intialState)
    return (
        <div>
            <div>count-----:{count}</div>
          <button onClick={()=>dispatch('increment')}>INCREMENT</button>
          <button onClick={()=>dispatch('decrement')}>DECREMENT</button>
          <button onClick={()=>dispatch('reset')}>RESET</button>


          <div>count-----:{counttwo}</div>
          <button onClick={()=>dispatchtwo('increment')}>INCREMENT</button>
          <button onClick={()=>dispatchtwo('decrement')}>DECREMENT</button>
          <button onClick={()=>dispatchtwo('reset')}>RESET</button>
        </div>
    )
}
export default MultipleReducer