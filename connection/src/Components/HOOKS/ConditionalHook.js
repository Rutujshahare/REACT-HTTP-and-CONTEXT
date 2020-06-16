import React from 'react';
function ConditionalHook() {
    const [count,setcount]=React.useState(0)
    const [name,setname]=React.useState([])
    React.useEffect(()=>{
        console.log('clicked updated ')
        document.title=`clicked:${count}`
    },[count])
    return (
        <div>
            this is a hook conditional component program
            <input type="text" value={name} onChange={e=>setname(e.target.value)}/>
            <button onClick={()=>setcount(count+1)}>clicked{count}</button>
        </div>
    )
}
export default ConditionalHook