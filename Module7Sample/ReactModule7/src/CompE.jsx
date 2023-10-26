import { useContext } from "react"
import { UserInfo } from "./UserInfoContextProvider"

export function CompE()
{
    const {firstName, email} = useContext(UserInfo)   
    return(
        <>
            <div><p>..........................................................CompE</p></div>
            <div>
                <p>FirstName:{firstName}</p>
                <p>Email:{email}</p>
            </div>
        </>
    )
}