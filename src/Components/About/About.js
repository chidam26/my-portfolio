import "./about.css"
import system from "../../Images/system.jpg"

import React from 'react'

const About = () => {
    return (
        <div className="a">
           <div className="a-left">
               <div className="a-card bg"></div>
               <div className="a-card">
                   <img 
                   src={system} 
                   alt='' 
                   className="a-img" />
               </div>
           </div>
           <div className="a-right">
               <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Keenness, Clarity, Flexibility - That's me!
                </p>
                <p className="a-desc">
                    The keenness in learning new things, the clarity while learning them,
                    and the flexibility to adopt to the changes, have made me pursue 
                    a career that's full of opportunities -- Web-Development
                </p>
           </div>
        </div>
    )
}

export default About
