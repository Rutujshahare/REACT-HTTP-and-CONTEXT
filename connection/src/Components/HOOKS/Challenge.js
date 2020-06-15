import React from 'react';

function Challenge() {
    const [name,setname]=React.useState({username:'',password:''})
    React.useEffect(()=>{
        document.write=`${name.username}`
    })
    return (
        <div>
            this is a Welcome pages of the Project App
             <form>
            <div>
                <input type="text" value={name.username} onChange={e=>setname({username:e.target.value})}/>
            </div>
            <div>
                <input type="password" value={name.password} onChange={e=>setname({password:e.target.value})}/>
            </div>
            <div>
               <button type="submit">submit</button>
            </div>
            </form>  
        </div>
    )
}
export default Challenge