import {useNavigate } from "react-router-dom"
import Nav from "./Nav"
import Snake from "./games/Game"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../ThemeConext"
import UnoCard from "./games/uno/UnoCard"
import circles from "./games/gameAssets/colorCircles.png"
import mine from "./games/gameAssets/minesweeper.png"
import sb from "./games/gameAssets/sentenceBuilder.png"
import snake from "./games/gameAssets/snake.png"
import wordle from "./games/gameAssets/wordle.png"

function Games() {
  const {setLocation, setTheme} = useContext(ThemeContext)
  const [travel, setTravel] = useState()
  const navigate = useNavigate()
  useEffect(()=>{
    setLocation("game")
    setTheme("light")
    navigate(travel)
  },[travel])
 
    return (
      <>
        <Nav/>
        <h1>Let's play!</h1>
        <p className = "gameMessage">I love to have fun and there's been something special about creating all of my childhood games(and more recent). I hope you have as much fun playing as I had creating<span class="material-symbols-outlined redColor"> favorite</span><span class="material-symbols-outlined redColor"> favorite</span></p>
        <div className="gameGrid" >
          <div onClick = {()=>setTravel("/games/snake")} className = "gameLink">
            <img src = {snake} alt = ""/>
            <p>Snake</p>
          </div>
          <div onClick = {()=>setTravel("/games/wordleish")} className = "gameLink">
            <img src = {wordle} alt = ""/>
            <p>Wordle-ish</p>
          </div>
          <div onClick = {()=>setTravel("/games/memorycircles")} className = "gameLink">
            <img src = {circles} alt = ""/>
            <p>Memory Circles</p>
          </div>
          <div onClick = {()=>setTravel("/games/minesweeper")} className = "gameLink">
            <img src = {mine} alt = ""/>
            <p>MineSweeper</p>
          </div>
          <div onClick = {()=>setTravel("/games/sentencebuilder")} className = "gameLink">
            <img src = {sb} alt = ""/>
            <p>Sentence Builder</p>
          </div>
          <div onClick = {()=>setTravel("/games/uno")} className = "gameLink">
            {/* <img src = {""} alt = ""/> */}
            <h1>Coming Soon!</h1>
            <p>Uno</p>
          </div>
          {/* <UnoCard num={1} color={"green"}/> */}
        </div>
      </>
    )
  }
  
  export default Games