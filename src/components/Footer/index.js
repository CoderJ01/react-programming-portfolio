import React from "react";
import githubIcon from '../../assets/images/GitHub-Mark/PNG/GitHub-Mark-32px.png';
import linkedIcon from '../../assets/images/LinkedIn-Logos/logo.png';
import facebookIcon from '../../assets/images/Facebook/facebook.png';

// place icons on the bottom of the screen
function Footer () {

    return (
        <footer>
            <a href="https://github.com/CoderJ01" rel="noopener noreferrer" target="_blank">
                <img className="git" src={githubIcon} alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/joshua-jones-3356441ab" rel="noopener noreferrer" target="_blank">
                <img className="linked" src={linkedIcon} alt=""/>
            </a>
            <a href="https://www.facebook.com/joshua.jones.399826" rel="noopener noreferrer" target="_blank">
                <img className="facebook" src={facebookIcon} alt=""/>
            </a>
        </footer>
    );
}

export default Footer;