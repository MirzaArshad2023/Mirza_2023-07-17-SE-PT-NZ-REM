import { Link, Outlet } from "react-router-dom";
export function NavigationLayout()
{

    return(
        <>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <Outlet></Outlet>
        </>
    );
}