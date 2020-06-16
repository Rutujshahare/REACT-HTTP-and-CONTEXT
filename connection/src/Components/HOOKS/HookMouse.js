import React from 'react';

function HookMouse() {
    const [x,setx]=React.useState(0)
    const [y,sety]=React.useState(0)
    const logmouseposition =e=>{
     console.log('the hook pointing to the direction')
     setx(e.clientX)
     sety(e.clientY)
    }
    React.useEffect(()=>{
      console.log('mouse hook updated')
      window.addEventListener('mousemove',logmouseposition)

      return ()=> {
      console.log('unmounted code')
      window.removeEventListener('mousemove',logmouseposition)
      }
    },[])
    return (
        <div>
            this is a hook mouse programe
            <h2>hook x:{x} and y:{y}</h2>
        </div>

    )
}
export default HookMouse