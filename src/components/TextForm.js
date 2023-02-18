import React , {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!!", "success");
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!!", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text is Cleared!!", "success");
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      props.showAlert("Text to Speech is Converted!!", "success");
    }

    const handleCopy = ()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to ClipBoard!!", "success");
    }

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space is Removed!!", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const[text ,setText] = useState('')

//   text="new  text" ;//wron way to change the state
//   setText("new text"); //correct way to chnage the state
  return (
    <>
    <div className="container" style={{color :props.mode==='dark'?'white':'#042743'}}>
        <h2 className='mb-3'>{props.heading}</h2>
        <div className="mb-3">
        
        <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'#13466e':'white',
        color :props.mode==='dark'?'white':'#042743'}} 
        id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={speak}>Speak</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color :props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} miniutes to read </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  );
}
