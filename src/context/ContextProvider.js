import React,{createContext,useState,useContext} from 'react';
const StateContext=createContext();


export const ContextProvider = ({children})=>{
const [themesettings, setthemesettings] = useState(false)



    return(
        <StateContext.Provider value={{ themesettings, setthemesettings}}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext=()=>useContext(StateContext)