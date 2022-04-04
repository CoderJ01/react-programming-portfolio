import React from 'react';

function Contact() {
    return (
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
    );
  }
  
  export default Contact;