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

    const handleCopy = ()=>{
        console.log("i am copy");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white', color: props.mode==='dark' ? 'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleULoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
