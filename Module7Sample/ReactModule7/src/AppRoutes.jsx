import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"
import { Contact } from "./Contact"
import { Users } from "./Users"
import { NewUser } from "./NewUser"
import { UsersLayout } from "./UsersLayout"
import PostListReducer from "./PostListReducer"
import { CustomCard } from "./CustomCard"
import { MUIForm } from "./MUIForm"
import { BasicGrid } from "./BasicGrid"
import { Dialog } from "@mui/material"
import MUIDialog from "./MUIDialog"
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
                <Route path="/Posts" element={<PostListReducer></PostListReducer>}>

                </Route>
                <Route path="/Card" element={<CustomCard></CustomCard>}>

                </Route>
                <Route path="/MUIForm" element={<MUIForm></MUIForm>}>

                </Route>
                <Route path="/BasicCard" element={<BasicGrid></BasicGrid>}>

                </Route>
                <Route path="/Dialog" element={<MUIDialog text="Would you like to Continue?"></MUIDialog>}></Route>
                <Route path="Contact" element={<Contact></Contact>}></Route>  
                <Route path="*" element={<Home></Home>}></Route>
            </Routes>
        </>
    )
}