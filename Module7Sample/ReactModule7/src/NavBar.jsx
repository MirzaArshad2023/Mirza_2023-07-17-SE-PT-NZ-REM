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
                </ul>
                </nav>
            </div>
        </>
    )
}