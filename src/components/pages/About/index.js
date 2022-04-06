import React from 'react';
import avatar from '../../../assets/images/avatar.png';

// description about myself
function About() {
    return (
        <div id="about-me">
            <h2>About</h2>
            <img src={avatar} alt="" />
            <p>
                Hello World! My name is Joshua Jones. As of Saturday April 2, 2022, I am currently in the 
                process of learning how to program via a coding bootcamp. So far, I have learned the skills needed to
                become a competent full-stack developer. For the front-end, I've learned HTML, CSS, and JavaScript; and 
                have used three types of APIs (Application Program Interfaces) - web storage, third-party, and server-side. 
                For the back-end, I learned the fundamentals of Node.js, Object-Oriented programming, Express.js, SQL, 
                Object-Relational Mapping (ORM), and Model-View-Controllers (MVC). To navigate to the webpages of 
                my websites, click on the images under "Portfolio".
            </p>
        </div>
    );
}
  
export default About;