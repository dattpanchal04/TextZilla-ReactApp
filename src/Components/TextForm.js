// Also imposr useState hook for make state
import React, {useState} from 'react'

export default function TextForm(props) {

    // Making state
    // const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    // text = "New text";  Wrong way to change the state
    // setText("New Text");   Correct way to change the state

    // Button click function which name is handleUpClick
    const handleUpClick = ()=> {
        // console.log("Uppercase Was Clicked")
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Text converted into uppercase successfully!", "success");
    }
    const handleLowClick = ()=> {
        // console.log("Uppercase Was Clicked")
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Text converted into lowercase successfully!", "success");
    }
    const handleClrClick = ()=> {
        // console.log("Uppercase Was Clicked")
        let newText = ("");
        setText(newText);
        props.showAlert("Text cleared successfully!", "success")
    }
    const handleExtraSpcClick = ()=> {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed successfully!", "success")
    }
    const handleRevClick = ()=> {
        let spl = text.split("");
        let rev = spl.reverse();
        let newText = rev.join("");
        setText(newText)
        props.showAlert("Text has been reversed successfully!", "success");
    }
    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied!", "success");
    }

    const handleOnChange = (event)=> {
        setText(event.target.value);
    }

    return (
        <>
           <div className="container my-5">
               <h1>{props.heading}</h1>
                <div className="mb-3 my-4">
                    {/* OnChange is imporatant beacause we are adding text in textare, withou making OnChange we can not write anything in textarea */}
                <textarea placeholder='Enter text here' value={text} onChange={handleOnChange} className="form-control" style={{backgroundColor: props.mode==='#202124'?'#202124':'light'}} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} type="button" className="btn btn-primary  my-2 mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>Convert To Lowercase</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleClrClick}>Clear Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleExtraSpcClick}>Remove Extra Spaces</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleRevClick}>Reverse Text</button>
                <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-1" onClick={handleCopyClick}>Copy Text</button>
           </div>
           <div className="container">
               <h1>Your Texts Summery</h1>
               <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
               <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
               <h1>Preview</h1>
               <p>{text.length>0?text:"Nothing to preview!"}</p>
           </div>
        </>
    )
}
