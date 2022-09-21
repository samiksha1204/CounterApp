import React, { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0)
  return (
    <div className='App'>
      <header>
        <h1>using state</h1>
        </header>
      <h2>update value{count}</h2> 
      <button onClick={()=>setCount(0)}>reset</button>
      <button onClick={()=>(count>=10 ? "":setCount(count+1))}>increase</button>
      <button onClick={()=>(count<=0 ?"":setCount(count-1))}>decrease</button>
    </div>
  );
}

export default App;
