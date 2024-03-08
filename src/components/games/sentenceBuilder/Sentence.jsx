import { structureOne, structureTwo, structureThree, structureFour, structureFive, structureSix, structureSeven, structureEight, structureNine } from "./strcture.js";
import wordBank from "./words.js";
import Nav from "../../Nav.jsx"
import { useContext, useEffect, useState } from "react";
import '../games.css'
import { ThemeContext } from "../../../ThemeConext.jsx";
export default function Sentence(){
    const structures = [structureOne(), structureTwo(), structureThree(), structureFour(), structureFive(), structureSix(), structureSeven(), structureEight(), structureNine()]
    const [rawStrIndex, setRawStrIndex] = useState(0)
    const [rawStr, setRawStr] = useState(structures[rawStrIndex])
    const [selectedDrop, setSelectedDrop]=useState()
    const {theme} = useContext(ThemeContext)
    const values = rawStr.values.map(val=>val.type)
    const string = rawStr.string.split(' ')
    const [partOSpeech, setPartsOSpeech] = useState(values.reduce((final, type)=>{return final = {...final, [type]:false}}, {}))
    const [dialoge, setDialoge]=useState(false)
    const [processedString, setProcessedString] = useState(false)
    const [hideText, setHideText]= useState("hide")

    const wordPositons = rawStr.values.map((val,i)=>val.place)
    useEffect(()=>{
        setRawStr(structures[rawStrIndex])
        setPartsOSpeech(values.reduce((final, type)=>{return final = {...final, [type]:false}}, {}))
    },[rawStrIndex])
    function breakCamelCase(str) {
        const arr = str.split("")
        for(let i =0;i<arr.length;i++){
          if(arr[i]=== arr[i].toUpperCase()&&arr[i]!==" "){
            arr.splice([i], 0, " ")
           i+=2
          }
        }
        return arr.join("")
    }

    const processStr=()=>{
        const keys = Object.keys(partOSpeech)
        const vals = Object.values(partOSpeech).filter((pos)=>pos)
        console.log(keys, vals)
        if(keys.length===vals.length){
            const processedString = string.reduce((final, word, i)=>{
                const testSub = Number(word)
                if(testSub){
                    const index = wordPositons.indexOf(testSub)
                    const replcmt = partOSpeech[values[index]]
                    final += `${i!==0? ` `:``}${replcmt}${i<string.length-1? ` `:`.`}`
                }else{
                    final += `${i!==0? ` `:``}${word}${i<string.length-1? ` `:``}`
                }
                return final
            },``)
            setProcessedString(processedString)
        }else{
            setDialoge("Finish building your sentence first!")
        }
    }

    const dropDowns = values.map((val, i)=>{
        let search = val
        if(val[val.length-1]===val[val.length-1].toUpperCase()){
            search = val.slice(0,-1)
        }
        return(
            <div key = {`${i}`}>
                <input
                className={theme}
                value = {partOSpeech[val]||""}
                name = {val}
                placeholder={breakCamelCase(val)}
                onChange={(e)=>setPartsOSpeech((prevObj)=>{return{...prevObj, [e.target.name]:e.target.value}})}
                onClick={()=>{setSelectedDrop(i)}}
                />
                <div id = {val} className={`fauxDrop ${theme === "dark" ? "light":"dark"} ${i === selectedDrop ? "selected":""}`}>
                    {wordBank[search].map((opt, i)=><p  name = {val} onClick={(e)=>setPartsOSpeech((prevObj)=>{return{...prevObj, [e.target.getAttribute('name')]:e.target.getAttribute('value')}})} key = {i} value = {opt}>{opt}</p>)}
                </div>
            </div>
        )
    })
    console.log()
    
    window.addEventListener("click", (e)=>{
        const check = e.target.name||e.target.getAttribute('name')
        if(values.indexOf(check)<0){
            setSelectedDrop("")

        }
        if(check !=="avoidGlobalClick"){
            dialoge && setDialoge("")
        }
    })
    
    return( 
        <>
            {dialoge && <p>{dialoge}</p>}
            <button className = {`roundWhim ${theme}`} onClick={()=>hideText === ""? setHideText('hide'):setHideText('')}>{hideText === ""?`Hide incomplete sentence`:`View incomplete sentence`}</button>
            <button className = {`roundWhim ${theme}`} name ="avoidGlobalClick" onClick={processStr}>Complete Sentence</button>
            <button className = {`roundWhim ${theme}`} onClick={()=>rawStrIndex<=structures.length ? setRawStrIndex(rawStrIndex+1):setRawStrIndex(0)}>New structure</button>
            <div className ={`sentence ${theme}`}>
                {
                    string.reduce((final, word, i)=>{
                        //the places for user input have numbers in as their placeholders in the string. So if it can be turned into a number it's  a value that needs to be substituted.
                        const noBlur = word === "."||word === ","||word === "!"||word === "?"
                        const testSub = Number(word)
                        if(testSub){
                            //the index of the number in the position array should correspond to the appropriate dropdown menu
                            const index = wordPositons.indexOf(testSub)
                            const replcmt = dropDowns[index]
                            final.push(replcmt)
                        }else{
                            final.push(<p className = {!noBlur ?hideText:undefined} key = {100+i}>{word}</p>)
                        }
                        return final
                    },[])
                }
            </div>
            {processedString &&
            <div className="processedString">
                <p>Wow what a sentence:</p>
                <div>
                    <b>**</b><p>{processedString}</p><b>**</b>
                </div>
                <p>Great Work, I'll save this for you, try a new sentence structure!</p>
            </div>
            }
        </>
    )
}
