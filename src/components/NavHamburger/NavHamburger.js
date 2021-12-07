import './NavHamburger.scss'

const NavHamburger = (props) => (
        <div className={`nav-hamburger ${props.open ? 'nav-hamburger--is-active' : ''}`} onClick={props.handleToggle}>
            <span className="nav-hamburger__bar"></span>
            <span className="nav-hamburger__bar"></span>
            <span className="nav-hamburger__bar"></span>
        </div>
)

export default NavHamburger