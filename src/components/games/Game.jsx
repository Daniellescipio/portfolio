import './games.css'
import { ThemeContext } from '../../ThemeConext'
import Nav from '../Nav'
import { useContext, useEffect } from 'react'


function Game({src, notReady}) {
  const {setLocation, setTheme} = useContext(ThemeContext)
  useEffect(()=>{
    setLocation("game")
    setTheme("light")
  },[])
    return (
      <>
        <Nav/>
        <div>
          {notReady && <p className="gameMessage">This game is currently under construction, but feel free to play around anyway and come back later for updates!</p>}
            <iframe className="gameFrame"  src={src}  width={"750px"} height={"850px"}/>
        </div>
      </>
    )
  }
  
  export default Game