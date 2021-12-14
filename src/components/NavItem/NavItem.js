import './NavItem.scss'

const navItem = (props) => (
        <li className="main-nav__nav-item">
            <a href="#" className="main-nav__nav-item__link">{props.title}</a>
        </li>
)

export default navItem