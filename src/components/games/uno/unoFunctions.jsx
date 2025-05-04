const dealCards = (playerNum, cardNum)=>{
    const sudoDeck = Array.from(Array(108).keys()) //to prevent endless loops
    const playerCards = []//length must be playerNum*CardNum
    const total  = playerNum * cardNum
    while(playerCards.length<total){
        const randomCardId = Math.round((Math.random()*108)+1)
    }
}