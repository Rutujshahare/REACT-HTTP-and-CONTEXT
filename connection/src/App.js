import React from 'react';

import Reducer from './Components/HOOKS/Reducer';
import UseReducer from './Components/HOOKS/UseReducer1';
import UseReducer1 from './Components/HOOKS/UseReducer1';
import MultipleReducer from './Components/HOOKS/MultipleReducer';
import './App.css';
import FetchApi from './Components/HOOKS/FetchApi';
import DataFetchingtwo from './Components/HOOKS/DataFetchingtwo';



export const UserContext=React.createContext()
export const ChannelContext=React.createContext()


//if we remove the comment and run ew see the default value is replace by other 
function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'kshitij shahare'}>
        <ChannelContext.Provider value={'shreyash shahare'}>
   
     <ContextC/>
     </ChannelContext.Provider>
     </UserContext.Provider> */}
<DataFetchingtwo/>
    </div>
  );
}

export default App;
