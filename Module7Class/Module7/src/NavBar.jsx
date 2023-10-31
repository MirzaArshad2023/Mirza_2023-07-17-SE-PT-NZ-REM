import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'


export default function NavBar() {

    return (
        <nav className="NavBar">
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
            </ul> {/* ++ Add another page with route and component */}
        </nav>
    )
}
