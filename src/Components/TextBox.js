import React, { useState } from 'react'

export default function TextBox(props) {

    const [text, setText] = useState("")

    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        // console.log("Uppecase was Clicked!")
        props.showAlert("success","Converted to Uppercase!")
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        // console.log("Lowercase was Clicked!")
        props.showAlert("success","Converted to Lowercase!")
    }
    const handleRemSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        // console.log("Remove Extra Spaces was Clicked!")
        props.showAlert("success","Removed Extra Spaces!")
    }
    const handleTrimBlank = ()=>{
        let newText = text.trim()
        setText(newText)
        // console.log("Trim Blanks was Clicked!")
        props.showAlert("success","Trimmed Blanks!")
    }
    const handleCopyText = ()=>{
        navigator.clipboard.writeText(text)
        // console.log("Copy Text was Clicked!")
        props.showAlert("success","Text copied to Clipboard!")
    }
    const handleClearText = ()=>{
        let newText = ""
        setText(newText)
        // console.log("ClearText was Clicked!")
        props.showAlert("success","Text Cleared!")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

  return (
    <>
    <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="TextBox" value={text} style={{backgroundColor: props.mode === 'light'?'white':'#606060', color: props.mode === 'light'?'black':'white'}} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button type="button" disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
        <button type="button" disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} mx-1 my-1`} onClick={handleRemSpace}>Remove Extra Spaces</button>
        <button type="button" disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} mx-1 my-1`} onClick={handleTrimBlank}>Trim Blanks</button>
        <button type="button" disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} mx-1 my-1`} onClick={handleCopyText}>Copy Text</button>
        <button type="button" disabled={text.length===0} className={`btn btn-outline-${props.mode==='light'?'secondary':'light'} mx-1 my-1`} onClick={handleClearText}>Clear Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode === 'light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter(function(n) { return n !== '' }).length} words and {text.length} characters.</p>
        <p>You can read this in {0.008 * text.split(' ').filter(function(n) { return n !== '' }).length} minutes.</p>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  )
}
