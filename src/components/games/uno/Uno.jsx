//76 number - 4 groups of 19 (1:0 and 2: 1-9)
//24 action - 4 groups of 6 (2:D2, 2:Sk, 2:R)

import { useEffect, useState, useContext } from "react";
import UnoCard from "./UnoCard";
import { ThemeContext } from "../../../general/ThemeConext";
import { CardContext } from "./CardContext";
import Nav from "../../Nav";
import Settings from "./UnoSettings";
import { PlayerContext } from "./PlayerContext";

//this component creates the deck, each individual card is created in a seperate component
export default function Uno(){
    const {players, deal} = useContext(PlayerContext)
    const [settingsText, setSettingsText]=useState("")
    const [gameRules, setGameRules] = useState(
        {
            cardNum:7,
            stacksies:null, 
            drawUntil:null, 
            powerPlay:null
        })
    const [ready,setReady]=useState(false)
    const {theme, setLocation} = useContext(ThemeContext)
    const {unoDeck, shuffled, createDeck, shuffleDeck, setDeck} = useContext(CardContext)
    //controls which card(s) is(are) visible, passed to and set by the child component that displays cards.
    const [display, setDisplay] = useState(false)

    useEffect(()=>{
        if(ready){
            setSettingsText("Change Rules")
        }else{
            setSettingsText("Set Rules to Play")
        }
        setLocation("game")
        shuffleDeck(unoDeck)
    },[gameRules,ready])
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "September", "December"]
    const date = new Date()
    return(
        <>
            <Nav/>
            <Settings gameRules={gameRules} setGameRules={setGameRules} ready={ready} setReady={setReady}/>
                {unoDeck &&
                <div className="deck">
                    {unoDeck.map((card)=><UnoCard key = {card.id} setDisplay = {setDisplay} display = {display} card={card}/>)}
                    <div className="discard">
                    </div>
                </div>
                }
            <p onClick={()=>setReady(false)}>{settingsText}</p>
            <button onClick={()=>deal(deck, gameRules.cardNum, setDeck)} disabled={!ready}>Deal</button>
            <div className="playerBox">
                {players.map((player, i)=>
                    <div className={player.player.status?`player${player.player.name.split(" ")[1]}`:"hidden"} key = {i}>
                        <h1>{player.player.name}</h1>
                        <div className="playerCards">
                            {player.player.cards.map((card, i)=>
                                <UnoCard key = {i} setDisplay = {setDisplay} display = {display} num = {card.val} color = {card.color} id={i}/>  
                            )}
                        </div>
                    </div>
                )}
            </div>

        </>
    )
}