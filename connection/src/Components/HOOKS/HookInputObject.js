import React from 'react';

function HookInputObject() {
    const [name,setname]= React.useState({firstname:'',lastname:'',username:'',password:''})
    return (
        <div>
            <h2>THE INPUT FORM HOOK OBKECT METHOD</h2>
             <form>
                 <div>
                     <label>FIRSTNAME</label>
                 <input type="text" value={name.firstname} onChange={e=>setname({ ...name,firstname:e.target.value})}/>
                 </div>
                 <div>
                     <label>LASTNAME</label>
                 <input type="text" value={name.lastname} onChange={e=>setname({ ...name,lastname:e.target.value})}/>
                 </div>
                 
                 <div>
                 <label>USERNAME</label>
                 <input type="text" value={name.username} onChange={e=>setname({ ...name,username:e.target.value})}/>
                 </div>
                 <div>
                     <label>PASSWORD</label>
                 <input type="password" value={name.password} onChange={e=>setname({ ...name,password:e.target.value})}/>
                 </div>
             </form>
                 <h2>the firstname of the customer is:{name.firstname} </h2>
                 <h2>the lastname of the customer is :{name.lastname}</h2>
                 <h2>the username of the customer is:{name.username} </h2>
                 <h2>the password of the customer is:{name.password} </h2>
             
        </div>
    )
}
export default HookInputObject