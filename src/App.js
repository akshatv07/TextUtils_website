import { useState } from "react";
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
   const [Mode,setMode]=useState("light")
   const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert(
      {msg:message,
        type:type})
        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }
   const togglemode=()=>
   {
      if(Mode==="light")
      {
        setMode('dark')
        document.body.style.backgroundColor="#171716";
        showAlert("Dark Mode has been enabled!","success")
      }
      else 
      {
        setMode('light')
        document.body.style.backgroundColor="white";
        showAlert("Light Mode has been enabled!","success")

      }
        
   }
   
  return (
    <>
    <Router>
<Navbar title='TextUtils' about='Top 3 Moments of 2022' Mode={Mode} togglemode={togglemode}/>
<div className="container my-3">
  <Routes>
  <Route exact path="/about" element={<About Mode={Mode}/> }/>
  <Route exact path="/" element={<TextForm heading="Paste Text from Clipboard?" Mode={Mode} showAlert={showAlert}/> }/>
  </Routes>
  
</div>
</Router>
<Alert Alert={alert}/>
    </>
  );
}

export default App;
