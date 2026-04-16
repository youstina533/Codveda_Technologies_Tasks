import React from 'react';
import '../../assets/styles/home.css'

function Numbers(){
    return <div>
        <div className='Numbers-section row'>
            <div className="number-part col-lg-3 col-md-6 col-sm-12">
               <h2>248 <span>+</span></h2>
               <p>PRPJECTS COMPLETED</p>
            </div>
            <div className="number-part col-lg-3 col-md-6 col-sm-12">
               <h2>120 <span>+</span></h2>
               <p>HAPPY CLIENTS</p>
            </div>
            <div className="number-part col-lg-3 col-md-6 col-sm-12">
               <h2>12</h2>
               <p>YEARS EXPERIENCE</p>
            </div>
            <div className="number-part col-lg-3 col-md-6 col-sm-12">
               <h2>4</h2>
               <p>DESIGN AWARDS</p>
            </div>
        </div>
       
    </div>
}
export default Numbers;