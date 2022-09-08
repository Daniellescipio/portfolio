import {Link} from "react-router-dom"
import {useRef} from "react"
import gsap from "gsap"
import "../css/games.css"

function GameHomepage(){
    const games = useRef()
    const options = gsap.utils.selector(games);

    return(
        <>
            <h1>Games</h1>
            <h2>Let's Play!</h2>
            <ul className = "gameContents">
              <li><Link to="/games/wordleish">Word game I won't call wordle for copy right purposes</Link></li>
            </ul>
        </>
    )
}
export default GameHomepage