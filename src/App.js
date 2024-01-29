
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
   const  [mode, setmode] = useState("light");
   const toggleMode = ()=>{
      if(mode==='light'){
        setmode('dark') 
        document.body.style.backgroundColor ='grey'

      }
      else{
        setmode('light')
        document.body.style.backgroundColor ='white'
      }
   }

   
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    
    <div className='container my-3' >
      <TextForm heading='Enter the text to analyze below'/>
      {/* <About/> */}
      {/* <TextForm/> */}
      
      </div>
    </>
  );
}     

export default App;
