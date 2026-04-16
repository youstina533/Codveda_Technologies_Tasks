import React from 'react';
import '../../assets/styles/home.css'
import { NavLink } from 'react-router-dom';

function Contact(){
    return <div>
        <div className="contact-bnt-section container-fluid">
            <p>Ready to build something remarkable?</p>
            <NavLink className="btn contact-btn  " to="/contact">START A PROJECT</NavLink>
        </div>
       
    </div>
}
export default Contact;