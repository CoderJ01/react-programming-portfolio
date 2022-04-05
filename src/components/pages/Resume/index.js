import React from 'react';
import resume from '../../../assets/documents/resume.jpg';

function Resume () {
    return (
        <div id="resume">
            <h2>Resume</h2>
            <p>Download my<a href={resume} download>resume</a></p><br/>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul><br/>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>mySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
        </div>
    );
}

export default Resume;