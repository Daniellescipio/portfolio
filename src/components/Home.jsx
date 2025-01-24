import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext } from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ThemeContext } from "../general/ThemeConext"
import { breakCamelCase } from "../general/functions";
function Home() {
    const [travel, setTravel] = useState()
    const {theme, setTheme, open, setOpen, setLocation} = useContext(ThemeContext)
    const [hover, setHover] = useState(false)
    const [showHideAbout, setShowHideAbout] = useState(true)
    const container = useRef()
    const about = useRef()
    const navigate = useNavigate()
    const {contextSafe} = useGSAP({scope:about})

    useEffect(()=>{
      setLocation("")
       navigate(travel)
    },[travel])
    const beforeYouGo = (location)=>{
        setTravel(location)
    }

    useGSAP((context, contextSafe)=>{
      const welcome = gsap.timeline()
      const enter = gsap.timeline()
      const gt = gsap.fromTo(".entertext", {opacity:.3},{opacity:1, duration:1, repeat: -1, yoyo:true})
        if(open){
          gt.kill()
          gsap.set(".enterCircle", {width:"100vw", height:"100vh",borderRadius:0, top:0, duration:1})
          gsap.set(".entertext", {fontSize:"50em", opacity:0,top:"-1em", duration:2}, "<")
          gsap.set(".home",{fontSize:"4em",opacity:1, top:0, duration:2}, "<")
        }else{
          if(hover==="enter"){
            gt.pause()
            welcome.to(".enterCircle", {height:"350px", width:"350px", duration:1})
            welcome.fromTo(".entertext", {fontSize:"7em"},{fontSize:"7.5em", opacity:1, duration:1}, "<")
          }else if (hover ==="exit"){
            console.log("??")
           welcome.fromTo(".enterCircle", {height:"350px", width:"350px"},{height:"300px", width:"300px", duration:1})
           welcome.fromTo(".entertext", {fontSize:"7.5em", opacity:1},{fontSize:"7em",opacity:.3, duration:1,  onComplete:gt.play}, "<")
          }else if(hover ==="open"){
            gt.kill()
            //enter circle idea-->the circle needs to grow until the inside covers the whole page
            //enter circle css --> height:350px, width:350px -->height:100vh, width:100vw, borderRadius:0, top:0 and then lets try display none cause it should be completely off the page
            enter.to(".enterCircle", {width:"100vw", height:"100vh",borderRadius:0, top:0, duration:1})
            //enter text idea--> this needs to disappear off the page, I'm thinking by increasing the size and decreasing opacity it will look like the font got to big for the page and disappeared, kind of like it's coming at you...
            //enter text -->fontSize:7em, opacity:.3 -->fontSize:25em, opacity:0
            enter.to(".entertext", {fontSize:"50em", opacity:0,top:"-1em", duration:2}, "<")
            //homepage idea --> the font is invisible right now, so it will just get bigger until it is visble
            //hompage font -->font-size: 0em -->font-size: 4em top:0
            enter.fromTo(".home",{top:"30em"},{fontSize:"4em",opacity:1, top:0, duration:2, onComplete:setOpen, onCompleteParams:[true]}, "<")

          }
        }
    }, {dependencies:[hover], scope:container, revertOnUpdate:true})

    const handleOpenAndClose = contextSafe((dir)=>{
      if(hover ==="exiting"){
        setOpen(false)
        localStorage.setItem("open", false)
        //call setHover again to trigger animation now that the app is closed
        setHover("exit")
      }else{
        setHover("open")
        localStorage.setItem("open", true)
      }

    })
    const openAbout = contextSafe(()=>{
      if(showHideAbout){
        gsap.to(".about", {height:230, duration:1})
        gsap.fromTo(".aboutClick",{ opacity: 0}, { opacity: 1, duration: 2 })
        setShowHideAbout(false)
      }else{
        gsap.to(".about", {height:0, duration:1})
        gsap.fromTo(".aboutClick",{ opacity: 0}, { opacity: 1, duration: 2 })
        setShowHideAbout(true)
      }

    })

    const contents = ["Resume","Games", "JavascriptBlog"]//,"buildAChar","Animations", "Writing"<--coming soon
    const tableOContents= contents.map((content, index)=><li key ={index} onClick={()=>beforeYouGo(content)}>{breakCamelCase(content)}</li>)
    tableOContents.push(
      <div ref={about} key = "showAbout">
        <li  className = "aboutClick" onClick={openAbout} >{showHideAbout ? "About This Site" : "Hide About"}</li> 
        <div className = {`about ${theme === "dark" ? "light":"dark"}`}>
          <p>Welcome to my portfolio!</p><p> Learn the most about how I code by playing games!</p> 
          <p>Learn more about my views on Javascript from the JS Blog</p> 
          <p>Or contact me on the resume page.</p> 
          <p> This site is ever evolving and soon to come will be interactive animations, a character generator and an improved version of 
          <a target = "blank" href="https://github.com/Daniellescipio/theWritersGuideBook/tree/main">
          The writer's guidebook!
          </a>
          </p>
        </div>
      </div>, 
      <li key = "exit" onClick = {handleOpenAndClose} onTouchStart={()=>setHover("exiting")} onTouchEnd={handleOpenAndClose} onMouseEnter={()=>setHover("exiting")}>
        Exit
      </li>
      )
    return (
      <>    
      <div ref={container} id = "cover" className={theme}>
        <div  className = "enterCircle" onClick = {handleOpenAndClose} onMouseEnter={()=>hover!=="open"&&setHover("enter")} onMouseLeave={()=>hover!=="open"&&setHover("exit")}>
          <p className="entertext">Enter</p>
        </div>
        <div id = "homePage" className = "home">
          <h1>Explore</h1> 
          <ul>
              {tableOContents}
          </ul>
        </div>
      </div>

      </>
    )
  }
  
  export default Home
  