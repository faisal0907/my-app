import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let title = "TextUtilis";
  const [mode, setMode] = useState("light");
  // const toggleMode = () =>{

  //   if (Mode === 'light'){
  //     setMode('dark')
  //     console.log('o bai light')
  //   }
  //   else{
  //     setMode('Light')
  //     console.log('o bai dark')
  //   }
  // }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
    } else {
      setMode("light");
      document.body.style.background = "white";

      // setInterval(() => {
      //   document.title = "Textutlis is very good"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Textutilis now"
      // }, 1500);
    }
  };

  return (
    <>
      <Router>
        <Navbar exact title={title} mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/about" element = {<About />}>   
          </Route>
          <Route exact path="/" element = {<Textform mode={mode} />}>
          </Route>
          </Routes>
      </Router>

      {/* <About/> */}
    </>
  );
}

export default App;
