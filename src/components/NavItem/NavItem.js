import './NavItem.scss'

const navItem = (props) => (
        <li className="main-nav__menu-item">
            <a href="#" className="main-nav__menu-item-link">{props.title}</a>
        </li>
)

export default navItem