import React from 'react';
import Axios from 'axios';

class PostForm extends React.Component {
    constructor(props) {
    super(props)
    this.state={
        name:'',
        username:'',
        email:''
    }
    }
    clickhandler=e=> {
      this.setState({[e.target.name]:e.target.value})
    }
    submithandler=e=>{
        e.preventDefault()
        console.log(this.state)
        Axios.post('https://jsonplaceholder.typicode.com/users',this.state)
        .then(response=>{
            console.log(response)
            
        })
        .catch(error=>{
            alert(error)
        })
    }
   
    render() {
        const{name,username,email}=this.state
        return (
            <form onSubmit={this.submithandler}>
                <h2>this is a general form that connect data </h2>
                <div>
                <input type="text" name="name" value={name} onChange={this.clickhandler} />
                </div>
                <div>
                <input type="text" name="username" value={username} onChange= {this.clickhandler}/>
                 </div>
                 <div>
                <input type="text" name="email" value={email} onChange={this.clickhandler}/>
                </div>
                <button type="submit">   Click button</button>
            </form>
        )
    }
}
export default PostForm;