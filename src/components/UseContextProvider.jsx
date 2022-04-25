import { createContext, useContext, useState } from "react"

const UserContext = createContext()

    export const UserProvider = ({...props}) =>{
        const [userName, setUserName] = useState('')

        const value ={
            userName,
            setUserName
        }

        return <UserContext.Provider {...props} value={value}/>
    }
    
    export const useUserContext = ()=>{
        return useContext(UserContext)
    }