import React, { useState } from "react";

export default function Textform(props) {
  const [myText, setText] = useState("");
  let upperUpClick = () => {
    console.log("upper is clicked");
    let newtext = myText.toUpperCase();
    setText(newtext);
  };

  let upperLowClick = () => {
    console.log("upper is clicked");
    let newtext = myText.toLowerCase();
    setText(newtext);
  };

  let clearText = () =>{
    setText('');
  }

  let upperLevel = (event) => {
    setText(event.target.value);
  };

  
  return (
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white':'black'}}>
      <div className="mb-3">
        <h2>Type the text to analyze</h2>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={upperLevel}
          style = {{backgroundColor: props.mode === 'dark'? 'grey':'white',
          color: props.mode === 'dark'? 'white':'black'}}
          value={myText}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={upperUpClick}>
          UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={upperLowClick}>
          UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={clearText}>
          Clear
        </button>
      </div>
      <h2>Summary</h2>
      <p>The text has {myText.split('.').length} Sentences {myText.split(' ').length} words and {myText.length} characters and required {0.008 * myText.length} times</p>
      <h2>Preview</h2>
      <p>{myText.length>0?myText: 'Enter your Text to preview'}</p>
    </div>
  );
}
