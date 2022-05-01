import React from 'react';
import CSS from '../../../assets/images/L02_Advance-CSS_first-coding-portfolio.JPG'
import webAPI from '../../../assets/images/L04_Web-APIs_code-quiz.JPG';
import thirdAPI from '../../../assets/images/L05_Third-Party-APIs_daily-planner.JPG';
import serverAPI from '../../../assets/images/L06_Server-Side-APIs_weather-dashboard.JPG';
import express from '../../../assets/images/L11_Express-js_note-taker-for-business.JPG';
import mvc from '../../../assets/images/L14_Model-Views-Controllers_tech-blog.JPG';
import MERN from '../../../assets/images/L23_P3_MERN-SPA_Nelp.JPG';
import githubIcon from '../../../assets/images/GitHub-Mark/PNG/GitHub-Mark-32px.png';

// portfolio section, six applications, 'display: flex' in pairs
function Portfolio() {
    return (
        <div id="portfolio">
            <h2>Portfolio</h2>
            <div className="content">
                <div className="pair-wrapper">
                    <div className="application">
                        <a href="https://coderj01.github.io/coding-portfolio-website/" rel="noreferrer" target="_blank">First Portfolio</a>
                        <img className="main-display" src={CSS} alt="" />
                        <a href="https://github.com/CoderJ01/coding-portfolio-website" rel="noreferrer" target="_blank">
                            <img className="gitHub" src={githubIcon} alt=""/>
                        </a>
                    </div>
                    <div className="application">
                        <a href="https://coderj01.github.io/javascript-code-quiz/" rel="noreferrer" target="_blank">Code Quiz</a>
                        <img className="main-display" src={webAPI} alt="" />
                        <a href="https://github.com/CoderJ01/javascript-code-quiz" rel="noreferrer" target="_blank">
                            <img className="gitHub" src={githubIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="pair-wrapper">
                    <div className="application">
                        <a href="https://coderj01.github.io/daily-planner/" rel="noreferrer" target="_blank">Daily Planner</a>
                        <img className="main-display" src={thirdAPI} alt="" />
                        <a href="https://github.com/CoderJ01/daily-planner" rel="noreferrer" target="_blank">
                            <img className="gitHub" src={githubIcon} alt=""/>
                        </a>
                    </div>
                    <div className="application">
                        <a href="https://coderj01.github.io/weather-dashboard-2/" rel="noreferrer" target="_blank">Weather Dashboard</a>
                        <img className="main-display" src={serverAPI} alt="" />
                        <a href="https://github.com/CoderJ01/weather-dashboard-2" rel="noreferrer" target="_blank">
                            <img className="gitHub" src={githubIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="pair-wrapper">
                    <div className="application">
                        <a href="https://note-taker-for-business.herokuapp.com/notes" rel="noreferrer" target="_blank">Note Taker for Business</a>
                        <img className="main-display" src={express} alt="" />
                        <a href="https://github.com/CoderJ01/note-taker-for-business" rel="noreferrer" target="_blank">
                            <img className="gitHub" src={githubIcon} alt=""/>
                        </a>
                    </div>
                    <div className="application">
                        <a href="https://c-tech-blog.herokuapp.com" rel="noreferrer" target="_blank">Tech Blog</a>
                        <img className="main-display" src={mvc} alt="" />
                        <a href="https://github.com/CoderJ01/tech-blog-2" rel="noreferrer" target="_blank">
                            <img className="gitHub tech" src={githubIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="pair-wrapper">
                    <div className="application">
                        <a href="https://national-parks-reviews.herokuapp.com/" rel="noreferrer" target="_blank">Nelp</a>
                        <img className="main-display" src={MERN} alt="" />
                        <a href="https://github.com/CoderJ01/review-site?organization=CoderJ01&organization=CoderJ01" rel="noreferrer" target="_blank">
                            <img className="gitHub" src={githubIcon} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default Portfolio;