import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='container'>
            <Link className='nav_button' to="/">Home</Link>
            <Link className='nav_button' to="/category">Category</Link>
            <Link className='nav_button' to="/product">Product</Link>
        </nav>
    );
}

export default Nav;