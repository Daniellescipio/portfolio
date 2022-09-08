import {gsap} from "gsap"
import React, {useRef, useEffect, useContext, useState} from "react"
import { ThemeContext } from "./themeContext"
import { CSSPlugin } from 'gsap/CSSPlugin'
const BuddyContext = React.createContext()
gsap.registerPlugin(CSSPlugin)

function BuddyProvider(props){
    //pulls the theme from ThemeContext to properly filll buddy
    const {theme,isTheSiteOpen, isBuddyHere, saveORetrieve} = useContext(ThemeContext)
    const buddysAttendance= saveORetrieve("buddysAttendance", isBuddyHere) 
    const open= saveORetrieve("isTheSiteOpen", isTheSiteOpen) 
    //text to direct the user towards BUddys animation
    const [directText, setDirectText] =useState("")
    //keeps track of whether buddy has been triggered or not
    const [buddyTrigger, setBuddyTrigger] =useState(false)
    //certain parts of buddy are inline with the theme and certain parts are not so...
    const [buddysTheme, setBuddysTheme] =useState(theme)
    //Changes the buddy direct text dynamically
    const [buddyClicks, setbuddyClicks] =useState(0)
    //tarcks/moves where buddy is on the page
    const [buddysLocation, setBuddysLocation] = useState("")
    //gsap stuff
    const buddyBody = useRef()
    const head = useRef()
    const surprise = useRef()
    const x = gsap.utils.selector(surprise);
    const rEye = useRef()
    const lEye = useRef()
    const eyes=[rEye.current, lEye.current]
    const body = useRef()
    const lArm = useRef()
    const rArm = useRef()
    const lLeg = useRef()
    const rLeg = useRef()
    const direct = useRef()
    const buddysAnimation = useRef()
    //just cleaning up all the times buddys theme will change
    const opp = ()=>setBuddysTheme(theme === "dark"?"light":"dark")
    const eq =()=> setBuddysTheme(theme)
//Checks to see how many times the  user has clicked budy and responds acordingly
    function setBuddyMessage(bool){
        setbuddyClicks(buddyClicks +1)
        if(open){
            if(buddyClicks===0){
                //no commetary, buddy just moves
                buddyMove(bool)
            }else if(buddyClicks === 1){
                //on the second click we move buddy again and explain why
                buddyMove(bool)
                if(!bool){
                    setDirectText("Sorry Buddy's a little shy, but you can play with him more in the animations tab!")
                    gsap.to(direct.current, {opacity:1})
                }
            }else if(buddyClicks > 1){
                //after the second click we have a set of messages to go throught to encourage the user to visit buddy's animation page
                buddyMove(bool)
                const textChoices = ["....the animations link is the last on this page", "Seriously, he's not going to come out....", "persistent, huh?", ".....there's also Build-a-Char which is more fun than  chasing buddy around.", "....or just...keep trying to click buddy..."]
                if(!bool){
                    setDirectText(textChoices[Math.floor((Math.random()*textChoices.length))])
                    gsap.fromTo(direct.current, {opacity:0},{opacity:1})
                }
            }
             
        }else{
            //I would like to just make buddy blink if the page is not open ie buddy will not be visibile but I don't want him to move yet
        }    
    }

    function buddyMove(bool){
        if(bool){
            //let the user see buddy when the mouse comes down...
            setBuddysTheme(theme)
        }else{ 
            //but he disappears as soon as the mouse comes up 
            setBuddysTheme(theme==="dark"?"light":"dark")
            //we see where buddy is on the page to make sure he doesn't go off the page before moving him
            var top = parseInt(buddyBody.current.style.top);
            let left = parseInt(buddyBody.current.style.left)
            //if he is about to go off the page, he will float back to his starting position. 
            if(top<5 || top>50 ||left <-7 || left>95){
                gsap.to(buddyBody.current, {left:"65%", top:"75%"} )
            }else{
                //otherwise he moves in a random direction on the page.
                const randomMove = Math.floor((Math.random()*4))
                if(randomMove === 0){
                    if(randomMove === buddysLocation){
                        gsap.to(buddyBody.current, {left:"+=5%", top:"+=10%"})
                    }else{
                        gsap.to(buddyBody.current, {left:"-=5%", top:"-=10%"})
                    }
                }else if(randomMove === 1){
                    if(randomMove === buddysLocation){
                        gsap.to(buddyBody.current, {left:"-=5%", top:"-=10%"})
                    }else{
                        gsap.to(buddyBody.current, {left:"+=5%", top:"-=10%"})
                    }
                }else if(randomMove===2){
                    if(randomMove === buddysLocation){
                        gsap.to(buddyBody.current, {left:"+=5%", top:"-=10%"})
                    }else{
                        gsap.to(buddyBody.current, {left:"-=5%", top:"+=10%"})
                    }
                }else if(randomMove===3){
                    if(randomMove === buddysLocation){
                        gsap.to(buddyBody.current, {left:"-=5%", top:"+=10%"})
                    }else{
                        gsap.to(buddyBody.current, {left:"+=5%", top:"-=10%"})
                    }
                }
                setBuddysLocation(randomMove)
            }
        }
    }

    useEffect(()=>{
        console.log("in buddy, buddysAttendance:", buddysAttendance)
        //if buddy is not 'buddysAttendance' ie if the user is on the homepage or buddys animation page
        if(buddysAttendance){ 
            if(open){
                if(buddyTrigger === "wake up"){
                    console.log("opening and triggered")
                    //The site is being opened and buddys wakeup animation is triggered
                    buddysAnimation.current = gsap.timeline()
                    //make buddy blink three times
                    .addLabel("buddyBlink")
                    .fromTo(eyes,{height:5}, {height:0, repeat:3, delay:4})
                    .to(eyes,{height:5})
                    //buddys eyes go wide and 'surprise' lines added around buddys head
                    .addLabel("buddySurprise")
                    .to(eyes, {scale:1.5, repeat:1, yoyo:true})
                    .to(x(".whoops"),{display:"block", duration:.5,  repeat:1, yoyo:true}, "<" )
                    //buddy switches to the opposite of the theme
                    .addLabel("buddyHide")
                    .call(setBuddyTrigger,["hiding"])
                }
            }else if(!open){
                if(buddyTrigger ==="sleep"){
                    console.log("closing and triggered")
                    //the site is being closed and buddy's 'sleep' animation is being triggered
                    if( buddysAnimation.current){
                        buddysAnimation.current.progress(0).play()
                        buddysAnimation.current.call(eq)
                        buddysAnimation.current.call(setBuddyTrigger,["hiding"])
                    } 
                }
            }
        }
    }, [open, buddyTrigger])
    
    useState(()=>{
        console.log(theme, buddysTheme, open, buddyTrigger)
        if(open && buddyTrigger==="hiding"){ 
            opp()
        }else if(!open && buddyTrigger==="hiding"){
            eq()
        }
    },[theme, open])

    function createBuddy(){
        const buddy =  
        <>
        <div ref={buddyBody} className= {"buddy "} onMouseDown={()=>setBuddyMessage(true)} onMouseUp={()=>setBuddyMessage(false)}>
            <p id="directToBuddy" className = {buddysTheme} ref={direct}>{directText}</p>
            <div ref={head}id="buddysHead" className={"buddyBody "+buddysTheme}>
            <div ref={surprise} className="surprise">
            <div id="a" className={buddysTheme+ " whoops"}></div>
            <div id="b" className={buddysTheme+ " whoops"}></div>
            <div id="c" className={buddysTheme+ " whoops"}></div>
            </div>
                <div ref={lEye} className= {buddysTheme === "dark"? "buddysEyes light" :"buddysEyes dark"}></div>
                <div ref={rEye} className= {buddysTheme === "dark"? "buddysEyes light" :"buddysEyes dark"}></div>
            </div>
            <div ref={body} id="buddysBody" className={"buddyBody "+buddysTheme}></div>
            <div className={"buddysArms "}>
                <div ref={lArm} id="buddysLArm" className={"buddyBody "+buddysTheme}></div>
                <div ref={rArm} id="buddysRArm" className={"buddyBody "+buddysTheme}></div>
            </div>
            <div  className={"buddysLegs "}>
                <div ref={lLeg} id="buddysLleg" className={"buddyBody "+buddysTheme}></div>
                <div ref={rLeg} id="buddysRLeg" className={"buddyBody "+buddysTheme}></div>
            </div>            
        </div>
        </>
        return{buddy}
    }

    return(
        <BuddyContext.Provider value={{createBuddy, buddyTrigger, setBuddyTrigger}}>
            {props.children}
        </BuddyContext.Provider>
    )

}
export {BuddyContext, BuddyProvider}
