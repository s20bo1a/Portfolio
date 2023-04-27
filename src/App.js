import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import React, { useContext } from "react";
import "./App.css";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";

const App=()=> {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App"
    style={{
      background :darkMode? 'black':'',
      color:darkMode?'white':''

    }} 
    
    
    
    >
      <div>
      <Navbar/>
      <br/>
      <br/>
      <Intro/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
