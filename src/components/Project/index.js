import React from 'react';
import Header from '../Header/index.js';
import Footer from '../Footer/index.js';

function Project() {
 
  return (
    <div>
     <Header></Header><br></br> {/* contains both header and dynamically rendered sections*/}
     <Footer></Footer>          {/* contains footer*/}
    </div>
  );
}

export default Project;