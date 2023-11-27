// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light'); //checks whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"

    }
  }  
  return (
    <>
      <Navbar title="My-App" about="About-us" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}

      </div>

      {/* <About/> */}
    </>
  );
}

export default App;
