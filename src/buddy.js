//import {gsap} from "gsap"
import {useRef, useEffect, useContext} from "react"
import { ThemeContext } from "./themeContext"

function Buddy(){
    const {theme} = useContext(ThemeContext)
    const head = useRef()
    const rEye = useRef()
    const lEye = useRef()
    const body = useRef()
    const lArm = useRef()
    const rArm = useRef()
    const lLeg = useRef()
    const rLeg = useRef()
   // const tl= gsap.timeline()
    useEffect(()=>{
    })
    const buddysTheme = theme === "dark"? "light" :"dark"
    //Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container", inertia:true});
    return(
        <div className= {"buddy "}>
            <div ref={head}id="buddysHead" className={"buddyBody "+buddysTheme}>
                <div ref={lEye} className= {"buddysEyes "+ theme}></div>
                <div ref={rEye} className= {"buddysEyes "+ theme}></div>
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
    )
}
export default Buddy