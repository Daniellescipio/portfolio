import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "./general/ThemeConext"

import Home from "./components/Home"
import {Routes, Route} from 'react-router-dom'
import Resume from "./components/Resume"
import BuildAChar from "./components/BuildAChar"
import Writing from "./components/Writing"
import Games from "./components/Games"
import Animations from "./components/Animations"
import Game from "./components/games/Game"
import SentenceBuilder from "./components/games/sentenceBuilder/SentenceBuilder"
import Uno from "./components/games/uno/Uno"
import notes from './general/notes'
import Blog from "./components/Blog"


function App() {
  const {theme, setTheme, location} = useContext(ThemeContext)
  const [noThemeText, setNoThemeText] = useState(false)
  const [timeOutId, setTimeOutId] = useState()
  useEffect(()=>{
     if(noThemeText){
        const tOId = setTimeout(()=>{
      setNoThemeText(false)
    }, 3000)
    setTimeOutId(tOId)

 }

    return ()=>{
      clearTimeout(timeOutId)
    }
  },[noThemeText])
  return (
    <div className={"App "+theme}>
      {location !=="game" ?
      <label className={"switch "}>
        <input type="checkbox" checked={theme==="dark"?true:false} onChange ={()=>theme==="dark" ? setTheme("light") : setTheme("dark")}/>
        <span className={"slider round "+theme}></span>
      </label>  
      :
      <>
        <span 
          onMouseEnter={()=>setNoThemeText("Sorry! Dark mode is not supported here yet!")}
          onTouchStart={()=>setNoThemeText("Sorry! Dark mode is not supported here yet!")} 
          className="material-symbols-outlined noSupport">
          help
        </span>
        {noThemeText && <p class = "noSupportText">{noThemeText}</p>}
      </>
    
      
      // <p className={"noSupport"}>Sorry! Games aren't supprted in <b>Dark Mode</b> yet!</p>
      }
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path = "/resume" element={<Resume/>}></Route>
        <Route path = "/games" element={<Games/>}></Route>
        <Route path = "/buildAChar" element={<BuildAChar/>}></Route>
        <Route path = "/javascriptblog" element={<Writing/>}></Route>
        <Route path = "/animations" element={<Animations/>}></Route>  
        {/* game routes */}
        <Route path = "/games/wordleish" element={<Game name = 'Wordle' src="https://daniellescipio.github.io/WordGame/"  note = {notes.wordle} notReady={true}/>}></Route>
        <Route path = "/games/snake" element={<Game name = 'Snake' src="https://daniellescipio.github.io/snake/" note = {notes.snake} notReady={false}/>}></Route>
        <Route path= "/games/memorycircles" element={<Game name = 'Memorey Circles' src="https://daniellescipio.github.io/memoryGame--colorCircles/" note = {notes.memoryCircles} notReady={true}/>}/>
        <Route path = "/games/minesweeper" element={<Game name = 'Minesweeper' src="https://daniellescipio.github.io/minesweeper/" note = {notes.minesweeper} notReady={false}/>}></Route>
        <Route path = "/games/sentencebuilder" element={<SentenceBuilder note = {notes.sentenceBuilder} />}></Route>
          <Route path = "/games/uno" element={<Uno note = {notes.sentenceBuilder}/>}></Route>
      </Routes>    
    </div>
  )
}

export default App
