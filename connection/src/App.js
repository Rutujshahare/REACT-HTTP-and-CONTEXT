import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './Components/PostList';
import Fetch from './Components/Fetch';
import PostForm from './Components/Postform';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './UserContext';
//if we remove the comment and run ew see the default value is replace by other 
function App() {
  return (
    <div className="App">

    
     {/* <UserProvider value="rutuj shahare ">
        
      <ComponentC/>
     // <form>
       // <input type="password"/>
      </form>
      </UserProvider> */
      <ComponentC/>}
    </div>
  );
}

export default App;
