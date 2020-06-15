import React from 'react';

function HookUseeffect() {
    const [count,setccount]=React.useState(0);
    React.useEffect(()=>{
    document.title =`clicked ${count} times`
    })
    return (
        <div>
            this is a useffect component method problems
            <div>
             <button onClick={()=>setccount(count+1)}>you have clicked the button : {count}</button>
             </div>
        </div>
    )
}
export default HookUseeffect