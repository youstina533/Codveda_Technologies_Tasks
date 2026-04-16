import React from 'react';
import '../../assets/styles/about.css'

function Principles(){
    return <div>
       <div className="Principles-Section container-fluid">
        <div ClassName= "Principles-title">
            <h1>Principles we never compromise on</h1>
        </div>
        <div className="Principles-cards row">
            <div className="Principles-card col-lg-3 col-md-6 col-sm-12">
                <h5 className="icon">◈</h5>
                <h5>Craft</h5>
                <p>Every pixel, every line of code is a deliberate decision made in service of the end user.</p>
            </div>
            <div className="Principles-card col-lg-3 col-md-6 col-sm-12">
                <h5 className="icon">◉</h5>
                <h5>Honesty</h5>
                <p>We tell you what you need to hear, not just what you want. Straight talk builds better products</p>
            </div>
            <div className="Principles-card col-lg-3 col-md-6 col-sm-12">
                <h5 className="icon">◎</h5>
                <h5>Curiosity</h5>
                <p>We stay hungry, constantly learning and experimenting to bring you fresh thinking.</p>
            </div>
            <div className="Principles-card col-lg-3 col-md-6 col-sm-12">
                <h5 className="icon">◇</h5>
                <h5>Impact</h5>
                <p>We measure our success by the measurable difference we make to your business.</p>
            </div>
        </div>
       </div>
      </div>
}
export default Principles;