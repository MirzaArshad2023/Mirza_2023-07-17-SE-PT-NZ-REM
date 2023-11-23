import { useState } from "react"
import { createContext } from "react"
import { useData } from "./useData"

export const UserInfoContext = createContext({})

export function UserInfoContextProvider(props)
{
    const [userInfo, setUserInfo] = useState({firstName:'Mirza', email:'mirza@iod.com'})

    //const validInstitutes = ['IOD', 'AUT', 'UOA'];
    //const postsData = useData("https://jsonplaceholder.typicode.com/posts?_limit=5");

    //let validData = postsData? postsData.filter(post => post.id == 6) : 'Dummy Title'

    //setUserInfo(validData.title);

    return(
        <>

        <UserInfoContext.Provider value={{firstName: userInfo.firstName, email: userInfo.email}}>
            {props.children}
        </UserInfoContext.Provider>
        </>
    )

}