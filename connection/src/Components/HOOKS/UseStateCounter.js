import React from 'react';

function UseStateCounter() {
    const [count,setcount]=React.useState(0)
    return (
        <div>
            
            <h2>this is a functional component of UseState</h2>

    <button onClick={()=>setcount(count+1)}>{count}</button>
        </div>
    )
}
export default UseStateCounter