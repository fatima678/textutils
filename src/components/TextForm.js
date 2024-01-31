import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" +text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!", "Successfully")
       
    }
    const handleloClick= ()=>{
        // console.log("Uppercase was clicked" +text);
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!", "Successfully")
    }
     const handleClearText= ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("clear the text!", "Successfully")
     }
    const handleOnChange= (event)=>{
        // console.log("On Chnage"); 
        setText(event.target.value);
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied the text!", "Successfully")
    }
const [text, setText] = useState("Enter the text here");

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white': 'black'}}>
    <h2>{props.heading}</h2>
        <div className="mb-3">
           <textarea className="form-control" value={text}  style={{backgroundColor: props.mode==='dark'?'grey': 'white'}} id="myBox" rows="8" onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}> Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleloClick}> Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearText}> Clear text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy} >  Copy text</button>
        
    </div>

    <div className='container my-3'  style={{color: props.mode==='dark'?'white': 'black'}}>
        <h4>Your text summary</h4>
        <p>{text.split(" ").length} and {text.length} characters</p>
        {/* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>
    </div>
    </>
  )
}
