import React, {useState} from "react"
import { useEffect } from "react"
const ThemeContext = React.createContext()

function ThemeProvider(props){
    console.log("TestSix")
    const [theme, setTheme] = useState("dark")
    //the homepage has an opened and closed state
    const [isTheSiteOpen, setOpen]=useState(false)
    //allows me to switch pages with a function instead of a link, allowing me to do other stuff before sending the user away
    const [istheUserTraveling, setTravel] = useState(false)
    //there are some issues with buddy rerendering on unnecessary pages, so we'll control his location here.
    const [isBuddyHere, setBuddysAttendance] = useState(true)
    //cleaning up localstorage function
    const saveORetrieve=(string, bool)=>localStorage.getItem(string) ? (localStorage.getItem(string)==="true"? true:false):bool
    
    // let open=saveORetrieve("isTheSiteOpen", isTheSiteOpen)
    // let travel = saveORetrieve("istheUserTraveling", istheUserTraveling)
    // let buddysAttendance = saveORetrieve("isBuddyHere", isBuddyHere)



     //the information should be saved/ copied from local storage to maintain the correct state on pages after refresh theme alters the body and does not need to be saved.
    useEffect(()=>{
        localStorage.setItem("open", isTheSiteOpen)
    }, [isTheSiteOpen])

    useEffect(()=>{
        localStorage.setItem("travel", istheUserTraveling)
    }, [istheUserTraveling])
    useEffect(()=>{
        localStorage.setItem("buddysAttendance", isBuddyHere)
    }, [isBuddyHere])


    if(theme==="dark"){
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    }else{
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }  
    return(
        <ThemeContext.Provider value={{theme,setTheme, isTheSiteOpen, setOpen, istheUserTraveling, setTravel, isBuddyHere, setBuddysAttendance, saveORetrieve}}>
            {props.children}
        </ThemeContext.Provider>
    )

}
export {ThemeContext, ThemeProvider}