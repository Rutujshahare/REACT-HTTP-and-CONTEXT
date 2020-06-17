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
                    return state
}
}


function UseReducer1() {
    const[count,dispatch]=useReducer(reducer,intialState)  
    return (
        <div>
         this is a concept of use reducer 
         <div>count---------:{count}</div>
         <button onClick={()=>dispatch('increment')}> INCREMENT</button>
         <button onClick={()=>dispatch('decrement')}>DECCREMENT</button>
         <button onClick={()=>dispatch('reset')}>RESET</button>
        </div>
    )
}
export default UseReducer1