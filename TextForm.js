// type rfc 

import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter text here"); 

    const handleUpClick = ()=> {
        // console.log("Uppercase was clicked for: " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleULoClick = ()=> {
        // console.log("Uppercase was clicked for: " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=> {
        // console.log("on change");
        setText(event.target.value);
    }

  return (
    <>
    <div className="container">
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleULoClick} >Convert to Lowercase</button>
    </div>

    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
