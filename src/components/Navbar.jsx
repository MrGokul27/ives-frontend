import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import "../assets/css/navbar.css";

const Navbar = () => {
    const [navOverlayActive, setNavOverlayActive] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const updateUser = () => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setUser(storedUser);
        };
        updateUser();
        window.addEventListener("userUpdate", updateUser);
        return () => {
            window.removeEventListener("userUpdate", updateUser);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        window.dispatchEvent(new Event("userUpdate"));
        navigate("/login");
    };

    const handleNavOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            setNavOverlayActive(false);
        }
    };

    useEffect(() => {
        const handleToggleClick = () => {
            setNavOverlayActive(!navOverlayActive);
        };

        const button = document.querySelector(".navbar-toggler");
        if (button) {
            button.addEventListener("click", handleToggleClick);
        }

        return () => {
            if (button) {
                button.removeEventListener("click", handleToggleClick);
            }
        };
    }, [navOverlayActive]);

    return (
        <header>
            <nav className="navbar navbar-expand-lg lufga">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="logo" className="img-fluid logo-main" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`nav-overlay ${navOverlayActive ? "active" : ""}`} onClick={handleNavOverlayClick}></div>
                    <div className={`collapse navbar-collapse ${navOverlayActive ? "show" : ""}`} id="navbarSupportedContent">
                        <div className="mx-auto">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item mx-3">
                                    <NavLink to="/" className="nav-link" aria-current="page">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-3 dropdown">
                                    <NavLink className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop <i className="bi bi-chevron-down"></i>
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink to="/shop-men" className="dropdown-item">Men</NavLink></li>
                                        <li><NavLink to="/shop-women" className="dropdown-item">Women</NavLink></li>
                                        <li><NavLink to="/shop-accessories" className="dropdown-item">Accessories</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink to="/contact" className="nav-link">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-end d-flex align-items-center">
                            <NavLink to="/wishlist" className="nav-link">
                                <i className="far fa-heart me-md-4 mt-md-1"></i>
                            </NavLink>
                            <NavLink to="/cart" className="nav-link">
                                <i className="bi bi-cart me-md-4"></i>
                            </NavLink>

                            {user ? (
                                <div className="d-flex align-items-center">
                                    <span className="nav-link me-3">
                                        <i className="bi bi-person-circle"></i> {user.name}
                                    </span>
                                    <button className="logout-btn btn btn-danger" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <NavLink to="/login" className="nav-link">
                                        <button className="login-btn me-3">Login</button>
                                    </NavLink>
                                    <NavLink to="/register" className="nav-link">
                                        <button className="signup-btn">Sign Up</button>
                                    </NavLink>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
