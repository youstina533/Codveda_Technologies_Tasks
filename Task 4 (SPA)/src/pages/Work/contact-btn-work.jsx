import '../../assets/styles/work.css'
import { NavLink } from 'react-router-dom';
function ContactBtn(){
    return <div className="container contact-btn-section">
        <div className="contact-btn-dev container">
            <p>Have a project in mind?</p>
            <NavLink className="btn dev-contact-btn" to="/contact">START A CONVERSATION</NavLink>
        </div>
    </div>
}   
export default ContactBtn;