import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/*
Props drilling : you are passing the same data from the components to child
it will give you the similar data from GreatGrandFather to child


Example : 
In this below example we are not getting a data from GreatgrandFather to child,
instead of we are drilling down from GreatGrandFather > GrandFater > Father > Child

you need to pass the data from each cases or drilling towards the end,need to 
pass all the tree cycle to get and pass the data till the end of the tree

-----------------------------------------
state : 
first param uses the variable
second params uses the change of the variable 

*/

function App() {
  const [state, setState] = useState("Kalil")
  return (
    <div className="App">
      <GreatGrandFather
      state={state}
      setState = {setState}
      />
    </div>
  );
}

export default App;


function GreatGrandFather({state, setState}){
  return (
    <div>
      GreatGrandFather
      <h1>{state}</h1>
      <GrandFather
      state={state}
      setState = {setState}
      />
    </div>
  )
}

function GrandFather({state, setState}){
  return (
    <div>
      GrandFather
      <h1>{state}</h1>
      <Father
      state={state}
      setState = {setState}
      />
    </div>
  )
}


function Father({state, setState}){
  return (
    <div>
      Father
      <h1>{state}</h1>
      <Child
      state={state}
      setState = {setState}
      />
    </div>
  )
}


function Child({state, setState}){
  return (
    <div>
      Child
      <h1>{state}</h1>
      <button onClick={() => setState("Kasheef")}>Change State</button>
    </div>
  )
}

