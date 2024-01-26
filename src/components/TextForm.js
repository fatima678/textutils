import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" +text);
        let newText =text.toUpperCase();
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
        <button className='btn btn-primary' onClick={handleUpClick}> Convert to Uppercase</button>
    </div>

    <div className='container my-3'>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} and {text.length} characters</p>
    </div>
    </>
  )
}
