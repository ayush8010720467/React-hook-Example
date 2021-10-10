import logo from './logo.svg';
import './App.css';
import {Example,ExampleClass} from './Example';
import { useState } from 'react';

function App() {
  const [showClass,updateShowClass] = useState(true);
  const [showFunc,updateShowFunc] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{updateShowClass(!showClass)}}>ClassShow</button>
        <button onClick={()=>{updateShowFunc(!showFunc)}}>functionShow</button>
        {showFunc?<Example></Example>:<></>}
        {showClass?<ExampleClass></ExampleClass>:<></>}
      </header>
    </div>
  );
}

export default App;
