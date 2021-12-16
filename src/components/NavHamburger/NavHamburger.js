import './NavHamburger.scss'

const NavHamburger = (props) => (
        <div className={`nav-hamburger${props.isOpen ? ' nav-hamburger--is-active' : ''}`} onClick={props.onToggle}>
            <span className="nav-hamburger__bar"></span>
            <span className="nav-hamburger__bar"></span>
            <span className="nav-hamburger__bar"></span>
        </div>
)

export default NavHamburger