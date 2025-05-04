import React, {useContext, useEffect, useState} from "react"
import { CardContext } from "./CardContext"
const PlayerContext = React.createContext()

function PlayerProvider(props){
   const [p1, setP1] = useState({name:"Player One", cards:[],status:true})
   const [p2, setP2] = useState({name:"Player Two", cards:[],status:true})
   const [p3, setP3] = useState({name:"Player Three", cards:[],status:false})
   const [p4, setP4] = useState({name:"Player Four", cards:[],status:false})
   //bundle the variables and functions for ease of use later on...
   const players = [{player:p1, setPlayer:setP1}, {player:p2, setPlayer:setP2}, {player:p3, setPlayer:setP3}, {player:p4, setPlayer:setP4}]

//    const deal = (deck,cardNum,setDeck)=>{
//     //a minimum of two player so we need card num * 2 no matter what
//     let cardTotal = (cardNum *2)
//     //if player four is playing we can assume player three is as well
//     //we can add the card num two more time for both players
//     if(p4.status){
//         cardTotal+= (cardNum*2)
//         //if player 3 is in, but player four is not
//     }else if(p3.status){
//         cardTotal+=cardNum
//     }
//     const dealtCards = deck.slice(0,cardTotal )
//     const remainder = deck.filter((deckCard)=>!dealtCards.find(dealtCard=>dealtCard.id===deckCard.id))
//     setDeck(remainder)
//     players.forEach((player,i)=>{
//         if(player.player.status){
//             const playerCards = dealtCards.splice(0,cardNum)
//             player.setPlayer((prevPlayer)=>{return{...prevPlayer, cards:playerCards}})
//         }
//     })
//     console.log(dealtCards, remainder)

//     //it will be the same function for each player, so we write a general set Player to pass dow to each players set function
//     // const setPlayer = (prevPlayer)=>{
//     //     

//     //     
//     //     setDeck(remainder)
//     //     return {...prevPlayer, cards:dealtCards}
//     // }
//     // //game needs a min of two players so these will always be set
//     // setP1(setPlayer)
//     // setP2(setPlayer)
//     // //players 3 and 4 will only get set if they are in the game
//     // p3.status && setP3(setPlayer)
//     // p4.status && setP4(setPlayer)
//    }
    const setPlayers = (plNum)=>{
        if(plNum==="2"){
            setP3((prevVal)=>{return{...prevVal, status:false}})
            setP4((prevVal)=>{return{...prevVal, status:false}})
        }else if(plNum==="3"){
            setP3((prevVal)=>{return{...prevVal, status:true}})
            setP4((prevVal)=>{return{...prevVal, status:false}})
        }else{
            setP3((prevVal)=>{return{...prevVal, status:true}})
            setP4((prevVal)=>{return{...prevVal, status:true}})
        }
    }
    return(
        <PlayerContext.Provider value={{setPlayers, players}}>
            {props.children}
        </PlayerContext.Provider>
    )

}
export {PlayerContext, PlayerProvider}