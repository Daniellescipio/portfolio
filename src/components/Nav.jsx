import { Link } from "react-router-dom"

function Nav() {
 
    return (
      <>
       <div className = "navBar">
       <Link to="/resume">Resume</Link> 
       -
       <Link to="/">Home</Link> 
       -
       <Link to="/games">Games</Link>  
       -
       <Link to="/myJourney">About Me</Link> 
       -
       <Link to="/cybersecurity">Security Projects</Link>
       {/* <Link to="/">APIs</Link>  
       <Link to="/buildAChar">Build-A-Char</Link>  
       -
       <Link to="/writing">Writing</Link>  
       -
       <Link to="/animations">Animations</Link>   */}
       </div>
      </>
    )
  }
  
  export default Nav