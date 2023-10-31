import { useState } from "react"
import { createContext } from "react"

export const UserInfoContext = createContext({})

export function UserInfoContextProvider(props)
{
    const [userInfo, setUserInfo] = useState({firstName:'Mirza', email:'mirza@iod.com'})

    return(
        <>
        <UserInfoContext.Provider value={{firstName: userInfo.firstName, email: userInfo.email}}>
            {props.children}
        </UserInfoContext.Provider>
        </>
    )

}