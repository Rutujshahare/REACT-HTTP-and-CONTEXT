import React from 'react';

import Axios from 'axios';

class PostList extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            posts:[],
            error:[]
        }
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error =>{
            alert(error)
            this.setState({alert:'error in retriving the data'})
        })
    }
    render() {
        const {posts} =this.state
        return (
            <div>
                <h2>this is a Post component</h2>
                {
                    posts.length ?
                    
                    posts.map(post => <div key={post.id}>{post.url}</div>) :null
                }
            </div>
        )
    }
}
export default PostList