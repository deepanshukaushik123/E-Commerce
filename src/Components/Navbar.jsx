import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    let navigate = useNavigate()
    function logout() {
        localStorage.clear()
        navigate("/login")
    }
    return (
        <>
            <header id="header" className="site-header header-scrolled sticky-top text-black bg-light">
                <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="/images/main-logo.png" className="logo" />
                        </Link>
                        <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <i className='fa fa-bars text-dark fs-1'></i>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                            <div className="offcanvas-header px-4 pb-0">
                                <Link className="navbar-brand" to="/">
                                    <img src="/images/main-logo.png" className="logo" />
                                </Link>
                                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link me-4 active" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link me-4" to="/shop">Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link me-4" to="/shop?mc=Male">Male</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link me-4" to="/shop?mc=Female">Female</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link me-4" to="/shop?mc=Kids">Kids</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link me-4" to="/contact-us">Contact Us</Link>
                                    </li>
                                   {
                                    localStorage.getItem("login")?
                                    <li className="nav-item dropdown">
                                    <Link className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">{localStorage.getItem("name")}</Link>
                                    <ul className="dropdown-menu">
                                       {
                                        localStorage.getItem("role") === "buyer"?
                                        <>
                                         <li>
                                            <Link to="/profile" className="dropdown-item">Profile</Link>
                                        </li>
                                        <li>
                                            <Link to="/cart" className="dropdown-item">Cart</Link>
                                        </li>
                                        <li>
                                            <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                        </li>
                                        </>:
                                        <li>
                                        <Link to="/admin" className="dropdown-item">Admin</Link>
                                    </li>
                                       }
                                        <li>
                                            <Button className="dropdown-item" onClick={logout}>Logout</Button>
                                        </li>
                                    </ul>
                                </li>:
                                 <li>
                                 <Link to="/login" className="dropdown-item">Login</Link>
                             </li>
                                   }
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
