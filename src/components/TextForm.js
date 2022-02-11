import React , {useState} from 'react';

export default function TextForm(props) {
    const handleupbtn = ()=>{
        console.log("You clicked Uppercase button");
        let newtxt = text.toUpperCase();
        setText(newtxt);
        props.showalert("Text Converted to Uppercase" , props.mode === "dark"? "dark" : "info")
    }
    const handlelobtn = ()=>{
        console.log("You clicked Lowercase button");
        let newtxt = text.toLowerCase();
        setText(newtxt);
        props.showalert("Text Converted to Lowercase" , props.mode === "dark"? "dark" : "info")
    }
    const handletext = (event)=>{
        console.log("You changed Text");
        setText(event.target.value);
    }
    const [text, setText] = useState(""); 
//   setText("Enter your value here");
  return <>

    <div className="mb-3" style={{color : props.mode === "light"? "black" : "white"}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control my-3" style={{backgroundColor : props.mode === "light"? "white" : "grey", color : props.mode === "light"? "black" : "white"}} value={text} onChange={handletext} id="mybox" rows="8"></textarea>
        <button className="btn btn-secondary my-2" onClick={handleupbtn}>Uppercase</button>
        <button className="btn btn-secondary my-2 mx-2" onClick={handlelobtn}>Lowercase</button>
    </div>
    <div className="container my-3" style={{color : props.mode === "light"? "black" : "white"}}>
        <p>{text.split(" ").length - 1} Words and {text.length} Letters</p>
        <p>{ 0.008 *text.split(" ").length} Minute to Read</p>
        <h2>PREVIEW</h2>
        <p>{text.length>0? text : "Enter some text in above to preview"}</p>
    </div>
    </>
}
