import React from 'react';
import womanEmployee1 from '../../assets/images/womanEmployee1.png';
import womanEmployee2 from '../../assets/images/womanEmployee2.png';
import manEmployee1 from '../../assets/images/manEmployee1.png';
import manEmployee2 from '../../assets/images/manEmployee2.png';
import '../../assets/styles/about.css'

function Studio(){
    return <div>
       <div className="container-fluied people-studio-section">
            <div className="studio-title">
                <h1>Meet the studio</h1>
            </div>
            <div className="studio-cards row">
                <div className="studio-card  col-lg-3 col-md-6 col-sm-12">
                    <div className="studio-card-image">
                        <img src={womanEmployee1} alt="studio-people" />
                    </div>
                    <div className="studio-card-content">
                     <h5>Sophie Chen</h5>
                     <p>Lead Designer</p>
                    </div>
                </div>
                <div className="studio-card col-lg-3 col-md-6 col-sm-12">
                    <div className="studio-card-image">
                        <img src={manEmployee1} alt="studio-people" />
                    </div>
                    <div className="studio-card-content">
                        <h5>James Kowalski</h5>
                        <p>Creative Director</p>
                    </div>
                </div>
                <div className="studio-card col-lg-3 col-md-6 col-sm-12">
                    <div className="studio-card-image">
                        <img src={womanEmployee2} alt="studio-people" />
                    </div>
                    <div className="studio-card-content">
                        <h5>Anika Roth</h5>
                        <p>Brand Strategist</p>
                    </div>
                </div>
                <div className="studio-card col-lg-3 col-md-6 col-sm-12">
                    <div className="studio-card-image">
                        <img src={manEmployee2} alt="studio-people" />
                    </div>
                    <div className="studio-card-content">
                        <h5>Marcus Osei</h5>
                        <p>Head of Dev</p>
                    </div>
                </div>
            </div>
       </div>
    </div>
}
export default Studio;