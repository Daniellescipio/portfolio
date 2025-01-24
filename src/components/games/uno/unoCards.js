const cards = []
const colors = ["red","blue","green", "yellow"]
//colorNum.png is added to base url to get a carg, e.g. blue1.png would get the blue 1
const baseUrl = "https://unocardinfo.victorhomedia.com/graphics/uno_card-"
for(let i=0; i<colors.length; i++){
    const color = colors[i]
    const colorUrl = baseUrl + color
    for(let ind=0; ind<=12; ind++){
        const card = {
            color : color
        }
        if(ind<=9){
            card.num = ind
            card.url = colorUrl+ind+".png"
        }else{
            let val
            if(ind===10){
                val = "skip"
            }else if(ind===11){
                val = "reverse"
            }else{
                val = "draw2"
            }
                card.num = val
                card.url = colorUrl+val+".png"
        }
        ind===0?cards.push(card):cards.push(card,card)
    }
}
const wildChange = "wildchange"
const wildDraw4 = "wilddraw4"
for(let i=0;i<4;i++){
    cards.push({
        color:"wild",
        num:wildChange,
        url:baseUrl+wildChange+".png"
    },{
        color:"wild",
        num:wildDraw4,
        url:baseUrl+wildDraw4+".png"
    })
}
const deck = cards.map((card, i)=>{return{...card, id:i+1}})

export default deck
