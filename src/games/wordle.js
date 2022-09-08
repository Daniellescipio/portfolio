import axios from "axios"
import { useEffect, useState } from "react"

function Wordle(){
    const [word, setWord]= useState()
    const [attempts, setAttempts] =useState([])
    const [setUp, setSetup] = useState(false)
    console.log("blah")

    function handleChange(e){
        const {value, name} = e.target

    }
    //Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container", inertia:true});
    return(
        <>
            <h1>Wordleish</h1>
            <h3>It's not wordle because there are SIX letters</h3>

        </>
    )
}
export default Wordle