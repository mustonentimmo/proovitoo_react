import {useState} from "react";
import NavHamburger from "../NavHamburger/NavHamburger";
import './Navbar.scss'

const Navbar = () => {
    const [open, SetOpen] = useState(false);
    const handleHamburgerToggle = () => {
        SetOpen(prev => !prev);
    }
    return(
        <nav className="main-nav">
            <ul className={`main-nav__menu ${open ? 'main-nav__menu--is-active' : ''}`}>
                <li className="main-nav__nav-item">
                    <a href="#" className="main-nav__nav-item__link">home</a>
                </li>
            </ul>
            <NavHamburger open={open} onToggle={handleHamburgerToggle}/>
        </nav>
    )
}

export default Navbar