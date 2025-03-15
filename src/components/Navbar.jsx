import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import "../assets/css/navbar.css";

const Navbar = () => {
    const [navOverlayActive, setNavOverlayActive] = useState(false);

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
                    <div
                        className={`nav-overlay ${navOverlayActive ? "active" : ""}`}
                        onClick={handleNavOverlayClick}
                    ></div>
                    <div
                        className={`collapse navbar-collapse ${navOverlayActive ? "show" : ""
                            }`}
                        id="navbarSupportedContent"
                    >
                        <div className="mx-auto">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item mx-3 d-none nav-logo-mobile">
                                    <NavLink to="/" className="navbar-brand">
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="img-fluid logo-main"
                                        />
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-3 nav-item-mobile">
                                    <NavLink
                                        to="/"
                                        className="nav-link"
                                        aria-current="page"
                                        activeClassName="active"
                                        exact
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-3 dropdown">
                                    <NavLink
                                        className="nav-link dropdown-toggle"
                                        activeClassName="active"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Shop <i className="bi bi-chevron-down"></i>
                                    </NavLink>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <NavLink to="/shop-men" className="dropdown-item" activeClassName="active">
                                                Men
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/shop-women" className="dropdown-item" activeClassName="active">
                                                Women
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/shop-accessories" className="dropdown-item" activeClassName="active">
                                                Accessories
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item mx-3">
                                    <NavLink
                                        to="/contact"
                                        className="nav-link"
                                        activeClassName="active"
                                    >
                                        Contact Us
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-3 mt-lg-0 mt-3">
                                    <label className="search-container">
                                        <input
                                            className="form-control mr-sm-2 search-input"
                                            type="search"
                                            placeholder="Search for products here..."
                                            aria-label="Search"
                                        />
                                        <button type="button" className="search-button border-0">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="mx-end">
                            <ul className="navbar-nav align-items-center">
                                <NavLink to="/wishlist" className="nav-link mt-lg-0 mt-3" activeClassName="active">
                                    <i className="far fa-heart me-md-2 mt-md-1"></i>
                                </NavLink>
                                <NavLink
                                    to="/cart"
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <i className="bi bi-cart me-md-3"></i>
                                </NavLink>
                                <NavLink
                                    to="/login"
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <button className="login-btn">Login</button>
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="nav-link"
                                    activeClassName="active"
                                >
                                    <button className="signup-btn me-xl-5">Sign Up</button>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
