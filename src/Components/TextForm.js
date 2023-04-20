import React,{useState} from 'react' // yhan humne state ko bhi import kar lenge 

export default function TextForm(props) {

const handleUpClick =()=>{
let newText = Text.toUpperCase(); // yhan humne purane text  ko upper case main convert karwa kar usko nye variable main store karwa liya aur setText se uskii value update karwa di 
setText(newText)
props.showAlert("Convertes to uppercase!","Success")
}
const handleLowClick =()=>{
  let newText=Text.toLocaleLowerCase();
  setText(newText)
  props.showAlert("Convertes to lowercase!","Success")

}

const handleClearClick =()=>{
  let newText =" "
  setText(newText)
}

const handleOnChange=(event)=>{  // on change method humko hmesha ek event provide karwata h jise ki humko apne text area main kuch bhi add kar skte h 
    setText(event.target.value)   // event.target .value se pure text ki value main jo bhi add kar rahe wo setText main add hota ja rha 
    
}

    const[Text,setText]=useState("Enter text here") // ye sysntax h state ka , state ka work maily auto update karwana hota h aur humne yhan pr text ki 
 //  default value fix karwa di h ab agr hum kabhi text ki value ko khud se update karwana chate h to uske leye ...
//   text="new text " // ye worng way h
//   setText("new text ")// correct way to change the state 
  return (
    <>
    <div className='container'style={{color:props.mode==="dark"?"white":"black"}}> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
         
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==="dark"?"gray":"white",color:props.mode==="dark"?"white":"black"}}></textarea>  {/*yhan humne textarea ki value set kar di with the help of state */}
        </div>                                          {/* jab bhi hum kuch change karege to humhara handleOnChange function run hoga  */}
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert To Uppercase</button> {/*yhan hum chahte h ki jab bhi hum click kare to handleUpclick function chale     */}
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert To Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>

    </div>
    <div className='container my-3'style={{color:props.mode==="dark"?"white":"black"}}>
      <h2>Your Text Summary</h2>
      <p>{Text.split(" ").length } words ,{Text.length} characters</p>
      <p>{0.008 * Text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"enter somethig in the textbox to above preview to here"}</p>
    </div>
    </> 
  )
}
