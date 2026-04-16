import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/styles/home.css'

function Hero(){
    return <div>
        <div className="container hero-section row">
          <div className="col-lg-6 col-md-12 col-sm-12 hero-details">
                <h1>We craft <span>bold</span> digital experiences</h1>
                <p>Transforming ideas into award-winning digital <br></br>products.
                    We blend strategy, design, and technology <br></br> to help brands leave
                    a lasting impression.</p>
                <div className="hero-btns">
                    <NavLink className="btn btn-dark w-25 work-btn" to="/work">VIEW OUR WORK</NavLink>
                    <NavLink className="btn w-25 about-btn" to="/about">OUR STORY</NavLink>
                </div>
            </div>
            <div className="col-lg-6 hero-carts">
                <div className="row all-carts g-5">
                    <div className="col-lg-10 col-md-10 large-cart">
                        <p>Projects Delivered <br></br><span className="no">248</span><br></br>+32% from last year</p>
                    </div>
                    <div className="col-lg-5 col-md-5 first-small-cart">
                        <p>Client Satisfaction <br></br><span className="no">98%</span><br></br>Based on 200+ reviews</p>
                    </div>
                    <div className="col-lg-5 col-md-5 second-small-cart">
                        <p>Years of Experience <br></br> <span className="no">12</span> <br></br> Since 2013</p>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
}
export default Hero;