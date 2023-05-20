import logo from './logo.svg';
import './App.css';
import { useState } from 'react';






/*

Component will always return the jsx whereas the function will return 
the value or variable

below inside the App component it means reuse the component and dynamically change all
the name at a time


*/

// function App() {
//   const [state, setState] = useState("kalil")
//   return (
//     <div className="App">
//       <Basic 
//       name={state}
//       />
//       <Basic 
//       name={state}
//       />
//       <Basic 
//       name={state}
//       />
//       <Basic 
//       name={state}
//       />

//       <button onClick={()=> setState("New Name from component")}>Change new Name</button>

//     </div>
//   );
// }

/*

Life cycle of the components : 
1. Initialization (states and props)
2. Mounting (Inside the components the operations which is going to happen it will
             mount the some operations)
3. updation - it will update the props and state after mounting 
4. unmounting - components that go away 


useEffect : 
- useEffect is a react hook
syntax :
useEffect(()=>{}, []) -> this is a function with the dependency array



example : 

function Basic({name}){
  
  const [show, setShow] = useState(true);

  //Mounting - if the dependency array is empty it will work or execute only one time
  // but its not empty it will continuously
  useEffect(()=>{
    console.log("I'm Mounted", show)
  }, [show])


  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setShow(!show)}>Change Name</button>
    </div>
  )
}

******** Most important *****************
Need to understand the useState and useEffect - read carefully
....................................................

statefull component : 

component were it contains the state

function App() {
  const [state, setState] = useState("kalil")
  return (
    <div className="App">
      <Basic 
      name={state}
      />
    </div>
  );
}

export default App;

stateless component :

components were doesnot contains the state, even props can be present

function Basic({name}){
  
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setShow(!show)}>Change Name</button>
    </div>
  )
}
..............................................

*/


// export default App;

// function Basic({name}){
  
//   const [show, setShow] = useState(true);

//   //Mounting - if the dependency array is empty it will work or execute only one time
//   // but its not empty it will continuously
//   useEffect(()=>{
//     console.log("I'm Mounted", show)
//   }, [show])


//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={() => setShow(!show)}>Change Name</button>
//     </div>
//   )
// }



/*
Props drilling : you are passing the same data from the components to child
it will give you the similar data from GreatGrandFather to child


Example : 
In this below example we are not getting a data from GreatgrandFather to child,
instead of we are drilling down from GreatGrandFather > GrandFater > Father > Child

you need to pass the data from each cases or drilling towards the end,need to 
pass all the tree cycle to get and pass the data till the end of the tree

cons : 
1. it increases the lines of code if its more than 100 drilling
2. If any error occurs it is very difficult to find it or debugg the error 

-----------------------------------------
state : 
first param uses the variable
second params uses the change of the variable 

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

o/p : 
if you click change state button it will change the name from kalil to kasheef

*/







