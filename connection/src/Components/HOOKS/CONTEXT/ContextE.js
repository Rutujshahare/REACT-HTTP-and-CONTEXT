import React,{useContext} from 'react';

import { UserContext, ChannelContext } from '../../../App';

function ContextE() {
 const users=useContext(UserContext)
 const Channel=useContext(ChannelContext)
    return (
        <div>
        {users} and see the usecontext magic {Channel}
        </div>
    )
}
export default ContextE