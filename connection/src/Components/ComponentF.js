import React, { Component } from 'react'
import { UserConsumer } from '../UserContext'

export class ComponentF extends Component {
    render() {
        return (
           <UserConsumer>
               {
                   (username)=> {
                    return <input type="text" name="USERNAME" value={username}/>
                   }

               }
           </UserConsumer>
        )
    }
}

export default ComponentF
