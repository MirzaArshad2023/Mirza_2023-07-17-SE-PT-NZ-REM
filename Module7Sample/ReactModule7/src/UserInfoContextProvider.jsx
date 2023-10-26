import { createContext, useState } from "react";

export const UserInfo = createContext(null)

export function UserInfoContextProvider(props)
{
    const [userInfo, setUserInfo]= useState({firstName:'IOD',email:'mirza@IOD.com'})                

    return(
      <UserInfo.Provider value={{firstName: userInfo.firstName, email: userInfo.email}}>
            {props.children}
      </UserInfo.Provider>
    )
}