import './games.css'
import { ThemeContext } from '../../general/ThemeConext'
import Nav from '../Nav'
import { useContext, useEffect, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Game({name, src, notReady, note}) {
  const [infoTab, setInfotab] = useState("about")
  const [info, setInfo] = useState(false)
  const {setLocation, setTheme} = useContext(ThemeContext)
  const container = useRef()
  useEffect(()=>{
    setLocation("game")
    setTheme("light")
  },[])
  useGSAP(()=>{
    gsap.set(".infoButton",{zIndex:3} )
  },{dependencies:[infoTab], scope:container, revertOnUpdate:true})
  const width = screen.width > 992 ? "100%" : screen.width-20
  window.addEventListener("click", (e)=>{
    console.log("lll")
})
  const gameClass = name.split(" ").join("").toLowerCase() 
    return (
      <>
        <Nav/>
        <div className='gamesContainer'>
          {notReady && <p className="gameMessage">This game is currently under construction(either the mobile version needs work or it's buggy!), but feel free to play around anyway and come back later for updates!</p>}
          <p className = "more" onClick={()=>setInfo((prevInfo)=>!prevInfo)}>{!info ? "More About This Project...":"Less About This Project"}</p>
          <div className={`cover ${info ? "": "hidden"}`}>
            <div ref={container} className = "moreInfo">
              {Object.keys(note).map((key)=> <button onClick={()=>setInfotab(key)} className = {infoTab === key ? "infoButton":""} key = {key}>{key}</button>)}
              <div>
                {typeof note[infoTab] === "object"
                ?
                <ul className = "infoList">
                  {note[infoTab].map((item, i)=><li key={i}>{item}</li>)}
                </ul>
                :
                <p className = "info">{note[infoTab]}</p>
                }
              </div>
            </div>
          </div>
            <iframe className="gameFrame" id ={gameClass} src={src}  width={width} height={"850px"}/>
        </div>
      </>
    )
  }
  
  export default Game