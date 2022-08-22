import React, {useState} from "react"
const ThemeContext = React.createContext()

function ThemeProvider(props){
    const [theme, setTheme] = useState("dark")
    console.log(theme, setTheme)
    if(theme==="dark"){
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    }else{
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }  
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}
export {ThemeContext, ThemeProvider}