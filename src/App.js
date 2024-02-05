
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'; 

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  const [btncolor,setbtncolor] = useState('primary');
  const [changeText,setText] = useState('Enable dark mode');
const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type

      })
      setTimeout(()=>{
        setAlert(null)
      },2000)

  }

  const toggleMode = ()=>{
  
    document.body.style.backgroundColor='black'
    setMode('dark')
    showAlert  ("Dark mode is enable","success");
    setbtncolor('dark');
    }

  const toggleMode4 = ()=>{
  
    document.body.style.backgroundColor='#FFFF8F'
    showAlert  ("Yellow mode is enable","success");

    setbtncolor('warning');
    }



  const toggleMode1 = ()=>{
        setMode('light')
    document.body.style.backgroundColor='#E5E4E2'
    showAlert  ("Danger mode is enable","success");
    setbtncolor('secondary')
  
    }
  
  const toggleMode2 = ()=>{
        setMode('light')
    document.body.style.backgroundColor='#00cc00'
    showAlert  ("Green mode is enable","success");
    setbtncolor('success');
  }
  const toggleMode3 = ()=>{
        setMode('light')
    document.body.style.backgroundColor=' #ff0066'
    showAlert  ("Pink mode is enable","success");
    setText('Enable dark mode');
    setbtncolor('dark');
  
    }
  

  const toggleMode5 = ()=>{
        setMode('light')
    document.body.style.backgroundColor='#0000ff'
    showAlert  ("Blue mode is enable","success");
    setbtncolor('info');
  
    }
  return (
    <>
  
<Navbar title="TextUtils" mode={mode} changeText={changeText} toggleMode={toggleMode}  toggleMode1={toggleMode1} toggleMode2={toggleMode2} toggleMode3={toggleMode3} toggleMode5={toggleMode5} toggleMode4={toggleMode4}/>
<Alert alert={alert} />
<div className="container my-3">
  
<TextForm mode={mode} btncolor={btncolor} showAlert={showAlert} heading="TextUtils - Word Counter, Character, Counter, Remove extra spaces"/>
</div>
    </>
  );
}

export default App;
