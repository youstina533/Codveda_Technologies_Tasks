import React from 'react'
import '../../assets/styles/footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
    return <div>
        <footer className="footer">
                <div className="footer-logo">
                    <h2>Meri<span>.</span>dian</h2>
                </div>
                <div className="container" >
                    <ul className="footer-links">
                        <li className="footer-item">
                            <NavLink className="footer-link" to="/" >Home</NavLink>
                        </li>
                        <li className="footer-item">
                            <NavLink className="footer-link" to="/about" >About</NavLink>
                        </li>
                        <li className="footer-item">
                            <NavLink className="footer-link" to="/work" >Work</NavLink>
                        </li>
                        <li className="footer-item">
                            <NavLink className="footer-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="copy-right">
                        <p>&copy;  2025 Meridian Studio.</p>
                    </div>
                </div>
        </footer>
    </div>
}
export default Footer;
