// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";

function App() {
  return (
    <>
      <Navbar title="My-App" about="About-us" />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyze" />
        {/* <About/> */}

      </div>

      <About/>
    </>
  );
}

export default App;
