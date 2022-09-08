import {Link, useNavigate} from "react-router-dom"
import {useContext, useEffect, useState, useRef} from "react"
import { ThemeContext } from "../themeContext";
import gsap from "gsap";
import { BuddyContext } from '../BuddyContext';
 

function Home() {
  //The theme and an "open" boolean to detect if the site is open or closed as well as the functions to toggle both
  const {theme, setTheme, isTheSiteOpen, setOpen, istheUserTraveling, setTravel, isBuddyHere, setBuddysAttendance, saveORetrieve} = useContext(ThemeContext)
  const open = saveORetrieve("open", isTheSiteOpen)
  const travel= saveORetrieve("travel", istheUserTraveling)
  const buddysAttendance= saveORetrieve("buddysAttendance", isBuddyHere)  
  //create buddy is html saved to a const, animate buddy is a gsap function, buddied checks if buddy has been triggered (if buddy has been triggered, his animatio will run at the beginning of theme changes/open/closed as opposed to the end when he has not been triggered yet)
  const {createBuddy, buddyTrigger, setBuddyTrigger} = useContext(BuddyContext)
  const {buddy} = createBuddy()
  const [mouseOn, setMouseOn] = useState(false)
  //I need some sort of variable to track if a user is opening or closing the site that is different from the open variable which should be checking that the site is ALREADY opened
  const [action, setAction] = useState("")
  //allows me to switch pages with a function instead of a link, allowing me to do other stuff before sending the user away
  const navigate = useNavigate()
  //use refs for gsap functionality
  const enterCircle = useRef()
  const exitCircle = useRef()
  const enterText = useRef()
  const exitText = useRef()
  const welcomeEnter=useRef()
  const container=useRef()
  const tOC = useRef()
  const tOCHead = useRef()
  const options = gsap.utils.selector(tOC);
  const flashAnimation= useRef()
  const hoverAnimation= useRef()
  const enterAnimation= useRef()
  const exitAnimation= useRef()
  useEffect(()=>{
    console.log("testOne")
    if(travel){
      navigate(`/${travel}`)
    }
  },[travel])
  function beforeYouGo(place){
    setTravel(place)
    setBuddysAttendance(false)
  }
  //map through array instead of building individual <li>
  const contents = ["Resume", "Writing","Games","Build-a-char","Animations",]
  const tableOContents= contents.map((content, index)=><li key ={index} onClick={()=>beforeYouGo(content)}>{content}</li>)
//First use effect is in charge of the flashing enter button and the hover effects for the enter and exit buttons
  useEffect(()=>{
    console.log("testTwo")
    function flashy(){
      if(flashAnimation.current) {
         flashAnimation.current.play()
      }else{
      flashAnimation.current=gsap.timeline()
      .fromTo(enterCircle.current, {opacity:.3},{opacity:1, duration:2, repeat:-1, yoyo:true})
      }
    }
    //elOne the enter/exit circle, elTwo the enter;exit text, coOne & coTwo distance the text should move horizontally and vertically (respetively)to maintain center alingment when it grows. 
    function hover(elOne, elTwo, coOne, coTwo){
      hoverAnimation.current && hoverAnimation.current.progress(0).clear();
      hoverAnimation.current=gsap.timeline()
      .to(elOne.current, {opacity:1, duration:1}, "<")
      .to(elTwo.current, {fontSize:60, x:coOne,y:coTwo, duration:1}, "<")
    }
    if(!mouseOn){
      //whether the site is opend or closed, when the mouse leaves the enter?exit circle, the corresponding hover animation should be verversed. 
      hoverAnimation.current && hoverAnimation.current.reverse()
        if(!open){
          //if the site has not been opened yet, the enter button flashes(exit button does not have this behavior)
          flashy()
        }
    }else{
        //The hover animation will be called on either the entering circle and text or the exiting circle and text based on whether the site is opened or closed. 
        if(open){
          hover(exitCircle, exitText, "-=15", "-=15")
         // gsap.to(enterText.current, {fontSize:60, x:"-=15",y:"-=15", duration:1}, "<")
        }else{
          flashAnimation.current && flashAnimation.current.pause() 
          hover(enterCircle, enterText, "-10", "5")
          //gsap.to(enterText.current, {fontSize:40, x:"+=15",y:"+=15", duration:1}, "<")
        }
    }
  },[mouseOn, open])
//Second use Effect is responsible for 'opening' the site.
    useEffect(()=>{
      console.log("testThree")
      //Stop the hover animation
      hoverAnimation.current && hoverAnimation.current.kill()
      if(!open && action==="opening"){
        //if the site is being opened. and buddy has already been triggered(opening and closing the site repeatedly) buddy
        enterAnimation.current && enterAnimation.current.progress(0).clear()
        flashAnimation.current && flashAnimation.current.progress(0).kill()
        enterAnimation.current=gsap.timeline()
        .to(enterCircle.current, {pointerEvents:"none"})
        .to(tOC.current,{pointerEvents:"auto"},"<")
        .to(enterText.current,{fontSize:0, duration:3})
        .to(tOC.current,{fontSize:"4rem",duration:3},"<")
        .to(enterCircle.current,{opacity:1, duration:.1}, "<")
        .to(enterCircle.current,{scale:10, r:100,cx:"48vw", duration:3, pointerEvents:"none"}, "<")
        .to(tOCHead.current, {bottom:"-5rem", duration:3}, 1)
        .to(exitText.current, {x:"-=24vw"})
        .to(exitCircle.current, {r:60, ease:"bounce"})
        .to(exitText.current, {fontSize:40}, "<")
        .call(setBuddyTrigger("wake up"))  
         setOpen(true)
         setAction("perusing")
      }else if(open && action==="closing"){
        enterAnimation.current && enterAnimation.current.reverse(false)
        setOpen(false)
        setBuddyTrigger("sleep")
      }else if(open){
        enterAnimation.current && enterAnimation.seek(-1)
      }
    },[open, action])

    function openAndClose(bool){
      setAction(bool?"opening":"closing")
    }

    return (
      <>
        <h1 ref={welcomeEnter} className = {"welcomeText welcomeEnter "+theme}>Welcome</h1>
        {buddy}
        <svg ref={container} height="100vh" width="100vw" id = "circleHolder">
          <circle ref ={enterCircle} onClick={()=>{!open ? openAndClose(true): openAndClose(false)}} onMouseEnter={()=>setMouseOn(true)}  onMouseLeave={()=>setMouseOn(false)} className = "enterCircle" cx="50vw" cy="350" r="60" fill={theme==="dark"? "antiquewhite" : "black"} />
          <circle ref ={exitCircle} onClick={()=>{open && openAndClose(false)}} onMouseEnter={()=>setMouseOn(true)}  onMouseLeave={()=>setMouseOn(false)} className = "exitCircle" cx="25vw" cy="350" r="0" fill={theme==="dark"? "black" : "antiquewhite"} />
          <text ref={enterText} x="48vw" y="360" className="enterText" fill= {theme==="dark"? "black":"antiquewhite"}>ENTER</text>
          <text ref={exitText} x="47.5vw" y="360" className="exitText" fill= {theme==="dark"? "antiquewhite" : "black"}>EXIT</text>
        </svg>
        <div ref={tOC} className={"toc toc"+ theme}>
        <h1 ref = {tOCHead}className = "welcomeText welcomeTOC">Explore</h1>
          <ul>
           {tableOContents}
          </ul>
        </div>
      </>
    );
}

export default Home