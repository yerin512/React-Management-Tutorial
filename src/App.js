import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [btnName, setBtnName] = useState("예진");

  return(
    <div className="App">
      <h1>Kossie Coder</h1>
     <Counter click="click1"/>
     <Counter click={btnName}/>
     <Counter />
     <button onClick={()=>{setBtnName(btnName === "예진" ? "예린" :"예진")}}>click</button>
    </div>
  )
  
}

export default App;
