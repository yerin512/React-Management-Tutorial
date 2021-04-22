import {useState} from 'react';

export default function Counter(props){
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const clickString = props.click ? props.click : 'no props';
  //const clickString = props.click || 'no props';

  return(
    <div>
      <button onClick={increment}>{clickString} {count}</button>
    </div>
  )
    
}

