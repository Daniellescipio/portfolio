import { structureOne, structureTwo, structureThree, structureFour, structureFive, structureSix, structureSeven, structureEight, structureNine } from "./strcture.js";
import wordBank from "./words.js";
import Nav from "../../Nav.jsx"
import { useContext, useEffect, useState } from "react";
import '../games.css'
import { ThemeContext } from "../../../general/ThemeConext.jsx";
import { breakCamelCase } from "../../../general/functions.js";
export default function Sentence(){
    //different structure options
    const structures = [structureOne(), structureTwo(), structureThree(), structureFour(), structureFive(), structureSix(), structureSeven(), structureEight(), structureNine()]
    //keeps track of the structure being used
    const [rawStrIndex, setRawStrIndex] = useState(2)
    const [rawStr, setRawStr] = useState(structures[rawStrIndex])
    //drop down for each word(only one should show at a time)
    const [selectedDrop, setSelectedDrop]=useState()
    //profile theme from context
    const {theme} = useContext(ThemeContext)
    const wordPositons = rawStr.values.map((val,i)=>val.place)
    const values = rawStr.values.map(val=>val.type)
    const string = rawStr.string.split(' ')
    const [partOSpeech, setPartsOSpeech] = useState(values.reduce((final, type)=>{return final = {...final, [type]:""}}, {}))
    const [dialoge, setDialoge]=useState(false)
    const [processedString, setProcessedString] = useState(false)
    const [hideText, setHideText]= useState("hide")


    useEffect(()=>{
        //set's the raw string, this comes from structure.js
        setRawStr(structures[rawStrIndex])
    },[rawStrIndex])

    const processStr= async()=>{
        const keys = Object.keys(partOSpeech).map(key=>key[key.length-1]===key[key.length-1].toUpperCase()?key.slice(0,-1):key)
        const vals = Object.values(partOSpeech).filter((pos)=>pos)
        //this lets me know if user entered a word in the word bank(this is the only option) array with true if they did and false if they did not
        const validationArray = keys.map((key, i)=>wordBank[key].indexOf(vals[i])>=0)
        //checks to make sure all the values are true
        if(validationArray.indexOf(false)<0){
            //uses teh sentence sturcture and users chosen words to create a string
            const processedString = string.reduce((final, word, i)=>{
                //each place value *test* because only placeholders will be numbers
                const testSub = Number(word)
                //non-placeholders will return false
                if(testSub){
                    //values and word positions are extrapolated from the same raw string values array , so they have cooresponding indexes. partOSpeech is the object of user input
                    //so we get the index of the number placeholder...
                    const index = wordPositons.indexOf(testSub)
                    //and get what the user entered for that indexes cooresponding value (verb, noun, adjective, etc.)
                    const replcmt = partOSpeech[values[index]]
                    //add spaces after every word except the first and a period after the last.
                    //keep everything that was in the structure sentence except replace the number place holder with cooresponding user input. 
                    final += `${i!==0? ` `:``}${replcmt}${i<string.length-1? ` `:`.`}`
                }else{
                    final += `${i!==0? ` `:``}${word}${i<string.length-1? ` `:``}`
                }
                return final
            },``)
            setProcessedString(processedString)
        }else{
            setDialoge("Choose at least one word from each list first!")
        }
    }

    const dropDowns = values.map((val, i)=>{
        //have to remove the A's and B's attached to parts of sppech that appear multiple times while still mainatining the value with the A/B
        //search = without & val = with
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
                    {wordBank[search].filter(word=>word.indexOf(partOSpeech[val])>=0).map((opt,i)=><p  name = {val} onClick={(e)=>setPartsOSpeech((prevObj)=>{return{...prevObj, [e.target.getAttribute('name')]:e.target.getAttribute('value')}})} key = {i} value = {opt}>{opt}</p>)}
                </div>
            </div>
        )
    })
    
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
