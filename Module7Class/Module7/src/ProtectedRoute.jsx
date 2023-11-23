import { UserInfoContext } from "./UserInfoContextProvider"
import { useContext } from "react"
import { Navigate } from "react-router-dom";
export function ProtectedRoute({ redirectPath = '/login', children })
{
    const {firstName, email} = useContext(UserInfoContext);

    if(!firstName)
        return <Navigate to={redirectPath}></Navigate>
   
    return children ? children : <Outlet/>;
}