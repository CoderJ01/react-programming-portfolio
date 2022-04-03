import React from 'react';
// import avatar from '../../assets/images/avatar.png';
// import CSS from '../../assets/images/L02_Advance-CSS_first-coding-portfolio.JPG';
// import webAPI from '../../assets/images/L04_Web-APIs_code-quiz.JPG';
// import thirdAPI from '../../assets/images/L05_Third-Party-APIs_daily-planner.JPG';
// import serverAPI from '../../assets/images/L06_Server-Side-APIs_weather-dashboard.JPG';
// import express from '../../assets/images/L11_Express-js_note-taker-for-business.JPG';
// import mvc from '../../assets/images/L14_Model-Views-Controllers_tech-blog.JPG';
// import githubIcon from '../../assets/images/GitHub-Mark/PNG/GitHub-Mark-32px.png';


function Project() {
  return (
    <section className="project">
        {/* ABOUT and PORTFOLIO section */}
        {/* stored in store.txt (gitignore) */}

        {/* CONTACT section */}
        <div id="contact">
            <h2>Contact Me</h2>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text" name="name" />
                </div>
                <br/>
                <div>
                    <label htmlFor="email">Email address:</label><br/>
                    <input type="email" name="email" />
                </div>
                <br/>
                <div>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea name="message" rows="5"  />
                </div>
                <br/>
            </form>
            <p>Message is required.</p><br/>
            <button type="submit">Submit</button>
        </div>
        
    </section>
  );
}

export default Project;