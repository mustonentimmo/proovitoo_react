import './NavHamburger.scss'

const NavHamburger = (props) => (
        <div className={`main-nav__hamburger ${props.open ? 'active' : ''}`} onClick={props.handleToggle}>
            <span className="main-nav__hamburger-bar"></span>
            <span className="main-nav__hamburger-bar"></span>
            <span className="main-nav__hamburger-bar"></span>
        </div>
)

export default NavHamburger