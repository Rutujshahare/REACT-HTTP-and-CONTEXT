import React from 'react';
import { UserContext, ChannelContext } from '../../../App';
 

function ContextF() {
    return (
        <div>
        <UserContext.Consumer>{
                users=>{
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel=>{
                                    return (
                             <div>
                            {users} and {channel}
                             </div>
                                    )
                                }
                            }
                        </ChannelContext.Consumer>
                        
                    )
                }
            }
        </UserContext.Consumer>

        </div>
    )
}
export default ContextF

