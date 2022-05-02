import React from 'react';

// list proficiencies
function Skills () {
    return (
        <div id="skills">
            <h2>Skills</h2><br></br>
            {/* allow resume to be downloaded
            <p>Download my<a href={resume} download>resume</a></p><br/> */}
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

export default Skills;