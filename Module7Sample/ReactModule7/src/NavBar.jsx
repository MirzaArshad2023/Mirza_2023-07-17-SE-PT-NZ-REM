import { NavLink } from "react-router-dom";
import './App.css'

export function NavBar()
{
    return(
        <>
            <div>
                <nav className="NavBar">
                <ul className="menu">
                    <li>
                        <NavLink to="/">Home</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Posts'>Posts</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Card'>Card</NavLink>
                    </li>
                    <li>
                        <NavLink to='/MUIForm'>MUI Form</NavLink>
                    </li>
                    <li>
                        <NavLink to='/BasicCard'>Basic Grid</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Dialog'>Dialog</NavLink>
                    </li>
                </ul>
                </nav>
            </div>
        </>
    )
}