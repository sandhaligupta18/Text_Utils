import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }
  const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
  }


  const handleCopy=()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!","success");
  }
  const speakFunction= ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    props.showAlert("Running..","success")
    window.speechSynthesis.speak(msg);
     
     }
  const handleExtraSpaces=()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Removed Extraspaces!","success");
  }
  const handleUpClick1=()=>{
    let newText =text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }
  const [text, setText] = useState('');


  return (

    
    <div style={{color:props.mode === 'dark'?'white':'black'}}>
      
    

    <h2>{props.heading}  </h2>
<div className="mb-3"  >
  
  <textarea className="form-control"  id="myBox" style={{backgroundColor:props.mode === 'dark'?'#212529':'white' , color:props.mode === 'dark'?'white':'black'}} value={text} onChange={handleOnChange} rows="8"></textarea>
</div>
<button className={`btn btn-outline-${props.btncolor} border-2 fw-bold mx-2 my-2 `} onClick={handleUpClick} >Convert to upperCase</button>
<button className={`btn btn-outline-${props.btncolor} border-2 fw-bold mx-2 my-2`} onClick={handleUpClick1} >Convert to lowerCase</button>
<button className={`btn btn-outline-${props.btncolor} border-2 fw-bold mx-2 my-2`} onClick={handleCopy}>CopyText</button>
<button className={`btn btn-outline-${props.btncolor} border-2 fw-bold mx-2 my-2`} onClick={handleExtraSpaces}>ExtraSpaces</button>
<button className={`btn btn-outline-${props.btncolor} border-2 fw-bold mx-2 my-2`} onClick={speakFunction}>speak</button>
<div className="container my-3">
 
  <h1>Your Text summaary </h1>
  <p> {text.split(" ").filter( (element)=>{return element.length!==0} ).length}  and {text.length}</p>
  <p> {0.008*text.split(" ").filter( (element)=>{return element.length!==0} ).length } Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter Something above to preview"}</p>
</div>

    </div>
  )
} 
