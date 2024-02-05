
// import { useState } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// // import { Route, Router } from 'react-router-dom';
// import About from './components/About';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Routes,
// }   from "react-router-dom";


// function App() {
//    const  [mode, setmode] = useState("light");
//    const  [alert, setAlert] = useState(null);
//    const showAlert =(message,type)=>{
//     setAlert({
//       msg:message,
//       type:type
//     }
      
//     )
//     setTimeout(() => {
//       setAlert(null);
//     },1500);

//    }
//    const toggleMode = ()=>{
//       if(mode==='light'){
//         setmode('dark') 
//         document.body.style.backgroundColor ='grey';
//         showAlert("dark mode has been enable", "Succcess");
//         document.title = "TextUtils - Dark mode"

//       }
//       else{
//         setmode('light')
//         document.body.style.backgroundColor ='white';
//         showAlert("light mode has been enable", "Succcess");
//         document.title = "TextUtils - Light mode"
//       }
//    }

   
//   return (
//     <>
//     <Router>
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
//     {/* <About/> */}
//     <Alert alert={alert}/>
    
//     <div className='container my-3' >
     
//         <Routes>
//           <Route path='About/'>
//           {/* <About/> */}
//           </Route>
//           <Route path='/'>
//           <TextForm showAlert={showAlert} heading='Enter the text to analyze below'/>
//           </Route>
//           </Routes>
        
  
//        </div>
//        </Router> 
    
//     </>
//   );
// }     

// export default App;


import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'TextUtils - Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TextUtils - Light mode';
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className='container my-3'>
          <Routes>
             {/* users---> component 1
            usersHome --- component 2  with exact word you can go to the exact url  */}
            <Route  exact path='about' element={<About />} />
            <Route exact  path='/' element={<TextForm showAlert={showAlert} heading='Enter the text to analyze below' />} />
          </Routes>
       
      </div>
    </Router>
  );
}

export default App;
