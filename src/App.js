
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';


function App(){
  const[mode,setMode]=useState('light'); //whwnever dark mode   is enabled or not 
  const[alert,setAlert]=useState(null);
  
 const showAlert= (message, type)=>{
          setAlert({
            msg:message,
            type:type
          })
          setTimeout(()=>{                    // YE BNAYA KI KITNE SEC BAAD YE KHUD SE CHALA JAYE APNE APP 
               setAlert(null)
          },3000)
 } 
 const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")

    }
  }
  return (
    <>
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode}  toggleMode={toggleMode}/>

<Alert alert={alert}></Alert>
{/*<Navbar/>*/}
<div className='container my-3'>

<TextForm showAlert={showAlert} heading="Enter The Text Here" mode={mode}   />

</div>
{ /*<About/> */}
    </>
  );
}

export default App;
