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

function Reducer() {
  const[count,dispatch] =  useReducer(reducer,intialState)
    return(
        <div>
            <div>count-{count}</div>
         <button onClick={()=>dispatch('increment')}>INCREMENT</button>
         <button onClick={()=>dispatch('decrement')}>DECREMENT</button>
         <button onClick={()=>dispatch('reset')}>RESET</button>
        </div>
    )
}
export default Reducer