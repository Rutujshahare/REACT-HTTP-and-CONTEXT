import  React from 'react';
import Axios from 'axios';

class Fetch extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users1')
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>
            {
                alert(error)
            })
    }
    render() {
        const{posts}=this.state
        return (
            <div>
                <h2> this is a fetching the API data</h2>
                {
                   posts.length ?
                   posts.map(post=><div key={post.id}>{post.name}and{post.city} and {post.username}</div>):null
                }
            </div>
        )
    }
}
export default Fetch;