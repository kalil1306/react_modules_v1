import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/*
Props drilling


*/

function App() {
  const [state, setState] = useState("Kalil")
  return (
    <div className="App">
      <GreatGrandFather
      state={state}
      />
    </div>
  );
}

export default App;


function GreatGrandFather({state}){
  return (
    <div>
      GreatGrandFather
      <h1>{state}</h1>
      <GrandFather
      state={state}
      />
    </div>
  )
}

function GrandFather({state}){
  return (
    <div>
      GrandFather
      <h1>{state}</h1>
      <Father
      state={state}
      />
    </div>
  )
}


function Father({state}){
  return (
    <div>
      Father
      <h1>{state}</h1>
      <Child
      state={state}
      />
    </div>
  )
}


function Child({state}){
  return (
    <div>
      Child
      <h1>{state}</h1>
    </div>
  )
}

