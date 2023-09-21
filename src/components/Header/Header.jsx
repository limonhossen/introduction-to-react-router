import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <span>my website</span>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;