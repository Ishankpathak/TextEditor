import React, { useState } from 'react'
import '../App.css'

const TextForm = ({heading}) => {
    const [text , setText] = useState(" ")
    
    const handleUpClick = ()=>{       //to change in upper case
        // console.log("Upper")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event)=>{   //to type in a input
        setText(event.target.value)
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const cleartext = ()=>{
        setText('')
    }
    const Copy =()=>{
       var copyText = document.getElementById("myBox")
       copyText.select();
       navigator.clipboard.writeText(copyText.value);
       alert("copied the text: "+ copyText.value) 
    }
    const ExtraSpace=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(' '))
    }
    
  return (
    <>
      <div className="container">
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{heading}</label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}> </textarea>
        </div>
        <div className='button'>
        <button className='btn btn-success' onClick={handleUpClick}>ToUpperCase</button>
        <button className='btn btn-success' onClick={handleDownClick}>ToLowerCase</button>
        <button className='btn btn-success' onClick={ExtraSpace}>Remove Extra Space</button>
        <button className='btn btn-success' onClick={Copy}>Copy Text</button>
        <button className='btn btn-danger' style={{color:'black' , fontSize:'17px' , fontWeight:'bold' }} onClick={cleartext}>Clear Text</button>
        </div>

        <div className='container my-3 Preview'>
              <h1>Text Summary</h1>
              <p>{text.split(" ").length} words and {text.split("").length} characters</p>
              <p>Average Reading Time {text.split(" ").length * 0.003} Minutes</p>
              <h3>Preview:-</h3>
              <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default TextForm


