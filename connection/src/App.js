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

import ConditionalHook from './Components/HOOKS/ConditionalHook';
import HookMouse from './Components/HOOKS/HookMouse';
import HookContainer from './Components/HOOKS/HookContainer';

//if we remove the comment and run ew see the default value is replace by other 
function App() {
  return (
    <div className="App">

<HookContainer/>

    </div>
  );
}

export default App;
