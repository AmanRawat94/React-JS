// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import { useState } from "react";
import Alert from "./component/Alert";

function App() {
  const [mode, setMode] = useState('light'); //checks whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
        setAlert(null);
    },2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode is enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white"
      showAlert("Dark mode is disabled", "success");
    }
  }  
  return (
    <>
      <Navbar title="My-App" about="About-us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>

      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}

      </div>

      {/* <About/> */}
    </>
  );
}

export default App;
