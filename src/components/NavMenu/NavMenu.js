import './NavMenu.css'

function NavMenu(props) {
    return (
        <ul className={`main-nav__menu ${props.open ? 'active' : ''}`}>
            {props.children}
        </ul>
    )
}

export default NavMenu