import { createContext, useState } from "react";

 const initialValue = {
    darkMode : () => {},
    darkmode: false

} 


const DarkModeContext = createContext(initialValue)

const DarkModeContextProvider = ({childern}) => {
    const [darkmode, setDarkmode] = useState(false)
    
    const toggleDarkMode = () => {
        setDarkmode((mode) => !mode)
    }

    return(
        <>
        <DarkModeContext.Provider value={{darkmode , toggleDarkMode}}>
            {childern}
        </DarkModeContext.Provider>
        </>
    )
}


export {DarkModeContextProvider ,DarkModeContext}
export default DarkModeContext