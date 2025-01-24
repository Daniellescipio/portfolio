import React, {useState} from "react"
import { useEffect } from "react"
import deck from "./unoCards"
const CardContext = React.createContext("")

function CardProvider(props){
    const [unoDeck, setDeck] = useState(deck)
    const [shuffled, setShuffled] = useState(false)

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

    return(
        <CardContext.Provider value={{unoDeck,setDeck, shuffled, shuffleDeck}}>
            {props.children}
        </CardContext.Provider>
    )

}
export {CardContext, CardProvider}