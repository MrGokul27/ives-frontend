import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Ives's Clothing</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/wishlist">Wishlist</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
