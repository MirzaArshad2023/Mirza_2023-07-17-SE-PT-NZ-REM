import { Link, Outlet } from "react-router-dom"
export function UsersLayout()
{
    return(<>
         <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
        <Outlet></Outlet>
    </>)
}