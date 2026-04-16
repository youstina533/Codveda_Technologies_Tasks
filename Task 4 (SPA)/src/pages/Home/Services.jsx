import React from 'react';
import '../../assets/styles/home.css'

function Services(){
    return <div>
       <div className="services ">
        <div className="services-title">
            <h1>Full-spectrum <br></br>creative services</h1>
        </div>
        <div className="services-carts row">
            <div className="col-lg-3 col-md-6 col-sm-12 service-cart">
                <h2>01</h2>
                <h3>Brand Strategy</h3>
                <p>We define your unique positioning and craft a brand identity that resonates deeply with your target audience.</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-cart">
                <h2>02</h2>
                <h3>Product Design</h3>
                <p>User-centered design that balances aesthetics and function, creating experiences people love to use.</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-cart">
                <h2>03</h2>
                <h3>Development</h3>
                <p>Clean, scalable code built on modern frameworks, optimized for performance and long-term maintainability.</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 service-cart">
                <h2>04</h2>
                <h3>Digital Marketing</h3>
                <p>Data-driven campaigns that reach the right audience at the right moment across every channel.</p>
            </div>
        </div>
       </div>
    </div>
}
export default Services;