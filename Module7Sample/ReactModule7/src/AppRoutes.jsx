import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Contact } from "./Contact"
import { Users } from "./Users"
import { NewUser } from "./NewUser"
import { UsersLayout } from "./UsersLayout"
export function AppRoutes()
{
    return(
        <>
            <Routes>
                <Route index element={<Home></Home>}></Route>
                <Route path="About" element={<About></About>}></Route>
                <Route path="/Users" element={<UsersLayout></UsersLayout>}>
                    <Route path=":id" element={<Users></Users>}></Route>
                    <Route path="new" element={<NewUser></NewUser>}></Route>
                </Route>
                
                <Route path="Contact" element={<Contact></Contact>}></Route>  
                <Route path="*" element={<Home></Home>}></Route>
            </Routes>
        </>
    )
}