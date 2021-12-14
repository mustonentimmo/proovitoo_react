import {useState} from "react";
import NavHamburger from "../NavHamburger/NavHamburger";
import './Navbar.scss'

const Navbar = () => {
    const [open, SetOpen] = useState(false);
    const handleHamburgerToggle = () => {
        SetOpen(prev => !prev);
    }

    let links = [
        {id: 1, title: 'Home'},
        {id: 2, title: 'Blog'},
        {id: 3, title: 'Events'},
        {id: 4, title: 'Gallery'}
    ];

    return(
        <nav className="navbar">
            <ul className={`navbar__menu ${open ? 'navbar__menu--is-active' : ''}`}>
                {
                    links.map(link => (
                        <li key={link.id} className="navbar__menu-item">
                            <a href="#" className="navbar__menu-item__link">{link.title}</a>
                        </li>
                        )
                    )
                }
            </ul>
            <NavHamburger open={open} onToggle={handleHamburgerToggle}/>
        </nav>
    )
}

export default Navbar