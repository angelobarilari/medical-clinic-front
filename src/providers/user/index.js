import { createContext, useState, useEffect } from "react";

export const UserDataContext = createContext([])

export const UserDataProvider = ({children}) => {
    const [userIsLogged, setUserIsLogged] = useState(undefined)

    const token = localStorage.getItem("@MEDICALCLINIC-TOKEN")

    useEffect(() => {
        if (token) { 
            setUserIsLogged(true)
        } else {
            setUserIsLogged(false)
        }
    }, [token])

    const [userData, setUserData] = useState(undefined)

    return (
        <UserDataContext.Provider 
            value={{userIsLogged, 
                setUserIsLogged, 
                userData, 
                setUserData}}
        >
            {children}
        </UserDataContext.Provider>
    )
} 

