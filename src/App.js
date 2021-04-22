import logo from './logo.svg';
import './App.css';

function App() {

  const onSubmit = ()=> alert('hello');
  const onKeyUp = (event) => {
    if(event.keyCode === 13){
      onSubmit();
    }
  };

  return (
    <div className="App">
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
