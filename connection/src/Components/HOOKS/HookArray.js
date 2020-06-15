import React from 'react';

function HookArray() {
    const [items,setitems]=React.useState([]);
    React.useEffect(()=>{
        document.title=`${items.value}`
    })
    const additems=()=>{
     setitems([...items,{
         id:items.length,
         value:Math.floor(Math.random()*10)+1
     }])
    }
    return (
        <div>
            <h2>this is a Hook Array Component</h2>
            <button onClick={additems}> Add the items </button>
            <ul>
                {
                items.map(items=>(
                    <li key={items.id}>{items.value}</li>
                ))
                }
            </ul>
        </div>
    )
}
export default HookArray