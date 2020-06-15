import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './Components/PostList';
import Fetch from './Components/Fetch';
import PostForm from './Components/Postform';
import ComponentC from './Components/ComponentC';
// import { UserProvider } from './UserContext';
// import CounterComponent from './Components/HOOKS/CounterComponent';
// import UseStateCounter from './Components/HOOKS/UseStateCounter';
import PrevCounter from './Components/HOOKS/PrevCounter';
import HookInputObject from './Components/HOOKS/HookInputObject';
import HookArray from './Components/HOOKS/HookArray';
import HookUseeffect from './Components/HOOKS/HookUseeffect';
//if we remove the comment and run ew see the default value is replace by other 
function App() {
  return (
    <div className="App">

    
<HookUseeffect/>
    </div>
  );
}

export default App;
