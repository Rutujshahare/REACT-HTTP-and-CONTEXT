import React from 'react';
import HookMouse from './HookMouse';

function HookContainer(){
    const [display,setdisplay]= React.useState()
    return (
        <div>
            this is a hook container concept clean up function 
            <div>
                <button onClick={()=>setdisplay(!display)}>Toggle display </button>
                {display&& <HookMouse/>}
            </div>
        </div>
    )
}
export default HookContainer