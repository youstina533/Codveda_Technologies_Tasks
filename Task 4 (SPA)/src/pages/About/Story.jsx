import React from 'react';
import '../../assets/styles/about.css'
import Storyimage from '../../assets/images/Story1.png';

function Story(){
    return <div>
       <div className='story-section row'>
        <div className='story-details col-lg-6 col-md-6 col-sm-12'>
            <h1>Fourteen hands,<br/>one <span>vision</span></h1>
            <p>Founded in 2013, Meridian began as a two-person experiment <br/> in a Shoreditch flat.
                Today we're a fourteen-strong studio working <br/> with brands across four continents.
                Our obsession hasn't changed <br/> — we believe great design changes behaviour.
                We're proudly <br/> independent, which means our only obligation is to make exceptional <br/> work for exceptional clients.</p>
        </div>
        <div className="story-image mt-5 col-lg-6 col-md-6 col-sm-12">
            <img src={Storyimage} alt="logo" />
        </div>
       </div>
    </div>
}
export default Story;