import React, {useState} from "react"
import { useEffect, useContext } from "react"
import deck from "./unoCards"
import { PlayerContext } from "./PlayerContext"
const CardContext = React.createContext("")

function CardProvider(props){
    const [unoDeck, setDeck] = useState(deck)
    const [shuffled, setShuffled] = useState(false)
    const {players} = useContext(PlayerContext)
        const shuffleDeck = (cards)=>{
            const shuffledDeck = [] 
            //copy a deck so we can splice without issues
            const spliceDeck = [...cards]
            //for each card in the deck passed to us
            cards.forEach(element => {
            //randomly splice a card from that deck and push it into the shuffled array
            shuffledDeck.push(spliceDeck.splice(Math.floor(Math.random()*spliceDeck.length), 1)[0])
            });
            setDeck(shuffledDeck)
            setShuffled(true)
        }
    const dealCards = (cardNum)=>{
        const sudoDeck = [...unoDeck]//to avi=oid issues with state
        for(let i=0;i<players.length;i++){
            if(players[i].player.status){
                const playerCards = sudoDeck.splice(0,cardNum)
                players[i].setPlayer((prevPlayer)=>{return{...prevPlayer, cards:playerCards}})
            }
        }
        setDeck(sudoDeck)
    }

    return(
        <CardContext.Provider value={{unoDeck,setDeck, shuffled, shuffleDeck, dealCards}}>
            {props.children}
        </CardContext.Provider>
    )

}
export {CardContext, CardProvider}