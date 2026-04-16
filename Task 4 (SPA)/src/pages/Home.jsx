import React from "react";
import "../assets/styles/home.css";
import Hero from "./Home/Hero-section"
import Voice from "./Home/Client-voice"
import Contact from "./Home/Contact-btn-home.jsx"
import Services from "./Home/Services"
import Numbers from "./Home/Numbers-section"
function Home() {
  return <div>
    <Hero/>
    <Services/>
    <Numbers/>
    <Voice/>
    <Contact/>
  </div>;
}
export default Home;
