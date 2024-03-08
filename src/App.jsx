import { useContext } from "react"
import { ThemeContext } from "./ThemeConext"
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


function App() {
  const {theme, setTheme, location} = useContext(ThemeContext)
  return (
    <div className={"App "+theme}>
      {location !=="game" ?
      <label className={"switch "}>
        <input type="checkbox" checked={theme==="dark"?true:false} onChange ={()=>theme==="dark" ? setTheme("light") : setTheme("dark")}/>
        <span className={"slider round "+theme}></span>
      </label>  
      :
      <p className={"noSupport"}>Sorry! Games aren't supprted in <b>Dark Mode</b> yet!</p>
      }
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path = "/resume" element={<Resume/>}></Route>
        <Route path = "/games" element={<Games/>}></Route>
        <Route path = "/buildAChar" element={<BuildAChar/>}></Route>
        <Route path = "/writing" element={<Writing/>}></Route>
        <Route path = "/animations" element={<Animations/>}></Route>  
        {/* game routes */}
        <Route path = "/games/wordleish" element={<Game src="https://daniellescipio.github.io/WordGame/"  notReady={false}/>}></Route>
        <Route path = "/games/snake" element={<Game src="https://daniellescipio.github.io/snake/" notReady={false}/>}></Route>
        <Route path= "/games/memorycircles" element={<Game src="https://daniellescipio.github.io/memoryGame--colorCircles/" notReady={true}/>}/>
        <Route path = "/games/minesweeper" element={<Game src="https://daniellescipio.github.io/minesweeper/" notReady={false}/>}></Route>
        <Route path = "/games/sentencebuilder" element={<SentenceBuilder/>}></Route>
        <Route path = "/games/uno" element={<Uno/>}></Route>
      </Routes>    
    </div>
  )
}

export default App
