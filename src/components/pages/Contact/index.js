import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helpers';

function Contact() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        
        if (e.target.name === 'email') {
            // check if email is valid
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('email is invalid.');
            } 
            else {
                // sen error message if input is blank
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } 
                else {
                    setErrorMessage('');
                }
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            }
            else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            // update user input
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <div id="contact">
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" defaultValue={formState.name}>Name:</label><br/>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <br/>
                <div>
                    <label htmlFor="email">Email address:</label><br/>
                    <input type="email" defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <br/>
                <div>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="10" />
                </div>
                <br/>
            </form>
            {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
            )}  
            <br/>
            <button type="submit">Submit</button><br/>
        </div>
    );
  }
  
  export default Contact;