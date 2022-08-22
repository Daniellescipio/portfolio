import {Link} from "react-router-dom"
import {useContext, useEffect, useState, useRef} from "react"
import { ThemeContext } from "../themeContext";
import gsap from "gsap";

function Home() {
  const {theme} = useContext(ThemeContext)
  const [mouseOn, setMouseOn] = useState(false)
  const enterCircle = useRef()
  const enterText = useRef()
  const welcomeEnter=useRef()
  const tOC = useRef()
  const animationOne= useRef()
  const animationTwo= useRef()
 //const fadingAnimation= gsap

  // function enterOrExit(bool){
  //   console.log(bool)
  //   setMouseOn(bool)
  //   if(bool){
  //    // fadingAnimation.pause()
  //     timeline.
  //     timeline.to(enterText.current, {fontSize:60, x:-10,y:10, duration:1}, "<")
  //   }else{
  //     timeline.to(enterText.current, {fontSize:40, x:0,y:0, duration:1}, "<")
  //   }

  // }
  useEffect(()=>{
    if(!mouseOn){
      animationOne.current && animationOne.current.progress(0).kill();
      animationTwo.current && animationTwo.current.reverse()
      animationOne.current=gsap.timeline()
      .fromTo(enterCircle.current, {opacity:1},{opacity:.3, duration:2, repeat:-1, yoyo:true})
    }else{
      animationTwo.current && animationTwo.current.progress(0).kill();
      animationOne.current.pause()
      animationTwo.current=gsap.timeline()
      .to(enterCircle.current, {opacity:1, duration:1}, "<")
      .to(enterText.current, {fontSize:60, x:-10,y:10, duration:1}, "<")
    }
    },[mouseOn])


    return (
      <>
      <h1 ref={welcomeEnter} className = {"welcomeText welcomeEnter "+theme}>Welcome</h1>
      <svg height="175" width="175" id = "circleHolder">
        <circle ref ={enterCircle} onMouseEnter={()=>setMouseOn(true)}  onMouseLeave={()=>setMouseOn(false)} className = "enterCircle" cx="75" cy="60" r="60" stroke={theme==="dark"? "black" : "antiquewhite"} strokeWidth="3" fill={theme==="dark"? "antiquewhite" : "black"} />
        <text ref={enterText} x="45" y="70" className="enterText" fill={theme==="dark"? "black" : "antiquewhite"}>ENTER</text>
      </svg>
        <div ref={tOC} className={"toc toc"+ theme}>
        <h1 className = "welcomeText welcomeTOC">Welcome</h1>
          <ul>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/writing-Samples">Writing</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/misc">Miscellaneous</Link></li>
          </ul>
        </div>
      </>
    );
}

export default Home