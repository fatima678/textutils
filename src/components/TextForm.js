import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" +text);
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleloClick= ()=>{
        // console.log("Uppercase was clicked" +text);
        let newText =text.toLowerCase();
        setText(newText);
    }
     const handleClearText= ()=>{
        let newText = "";
        setText(newText);
     }
    const handleOnChange= (event)=>{
        // console.log("On Chnage");
        setText(event.target.value);
    }
const [text, setText] = useState("Enter the text here");

  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}> Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleloClick}> Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearText}> Clear text</button>
    </div>

    <div className='container my-3'>
        <h4>Your text summary</h4>
        <p>{text.split(" ").length} and {text.length} characters</p>
        {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
