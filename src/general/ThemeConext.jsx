import React, {useState} from "react"
import { useEffect } from "react"
const ThemeContext = React.createContext()

function ThemeProvider(props){
    const [theme, setTheme] = useState("light")
    // //the homepage has an opened and closed state
     const [open, setOpen]=useState(localStorage.getItem("open")||false)
     const [location, setLocation]=useState(false)
     console.log("Are we open? ", open)
     useEffect(()=>{
        open ? localStorage.setItem("open", true) : localStorage.setItem("open",false)
     },[open])
    // //allows me to switch pages with a function instead of a link, allowing me to do other stuff before sending the user away
    // const [istheUserTraveling, setTravel] = useState(false)
    // //cleaning up localstorage function
    // const saveORetrieve=(string, bool)=>localStorage.getItem(string) ? (localStorage.getItem(string)==="true"? true:false):bool
    
    // let open=saveORetrieve("isTheSiteOpen", isTheSiteOpen)
    // let travel = saveORetrieve("istheUserTraveling", istheUserTraveling)
    // let buddysAttendance = saveORetrieve("isBuddyHere", isBuddyHere)



    //  //the information should be saved/ copied from local storage to maintain the correct state on pages after refresh theme alters the body and does not need to be saved.
    // useEffect(()=>{
    //     localStorage.setItem("open", isTheSiteOpen)
    // }, [isTheSiteOpen])

    // useEffect(()=>{
    //     localStorage.setItem("travel", istheUserTraveling)
    // }, [istheUserTraveling])
    // useEffect(()=>{
    //     localStorage.setItem("buddysAttendance", isBuddyHere)
    // }, [isBuddyHere])


    if(theme==="dark"){
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    }else{
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }  
    //, isTheSiteOpen, setOpen, istheUserTraveling, setTravel, isBuddyHere, setBuddysAttendance, saveORetrieve
    return(
        <ThemeContext.Provider value={{theme,setTheme, open, setOpen, location, setLocation}}>
            {props.children}
        </ThemeContext.Provider>
    )

}
export {ThemeContext, ThemeProvider}