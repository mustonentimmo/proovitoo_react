import {useState} from "react";
import NavHamburger from "../NavHamburger/NavHamburger";
import './Navbar.scss'

const Navbar = () => {
    const [open, SetOpen] = useState(false);
    const handleHamburgerToggle = () => {
        SetOpen(prev => !prev);
    }
    return(
        <nav className="navbar">
            <ul className={`navbar__menu ${open ? 'navbar__menu--is-active' : ''}`}>
                <li className="navbar__menu-item">
                    <a href="#" className="navbar__menu-item__link">home</a>
                </li>
            </ul>
            <NavHamburger open={open} onToggle={handleHamburgerToggle}/>
        </nav>
    )
}

export default Navbar