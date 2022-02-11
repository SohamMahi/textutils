import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React , {useState} from 'react';
import Alerts from "./components/Alerts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setmymode] = useState('light');
  const togglemode = ()=>{
    if(mode === "light"){
      setmymode("dark")
      document.body.style.backgroundColor = "#1f2124";
      showalert("Dark mode is Set!", "dark");
    }
    else{
      setmymode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode is Set!", "info");
    }
  }

  const [alert, setmyalert] = useState(null)

  const showalert = (message,type)=>{
      setmyalert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setmyalert(null);
      }, 2000);
  }
  return (
    <>
    <Router>
      <Navbar title="TEXT" about = "About Text" mode={mode} toggle ={togglemode} />
      <Alerts alert={alert}/>
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showalert = {showalert} heading="Enter the text to analyze" mode={mode} heading2="Enter the text"/>
          </Route>
      </Switch>
      </div>
    </Router> 
    </>
  );
}

export default App;
