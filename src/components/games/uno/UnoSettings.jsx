import { useContext } from "react";
import { PlayerContext } from "./PlayerContext";

export default function Settings({gameRules, setGameRules, ready, setReady}){
    const {setPlayers} = useContext(PlayerContext)
    const prepAndSetReady=()=>{
        if(gameRules.cardNum<7){
            alert("That won't be any fun, play with atleast 7 cards!")
        }else if(gameRules.cardNum>25){
            alert("That's alot of cards, we still need a deck, try 25 or less.")
        }else{
            
            setReady(true)
        }
    }
 return(
    <div className={`cover ${!ready ? "": "hidden"}`}>
        <form className={ready?"hidden":"unoSettings"}>
            <p>Settings</p>
                <label>
                    Players 
                    <select
                    name = "players"
                    onChange = {(e)=>setPlayers(e.target.value)}>
                        <option value = {2}>2</option>
                        <option value = {3}>3</option>
                        <option value = {4}>4</option>
                    </select>
                </label>
                <label>Number Of Cards
                    <input
                    name = "cardNum"
                    value = {gameRules.cardNum}
                    type="number"
                    onChange = {(e)=>setGameRules(prevRules=>{return{...prevRules, [e.target.name]:e.target.value}})}
                    />
                </label>
                <div>
                    <p>Multiple cards of the same value and color</p>
                    <label>Stack them! 
                        <input
                        name = "stacksies"
                        value = {true}
                        onChange = {(e)=>setGameRules(prevRules=>{return{...prevRules, [e.target.name]:e.target.value}})}
                        type = "radio"/>
                    </label>
                    <label>One and Done
                        <input
                        name = "stacksies"
                        value = {false}
                        onChange = {(e)=>setGameRules(prevRules=>{return{...prevRules, [e.target.name]:e.target.value}})}
                        type = "radio"/>
                    </label>
                </div>
                <div>
                    <p>When a Draw 2 or 4 is played the next player...</p>
                    <label>
                        can play the same card (type)
                        <input
                        name = "powerPlay"
                        value = {true}
                        onChange = {(e)=>setGameRules(prevRules=>{return{...prevRules, [e.target.name]:e.target.value}})}
                        type = "radio"/>
                    </label>
                    <label>
                        must draw
                        <input
                        name = "powerPlay"
                        value = {false}
                        onChange = {(e)=>setGameRules(prevRules=>{return{...prevRules, [e.target.name]:e.target.value}})}
                        type = "radio"
                        />
                    </label>
                </div>
                <div>
                    <p>If you don't have a card to play, draw</p>
                    <label> until you have a playable card
                        <input
                        name = "drawUntil"
                        value = {true}
                        onChange = {(e)=>setGameRules(prevRules=>{return{...prevRules, [e.target.name]:e.target.value}})}
                        type = "radio"/>
                    </label>
                    <label> one card
                        <input
                        name = "drawUntil"
                        value = {false}
                        onChange = {(e)=>setGameRules(prevRules=>{return{...prevRules, [e.target.name]:e.target.value}})}
                        type = "radio"/>
                    </label>
                </div>
                <button disabled = {Object.values(gameRules).includes(null)} type ="button" onClick={prepAndSetReady}>Ready</button>
            </form>
    </div>
 )
}