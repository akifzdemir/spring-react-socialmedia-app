import { createContext } from "react";

const UserContext = createContext()


export const UserProvider = ({children})=>{



    const values = {

    }

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}