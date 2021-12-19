// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import Footer from './Components/Footer';

// Import react-router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import About from './Components/About.js';

// let name = "<b>Datt Panchal</b>" This is wrong
function App() {

  // Default value is light color
  const [mode, setMode] = useState('light')  // Wheter dark mode is enable or not

  // For alert
  const [alert, setAlert] = useState(null);

  const showAlert = (meassage, type) =>{
      // Now alert is object, before object he is null
      setAlert({
        msg: meassage,
        type: type
      });
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  // for dark mode
  const toggleMode = ()=>{
      if(mode === "light"){
        setMode('dark');
        document.getElementById('text').innerText = "Light Mode";
        document.body.style.backgroundColor = '#202124';
        document.body.style.color = 'white';
        showAlert("Dark mode has been enable", "success");
      }
      else{
        setMode('light');
        document.getElementById('text').innerText = "Dark Mode"
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#202124';
        showAlert("Light mode has been enable", "success");
      }
  }
  return (

    // This HTML Code is called JSX. JSX is one type of HTML with some changes like  repace className to classNameName, for to htmlFor, tab to tabIndex etc. And to write javascript in html code you can add curly brackets( {} ).

    // But this function only return 1 block

    // Close tag is very important
    // Bable compailes javascript code
    <>

    <Router>
      {/* First Component - Navbar */}
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      {/* Second component - Alert */}
      <Alert alert={alert} />
      <Switch>
          {/* To write the exact, we are saying to react for exact position or path of component. But we not declare exact, the react giving partial path of component */}
          {/* /user --> Component 1
          /user/home --> Component 2 */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading="Enter The Text For Analyze Below!" mode={mode} />
            <Footer />
          </Route>
      </Switch>
      {/* Third component - TextArea */}
      {/* <TextForm showAlert={showAlert} heading="Enter the text for analyze below!" mode={mode} /> */}
      {/* <About /> */}
    
    </Router>
    </>
  );
}

export default App;
