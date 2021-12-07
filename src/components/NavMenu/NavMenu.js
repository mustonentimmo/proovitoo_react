import './NavMenu.scss'

const NavMenu = (props) => (
        <ul className={`main-nav__menu ${props.open ? 'active' : ''}`}>
            {props.children}
        </ul>
)

export default NavMenu