import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <span>my website</span>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/users">Users</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/posts">Posts</Link>
                
            </nav>
        </div>
    );
};

export default Header;