import './App.css';
import React, { useState } from 'react';


function App() {
  const onSubmit = (event)=> {
    event.preventDefault();
    console.log(userName, password);
  };
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
   <form onSubmit={onSubmit}>
    <div className="App">
      <input 
      placeholder="Username"
      value={userName}
      onChange={(e)=>setUserName(e.target.value)}
      /><br />
      <input 
      placeholder ="Password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      /><br />
      <button type="submit">Login</button>
    </div>
    </form>  
  );
}

export default App;
