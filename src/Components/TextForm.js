import React,{useState} from 'react' // yhan humne state ko bhi import kar lenge 

export default function TextForm(props) {

const handleUpClick =()=>{
let newText = Text.toUpperCase(); // yhan humne purane text  ko upper case main convert karwa kar usko nye variable main store karwa liya aur setText se uskii value update karwa di 
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
    <div> 
        <h1>{props.heading}</h1>
        <div className="mb-3">
         
        <textarea className="form-control" value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>   {/*yhan humne textarea ki value set kar di with the help of state  */}
        </div>                                          {/* jab bhi hum kuch change karege to humhara handleOnChange function run hoga  */}
        <button className='btn btn-primary' onClick={handleUpClick}>Convert To Uppercase</button> {/*yhan hum chahte h ki jab bhi hum click kare to handleUpclick function chale     */}

    </div> 
  )
}
