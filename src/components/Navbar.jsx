import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-expand-lg nav">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Logo</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <NavLink activeClassName="menu_active" className="nav-link"  to="/">Home</NavLink>
                                <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                <NavLink activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
                                <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar