import { useState } from "react"
function UnoCard({num, color, setDisplay, display, id}) {
    const colorArray= ["redColor", "blueColor", "yellowColor", "greenColor"]
    const [hover, setHover] = useState("")
                    //if it is a skip or reverse card we use google icon class.
    const smallClass =(position)=> `${num === "block" || num === "repeat" ? "material-symbols-outlined" : undefined} sm num ${position}`
    const bigClass = `${num === "block" || num === "repeat" ? "material-symbols-outlined" : num === "D"? "drawTwo" :undefined} ${color}Color`
    const wildCircle = (sz, num)=><>
      <div className = {"wildCircle "+sz}>
        <div className="redBackGround"></div>
        <div className="blueBackGround"></div>
        <div className="yellowBackGround"></div>
        <div className="greenBackGround"></div>
        <p className={bigClass}>{sz==="bgCirc" && num.split("").map((en,i)=><p className={colorArray[i]}>{en}</p>)}</p>
      </div>
    </>
    const numDislay = (size)=>{
      let cardVal = num
      if(num ==="WILD" && size === "sm"){
        //the wild cirle should be the display
      }else if(num ==="+2" && size === "big"){
        //two overlapping rectangles with box shadow
      }else if(num ==="+4" && size === "big"){
       //four overlapping rectangles with box shadow
      }
      const bigReturn = num !== "WILD" ? <p className={bigClass}>{num}</p>:wildCircle("bgCirc", num)
      return size === "big" ? bigReturn  : num
    }
    return (
      <>
       <div className={hover+" container"} id = {id}>
            <div className={`${hover} unoCard ${display === id ? "display":undefined}`} onClick={()=>{
                hover === "flipped"?setHover(""):setHover("flipped")
                setDisplay(id)
                }} >
                <div className="card front">
                    <div><p>UNO</p></div>
                </div>
                <div className={color + "BackGround card back icon"}>
                    <div className={smallClass("a")}>{numDislay("sm")}</div>
                    <div className="big num icon">{numDislay("big")}</div>
                    <div className={smallClass("b")}>{numDislay("sm")}</div>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default UnoCard