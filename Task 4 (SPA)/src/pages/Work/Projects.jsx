import '../../assets/styles/work.css'
import skincare from '../../assets/images/skincare-img.png'
import beacon from '../../assets/images/beacon-img.png'
import candor from '../../assets/images/candor-img.png'
import restaurant from '../../assets/images/restaurant-img.png'
import ecommerce from '../../assets/images/ecommerce-img.png'
import brandidentity from '../../assets/images/brandidentity-img.png'

function Projects(){
    return <div>
        <div className="container-fluid projects-section">
            <div className ="projects-title container-fluid">
                <h1>Projects we're proud of</h1>
                <p>A curated selection of our recent work across brand and digital world.</p>
            </div>
            <div className="projects-cards row container">
                <div className="project-card col-lg-3 col-md-5 col-sm-12">
                    <div className="project-card-img">
                        <img src={skincare} alt="skincare" />
                    </div>
                    <div className="project-card-content">
                        <h6>BRAND IDENTITY</h6>
                        <h5>Aura Skincare</h5>
                        <p>Complete rebrand and packaging system for a luxury direct-to-consumer skincare line.</p>
                    </div>
                </div>
                <div className="project-card col-lg-3 col-md-5 col-sm-12">
                    <div className="project-card-img">
                        <img src={beacon} alt="beacon" />
                    </div>
                    <div className="project-card-content">
                        <h6>PRODUCT DESIGN</h6>
                        <h5>Beacon App</h5>
                        <p>End-to-end UX/UI for a real-time collaboration tool used by 40k+ teams.</p>
                    </div>
                </div>
                <div className="project-card col-lg-3 col-md-5 col-sm-12">
                    <div className="project-card-img">
                        <img src={candor} alt="candor" />
                    </div>
                    <div className="project-card-content">  
                        <h6>WEB PLATFORM</h6>
                        <h5>Candor Finance</h5>
                        <p>A transparent investment platform connecting retail investors with vetted funds.</p>
                    </div>
                </div>
                <div className="project-card col-lg-3 col-md-5 col-sm-12">
                    <div className="project-card-img">
                        <img src={restaurant} alt="restaurant" />
                    </div>
                    <div className="project-card-content">
                        <h6>RESTAURANT APP</h6>
                        <h5>The Heritage Grill.</h5>
                        <p>A modern mobile app for a popular restaurant chain, offering seamless ordering and payment experiences.</p>
                    </div>
                </div>
                <div className="project-card col-lg-3 col-md-5 col-sm-12">
                    <div className="project-card-img">
                        <img src={ecommerce} alt="ecommerce" />
                    </div>
                    <div className="project-card-content">
                        <h6>E-COMMERCE</h6>
                        <h5>Zara</h5>
                        <p>A comprehensive e-commerce solution for the global fashion retailer.</p>
                    </div>
                </div>
                 <div className="project-card col-lg-3 col-md-5 col-sm-12">
                    <div className="project-card-img">
                        <img src={brandidentity} alt="brand identity" />
                    </div>
                    <div className="project-card-content">
                        <h6>BRAND + DEV</h6>
                        <h5>Flux Ventures</h5>
                        <p>Brand identity and investor relations microsite for a growth equity firm.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}           
export default Projects;
                    