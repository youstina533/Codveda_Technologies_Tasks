import React from 'react'
import '../../assets/styles/navbar.css'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return <>
        <nav className="navbar navbar-expand">
                <div className="nav-logo">
                    <h2>Meri<span>.</span>dian</h2>
                </div>
                <div className="nav-links" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" >About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/work" >Work</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav-btn">
                    <NavLink className="btn btn-dark w-100 p-2" to="/contact">GET IN TOUCH</NavLink>
                </div>
        </nav>
        <hr className="line" />
    </>
}

export default NavBar;