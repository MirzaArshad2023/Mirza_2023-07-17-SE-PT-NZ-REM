import { useContext } from "react"
import { UserInfoContext } from "./UserInfoContextProvider"
export function CompE()
{
    const {firstName, email} = useContext(UserInfoContext)
    return(<>
        <p>Component E..</p>
        <p>firstName: {firstName} Email: {email}</p>
    </>)
}