import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextBox from './Components/TextBox';
import React, { useState } from 'react';
import { BrowserRouter,
  Route,
  Routes
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) =>{
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
  const toggleMode = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#606060"
      showAlert("success","DarkMode Enabled!")
      // document.title = "TextUtils - Home (Dark)"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("success","DarkMode Disabled!")
      // document.title = "TextUtils - Home"
    }
  }

  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route exact path="/" element={<TextBox heading="Enter Your Text Here" mode={mode} showAlert={showAlert}/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
