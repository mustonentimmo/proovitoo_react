import './NavHamburger.css'

function NavHamburger (props) {
    return (
        <div className={`main-nav__hamburger ${props.open ? 'active' : ''}`} onClick={props.handleToggle}>
            <span className="main-nav__hamburger-bar"></span>
            <span className="main-nav__hamburger-bar"></span>
            <span className="main-nav__hamburger-bar"></span>
        </div>
    )
}

export default NavHamburger