//76 number - 4 groups of 19 (1:0 and 2: 1-9)
//24 action - 4 groups of 6 (2:D2, 2:Sk, 2:R)

import { useEffect, useState, useContext } from "react";
import UnoCard from "./UnoCard";
import { ThemeContext } from "../../../ThemeConext";
import Nav from "../../Nav";

//8 wild cards 4: wild 4: draw4
export default function Uno(){
    const {theme, setLocation} = useContext(ThemeContext)
    const [deck, setDeck] = useState(false)
    const [display, setDisplay] = useState(false)
    const [shuffled, setShuffled] = useState(false)
    const [playingCards, setPlayingCards] = useState([])
    useEffect(()=>{
        setLocation("game")
       const createDeck = ()=>{
            const rawDeck = {
                red:[],
                blue:[],
                green:[],
                yellow:[]
            }
            for(const key in rawDeck){
                rawDeck[key].push(0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,"+2","+2","block","block","repeat","repeat")
            }
            rawDeck.wild = ["+4","+4","+4","+4","WILD","WILD","WILD","WILD"]
            return rawDeck
        }
        setDeck(createDeck())
    },[])
    const shuffleDeck = ()=>{
        if(!shuffled){
            let cardCount =0
            for(let i = 0;i<4;i++){
                while(cardCount<108){//<--108 cards
                    const colors = Object.keys(deck)
                    const randomColor = colors[Math.floor(Math.random()*colors.length)]
                    const randomsubDeck = [...deck[randomColor]]
                    const randomVal = randomsubDeck.splice(Math.floor(Math.random()*randomsubDeck.length),1)
                   setPlayingCards((prevCards)=>[...prevCards, {val:randomVal[0], color:randomColor}])
                   cardCount++
                }
            }
            setShuffled(true)
        }
    }
    deck && shuffleDeck()
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "September", "December"]
    const date = new Date()

    return(
        <>
            <Nav/>
            <h1>Soon To Be Uno!!</h1>
            <p>Uno game is still being built, but feel free to flip through the -still under development- deck and come back later to see how it improves! Welcome to the process!</p>
            <p>Last updated : {`${months[date.getMonth()]} / ${date.getDate()} / ${date.getFullYear()}`}</p>
            <p>Card Count:{playingCards.length}</p>
            <div className = "devGrid">
                {playingCards &&
                playingCards.map((card, i)=><UnoCard key = {i}setDisplay = {setDisplay} display = {display} num = {card.val} color = {card.color} id={i}/>)}
            </div>
            {/* <UnoCard key={"00"} setDisplay = {setDisplay} display = {display} num = {"WILD"} color = {"wild"} id={999}/> */}

        </>
    )
}