import React, { useState } from "react";
import userContext from "./context";

const userContextProvider = ({children}) =>{

    const [user,setUser] = useState('');
    const [password, setPassword] = useState('')


    return(
        <userContext.Provider value={{user,setUser,password,setPassword}}> 
            {children}
        </userContext.Provider>
    )

}

export default userContextProvider;