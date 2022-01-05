import React from 'react';
import './NavHamburger.scss'

interface NavHamburgerProps {
    isOpen: boolean;
    onToggle: () => void;
}

const NavHamburger: React.FC<NavHamburgerProps> = (props) => (
        <div className={`nav-hamburger${props.isOpen ? ' nav-hamburger--is-active' : ''}`} onClick={props.onToggle}>
            <span className="nav-hamburger__bar"></span>
            <span className="nav-hamburger__bar"></span>
            <span className="nav-hamburger__bar"></span>
        </div>
)

export default NavHamburger