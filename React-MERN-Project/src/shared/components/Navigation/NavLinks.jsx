import './NavLinks.css';
import { NavLink } from 'react-router-dom';

export default function NavLinks (props) {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to='/'>All Users</NavLink>
            </li>
            <li>
                <NavLink to='/'>MY PLACES</NavLink>
            </li>
            <li>
                <NavLink to='/'>NEW PLACE</NavLink>
            </li>
            <li>
                <NavLink to='/'>AUTHENTICATE</NavLink>
            </li>
        </ul>
    )
}