import {useState } from "react"
import back from "../gameAssets/back.png"
function UnoCard({setDisplay, display, card}) {
  const colorArray= ["redColor", "blueColor", "yellowColor", "greenColor"]
  const [hover, setHover] = useState("")
  //if it is a skip or reverse card we use google icon class.
  console.log("here", card)

  return (
    <>
      <div className={hover+" container"} id = {card.id}>
        <div className={`unoCard ${display === card.id ? "display":""}`} onClick={()=>{ setDisplay(card.id)}} >
          <div className="card front">
            <img src = {card.url}/>
          </div>
          <div className="card back">
            <img src = {back}/>
          </div>
        </div>
      </div>
    </>
  )
}
// function UnoCard({num, color, setDisplay, display, id}) {
//     const colorArray= ["redColor", "blueColor", "yellowColor", "greenColor"]
//     const [hover, setHover] = useState("")
//     //if it is a skip or reverse card we use google icon class.
//     const smallClass =(position)=> `${num === "block" || num === "repeat" ? "material-symbols-outlined" : undefined} sm num ${position}`
//     const bigClass = `${num === "block" || num === "repeat" ? "material-symbols-outlined" : num === "D"? "drawTwo" :undefined} ${color}Color`
//     const wildCircle = (sz, num)=><>
//       <div className = {"wildCircle "+sz}>
//         <div className="redBackGround"></div>
//         <div className="blueBackGround"></div>
//         <div className="yellowBackGround"></div>
//         <div className="greenBackGround"></div>
//         <div className={bigClass}>{sz==="bgCirc" && num.split("").map((en,i)=><p key = {i} className={colorArray[i]}>{en}</p>)}</div>
//       </div>
//     </>
//     const numDislay = (size)=>{
//       let cardVal = num
//       if(num ==="WILD" && size === "sm"){
//         //the wild cirle should be the display
//       }else if(num ==="+2" && size === "big"){
//         //two overlapping rectangles with box shadow
//       }else if(num ==="+4" && size === "big"){
//        //four overlapping rectangles with box shadow
//       }
//       const bigReturn = num !== "WILD" ? <p className={bigClass}>{num}</p>:wildCircle("bgCirc", num)
//       return size === "big" ? bigReturn  : num
//     }
//     return (
//       <>
//        <div className={hover+" container"} id = {id}>
//             <div className={`unoCard ${display === id ? "display":""}`} onClick={()=>{ setDisplay(id)}} >
//                 <div className="card front">
//                     <div><p>UNO</p></div>
//                 </div>
//                 <div className={color + "BackGround card back icon"}>
//                     <div className={smallClass("a")}>{numDislay("sm")}</div>
//                     <div className="big num icon">{numDislay("big")}</div>
//                     <div className={smallClass("b")}>{numDislay("sm")}</div>
//                 </div>
//             </div>
//         </div>
//       </>
//     )
//   }
  
  export default UnoCard