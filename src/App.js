import { useContext, useState, useEffect } from 'react';
import './welcome.css';
import './animation.css';

import Home from "./main_pages/home"
import { ThemeContext } from './themeContext';
import Resume from "./main_pages/resume"
import BuildAChar from "./main_pages/buildAChar"
import WritingHomePage from "./main_pages/writingHomepage"
import Animations from "./main_pages/animations"
import {Routes, Route} from "react-router-dom"
import { BuddyProvider } from './BuddyContext';
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)

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
          <BuddyProvider>
            <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path = "/resume" element={<Resume/>}></Route>
            <Route path = "/buildAChar" element={<BuildAChar />}></Route>
            <Route path = "/writing-Samples" element={<WritingHomePage />}></Route>
            <Route path = "/animations" element={<Animations />}></Route>  
            </Routes> 
          </BuddyProvider>      

    </div>
  );
}

export default App;
