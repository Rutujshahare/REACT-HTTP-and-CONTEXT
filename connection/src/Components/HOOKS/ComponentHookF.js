import React from 'react';
import { UserContext ,ChannelContext} from '../../App';


function ComponentHookF() {
    return (
        <div>
            <UserContext.Consumer>
            {
                user=>{
                return (
                    <ChannelContext.Consumer>
                        {
                            channel=>{
                            return   <div>User value {user} and channel {channel}</div>
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
export default ComponentHookF