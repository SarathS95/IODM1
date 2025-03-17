import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsDisplayer from './components/PropsDisplayer'
import {City} from './components/City'
import {Pet} from './components/Pet'
import {Greetings} from './components/Greetings'


function Welcome(props) { // custom Welcome component
  return (
    <div className="Welcome">
      {/* if the 'name' prop exists, render it on the screen */}
      <h3>Welcome {props.name}!</h3> 
      {/* if this component has children, render them here */}
      {props.children} 
    </div>
  )
 }

//  function Welcome(props) {
//   return (
//     <div className="componentBox">
//       <h3>Welcome {props.name}!</h3>
//     </div>    
//   )
//  }

function ExampleComponent() {
 
  return (
      <div className="ExampleComponent componentBox">
          <h1>My Example Component</h1>
          <p>My first React component!</p>
      </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const invalidJSX= 
  <>
  <p>paragraph 1</p>
  <p> paragraph 2</p>;
  </>

const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
const spideyJSX = (<div>
   <h3>{spiderman.name}</h3>
   <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
</div>);

const spideyJSXFragment = (<>
  <h3>{spiderman.name}</h3>
  <blockquote>{spiderman.catchPhrase}</blockquote>
  <cite>{spiderman.alterEgo}</cite>
  </>); 

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
 {/* Renders the component with no props */}
 <PropsDisplayer />
 <PropsDisplayer prop1="first" prop2="second" prop3={3}/>
      <ExampleComponent/>

      <Welcome name="students">
    <p>Children of Welcome</p>
 </Welcome>
 <Greetings />
<Greetings prop1="Hello" name="Sarath" children ={3}/>
<Greetings>
  <p>Message recieved</p>
</Greetings>
 <Pet />

 <City name="Sydney" />

 <City name="Newcastle"> 
    <div>Newcastle is a harbour city in the Australian state 
of New South Wales.</div>
    <div><strong>Population:</strong> 322,278 (2016)</div>
 </City>


      {spideyJSX}
      {spideyJSXFragment}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
