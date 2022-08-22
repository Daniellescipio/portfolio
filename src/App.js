import { useContext, useState, useEffect } from 'react';
import './welcome.css';
import Buddy from "./buddy"
import Home from "./main_pages/home"
import { ThemeContext } from './themeContext';
import Resume from "./main_pages/resume"
import GamesHomePage from "./main_pages/gamesHomePage"
import WritingHomePage from "./main_pages/writingHomepage"
import MiscPage from "./main_pages/misc"
import {Routes, Route} from "react-router-dom"
import Animation from './miscPages/animations';
//import gsap from 'gsap';

function App() {
  const {theme, setTheme} = useContext(ThemeContext)
  const [open, setOpen]= useState(false)
   const enterTheme = theme === "dark" ? "light": "dark"
   function handleChange(){
    theme==="dark" ? setTheme("light") : setTheme("dark")
  } 

  return (
    <div className={"App "+theme}>
      <label className={"switch "+ theme}>
        <input type="checkbox" checked={theme==="dark"?true:false} onChange ={handleChange}/>
        <span className={"slider round "+theme}></span>
        <p>Toggle {theme==="dark"? "DARK":"LIGHT"} mode off!{`(This will turn ${theme==="dark"? "LIGHT":"DARK"} mode on )`}</p>
      </label>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path = "/resume" element={<Resume/>}></Route>
          <Route path = "/games" element={<GamesHomePage />}></Route>
          <Route path = "/writing-Samples" element={<WritingHomePage />}></Route>
          <Route path = "/misc" element={<MiscPage />}></Route>  
          <Route path = "/animations" element={<Animation/>}></Route>       
        </Routes> 

    </div>
  );
}

export default App;
