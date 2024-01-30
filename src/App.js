
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
   const  [mode, setmode] = useState("light");
   const  [alert, setAlert] = useState(null);
   const showAlert =(message,type)=>{
    

   }
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
    <Alert alert="This is alert"/>
    
    <div className='container my-3' >
      <TextForm heading='Enter the text to analyze below'/>
      {/* <About/> */}
      {/* <TextForm/> */}
      
      </div>
    </>
  );
}     

export default App;
