
import { useState } from "react"
import Nav from "../Nav"
import milestones from "./info"
import InfoTile from "./InfoTile"
import './journey.css'
function Journey() {
const [popUp, setPopUp] = useState(null)
    return (
      <>
        <Nav/>
        <div className="timeLine">
          <div>
            {milestones.map((milestone,i)=><InfoTile key={i} milestone={milestone} name={milestone.name} year = {milestone.year} setPopUp={setPopUp}/>)}
          </div>
        </div>
        {popUp &&
        <div className="infoCover">
        <div className="infoPopUp">
          <p className = "exit" onClick={()=>setPopUp(null)}>X</p>
          <h2>{popUp.name}</h2>
          <p>{popUp.year}</p>
          <p>{popUp.info}</p>
          <img src={popUp.img}/>
        </div>
      </div>}
      <p className="infoPrompt"> Click any year to learn more about my experience!</p>
      </>
    )
  }
  
  export default Journey