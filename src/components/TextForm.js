import React,{useState} from 'react'
export default function TextForm(props) {
    const HandleUPclick=() =>{
        let newText=Text.toUpperCase()
        SetText(newText)
        props.showAlert("Converted to UPPERCASE","success")
    }
    const Handleonchange=(event) =>{
        SetText(event.target.value)
    }
    const HandleCopy=()=>
    {
        console.log("I AM COPY!!!")
        var text=document.getElementById("MyBox")
        text.select()
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("COPIED TO CLIPBOARD!!!!","success")
    }
    const formonclick=() =>
    {
        SetText("")
    }
    const HandleLowclick= ( )=>{
        let newText=Text.toLowerCase()
        SetText(newText)
        props.showAlert("Converted to LOWERCASE","success")
    }
    // document.getElementById("pasteButton").addEventListener('click', async () => {
    //     try {
    //       const text = await navigator.clipboard.readText()
    //       document.querySelector('textarea').value += text;
    //       SetText(text)
    //       console.log('Text pasted.');
    //     } catch (error) {
    //       console.log('Failed to read clipboard');
    //     }
    //  });
    const Cleartext=()=>
    {
        SetText("")
        props.showAlert("Text REMOVED!!!","success")
    }
    const HandleExtraSpaces=()=>
    {
        let newtext=Text.split(/[ ]+/)
        SetText(newtext.join(" "))
        props.showAlert("Extra Spaces REMOVED!!!","success")
    }
    const HandleSpeak=()=>
    {
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
        props.showAlert("SPOKEN!!!","success")
    }
    const [Text, SetText]=useState("Enter text here")
  return (
    <>
    <div className='Container'style={{color: props.Mode==='light'?'black':'white'}}>
        <h1>MODIFY TEXT HERE</h1>
        <div className="mb-3">
            <label htmlFor="MyBox" className="form-label">{props.heading}</label>
            <button id="pasteButton">✔ </button>
            <textarea className="form-control" id="MyBox" rows="8" value={Text} style={{backgroundColor: props.Mode==='light'?'white':'#212120',color: props.Mode==='light'?'black':'white'}} onChange={Handleonchange} onClick={formonclick}></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleUPclick}>Convert to Uppercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={HandleLowclick}>Convert to Lowercase</button>
        <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={Text.length===0} className="btn btn-warning mx-1 my-1" color="white" onClick={HandleCopy}>Copy Text</button>
        <button disabled={Text.length===0} className="btn btn-success mx-1 my-1" onClick={HandleSpeak}>Speak</button>
        <button disabled={Text.length===0} className="btn btn-danger mx-1 my-1" onClick={Cleartext}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.Mode==='light'?'black':'white'}}>
            <h1 > SUMMARY</h1>
            <p>
                {Text.split(" ").filter((element)=>{return element.length!==0}).length} words {Text.length} characters.
            </p>
            <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} Minutess read.</p>
            <h2> Preview</h2>
            <p>{Text.length>0?Text:"Enter Text to generate a Preview."}</p>
    </div>
    </>
  )
}
