import React from 'react'
import '../assets/styles/about.css'
import Principles from './About/Principles'
import Studio from './About/People-studio'
import Story from './About/Story'
function About() {
    return <div>
        <Story/>
        <Principles/>
        <Studio/>
    </div>
}
export default About;