import './App.css';
import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return(
    <div className="App">
      <h1>Kossie Coder</h1>
     <Counter />
     <Counter />
     <Counter />
    </div>
  )
  
}

export default App;
