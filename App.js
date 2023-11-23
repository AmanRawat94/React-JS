import logo from './logo.svg';
import './App.css';

let name = "aman";
function App() {
  return (

    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    
    <div className="test">Testing</div>

    <h1>Hello {name} </h1>

     {/* <div className="App">
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
         Learn React with Aman
         </a>
       </header>
     </div> */}

    </>
  );
}

export default App;
