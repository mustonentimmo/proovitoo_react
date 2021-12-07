import './NavMenu.scss'

const NavMenu = (props) => (
        <ul className={`main-nav__menu ${props.open ? 'main-nav__menu--is-active' : ''}`}>
            {props.children}
        </ul>
)

export default NavMenu