import {useState} from "react";
import NavMenu from "../NavMenu/NavMenu";
import NavItem from '../NavItem/NavItem'
import NavHamburger from "../NavHamburger/NavHamburger";
import './Navbar.scss'

const Navbar = () => {
    const [open, SetOpen] = useState(false);
    const handleHamburgerToggle = () => {
        SetOpen(prev => !prev);
    }

    return(
        <nav className="main-nav">
            <NavMenu open={open}>
                <NavItem title="Home" />
                <NavItem title="Blog" />
                <NavItem title="Events" />
                <NavItem title="Gallery" />
            </NavMenu>
            <NavHamburger open={open} onToggle={handleHamburgerToggle}/>
        </nav>
    )
}

export default Navbar