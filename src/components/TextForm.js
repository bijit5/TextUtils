import React, { useState } from 'react';


export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked:"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }
  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked:"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }
  const handleOnChange =(event) =>{
    //console.log("On change");
    setText(event.target.value);
  }
  const handleClearClick = ()=>{
    //console.log("Uppercase was clicked:"+ text);
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared","success");
  }
  const handleCopy = ()=>{
    let text =document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied","success");
  }
  const handleExtraSpaces = ()=>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }



  const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary Is here</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length } minutes to read on average</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter text in the above box to preview"}</p>
    </div>
    </>
  )
}
