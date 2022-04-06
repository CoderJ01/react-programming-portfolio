import React, {useState} from 'react';
import Navigation from './Navigation';
import About from '../pages/About/index.js';
import Portfolio from '../pages/Portfolio/index.js';
import Contact from '../pages/Contact/index.js';
import Resume from '../pages/Resume/index.js';

function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  // render section that corresponds to clicked link
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />
  }

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <header>
        <h1>Joshua</h1>
        {/* process section change */}
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <section className="project">
        {/* display project */}
        {renderPage()}
      </section>
    </div>
  );
}

export default Header;