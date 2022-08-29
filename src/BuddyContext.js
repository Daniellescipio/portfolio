import {gsap} from "gsap"
import React, {useRef, useEffect, useContext, useState} from "react"
import { ThemeContext } from "./themeContext"
import { CSSPlugin } from 'gsap/CSSPlugin'
const BuddyContext = React.createContext()
gsap.registerPlugin(CSSPlugin)

function BuddyProvider(props){
    const {theme,open} = useContext(ThemeContext)
    const [directText, setDirectText] =useState("")
    const [buddyTrigger, setBuddyTrigger] =useState(false)
    const [buddysTheme, setBuddysTheme] =useState(theme)
    const [buddyClicks, setbuddyClicks] =useState(0)
    const [buddysLocation, setBuddysLocation] = useState("")
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

    function setBuddyMessage(bool){
        setbuddyClicks(buddyClicks +1)
        if(open){
            if(buddyClicks===0){
                buddyMove(bool)
            }else if(buddyClicks === 1){
                buddyMove(bool)
                setDirectText("Sorry Buddy's a little shy, but you can play with him more in the animations tab!")
                gsap.to(direct.current, {opacity:1})
            }else if(buddyClicks > 1){
                buddyMove(bool)
                const textChoices = ["....the animations link is the last on this page", "Seriously, he's not going to come out....", "persistent, huh?", ".....there's also Build-a-Char which is more fun than  chasing buddy around.", "....or just...keep trying to click buddy..."]
                setDirectText(textChoices[Math.floor((Math.random()*textChoices.length))])
                gsap.fromTo(direct.current, {opacity:0},{opacity:1})
            }
             
        }else{

        }    
    }

    function buddyMove(bool){
        console.log(buddyBody.current.style.top)
        if(bool){
            setBuddysTheme(theme)
        }else{  
            setBuddysTheme(theme==="dark"?"light":"dark")
            var top = parseInt(buddyBody.current.style.top);
            let left = parseInt(buddyBody.current.style.left)
            if(top<0 || top>60 ||left <-2 || left>100){
                gsap.to(buddyBody.current, {left:"59%", top:"+=55%"} )
            }else{
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
        const opp = ()=>setBuddysTheme(theme === "dark"?"light":"dark")
        const eq =()=> setBuddysTheme(theme)
        if(open){
           if(buddyTrigger==="sleep"){
            console.log("The site is open and buddy's 'wakeup' animation has been completed")
            opp()
           }else if(buddyTrigger === "wake up"){
            console.log("The site is open and buddy's 'wakeup' animation has been triggered")
            buddysAnimation.current = gsap.timeline()
            .addLabel("buddyBlink")
            .fromTo(eyes,{height:5}, {height:0, repeat:3, delay:4})
            .to(eyes,{height:5})
            .addLabel("buddySurprise")
            .to(eyes, {scale:1.5, repeat:1, yoyo:true})
            .to(x(".whoops"),{display:"block", duration:.5,  repeat:1, yoyo:true}, "<" )
            .addLabel("buddyHide")
            .call(setBuddyTrigger,["sleep"])
           }else if(!buddyTrigger){
            console.log("this should not happen")
           }
        }else if(!open){
            if(buddyTrigger ==="sleep"){
                console.log("The site is being closed and buddy's 'sleep' animation has been triggered")
                if( buddysAnimation.current){
                    buddysAnimation.current.progress(0).play()
                    buddysAnimation.current.call(eq)
                    buddysAnimation.current.call(setBuddyTrigger,["zzzz"])
               } 
            }else{
                console.log("The site is being closed and has not been triggered yt or has already completed the 'sleep' animation")
                eq()
            }
        }
    }, [theme, open, buddyTrigger])

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
