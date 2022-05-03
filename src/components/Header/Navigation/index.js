import React from 'react';

// set up navigation in header
function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav>
        <ul> 
            <li>
                {/* If About link is clicked, render About section */}
                <a 
                    href="#about-me"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
                    id="am-414px-max">
                    About Me
                </a>
            </li>
            <li>
                {/* If Portfolio link is clicked, render Portfolio section */}
                <a 
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                    id="p-414px-max">
                    Portfolio
                </a>
            </li>
            <li>
                {/* If Contact link is clicked, render Contact section */}
                <a 
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                    id="c-414px-max">
                    Contact
                </a>
            </li>
            <li>
                {/* If Resume link is clicked, render Resume section */}
                <a href="#skills"
                    onClick={() => handlePageChange('Skills')}
                    className={currentPage === 'Skills' ? 'nav-link-active' : 'nav-link'}
                    id="s-414px-max">
                    Skills
                </a>
            </li>
        </ul>  
    </nav>
  );
}

export default Navigation;