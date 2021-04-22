import './App.css';
import React, { useState } from 'react';


function App() {
  const [name, setName] = useState('yerin');

  return (
    <div className="App">

      <button onClick={() => {
        setName(name === "yerin" ? "Ahn" : "yerin")}}>Chane Name</button>
      <span>{name}</span>
    
    </div>
  );
}

export default App;
