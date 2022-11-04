
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
import Alert from './components/Alert';
{/*import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";*/}


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='grey';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
   {/* <Router> */}
    <Navbar mode={mode} toggleMode={ toggleMode }/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes>
        <Route exact path="/about" element={<About/>}/> */}
        {/* <Route exact path="/" element={}/> */}
        <TextForm showAlert={showAlert} heading="Enter your text here to analyze" mode={mode}/>
      {/* </Routes> */}
    
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
