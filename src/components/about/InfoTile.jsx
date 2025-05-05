import { useRef, useState } from "react"
import Nav from "../Nav"
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

function InfoTile({milestone, name, year,setPopUp}) {
  const [highlighted, setHighlighted] = useState(null)
  const hoverEffect = useRef()
  const infoClass = name.split(" ").join("")
  useGSAP((context, contextSafe)=>{
    if(highlighted){
      gsap.to(`.circle-${infoClass}`, {width:"25px", height:"25px", backgroundColor:"antiquewhite", duration:1})
      gsap.set(`.circle-${infoClass}`, {backgroundColor:"antiquewhite"})
      gsap.to(`.text-${infoClass}`, {fontSize:"50px", duration:1})
      gsap.to(`.journeyCircle-${infoClass}`, {right:"18px", duration:1})
    }else{
      gsap.set(`.circle-${infoClass}`, {width:"15px", height:"15px"})
      gsap.set(`.text-${infoClass}`, {fontSize:"16px"})
      gsap.set(`.journeyCircle-${infoClass}`, {right:"14px"})
    }
}, {dependencies:[highlighted], scope:hoverEffect, revertOnUpdate:true})

    return (
      <>
        <div className = "hover-container" ref={hoverEffect} >
          <div onMouseEnter={()=>setHighlighted(name)} onMouseLeave={()=>setHighlighted(null)} className={`journeyCircle journeyCircle-${infoClass}`}>
            <div className={`circle-${infoClass}`}></div>
            <p className ={`text-${infoClass}`} onClick={()=>setPopUp(milestone)}>{year}:{name}</p>
          </div> 
        </div>
      </>
    )
  }
  
  export default InfoTile