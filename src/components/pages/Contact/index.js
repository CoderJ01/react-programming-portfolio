import React, { useState } from 'react';
// import { validateEmail } from '../../../utils/helpers';

function Contact() {

    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
        
    //     if (e.target.name === 'email') {
    //         // check if email is valid
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         // isValid conditional statement
    //         if (!isValid) {
    //             setErrorMessage('email is invalid.');
    //         } 
    //         else {
    //             // send message if input is blank
    //             if (!e.target.value.length) {
    //                 setErrorMessage(`${e.target.name} is required.`);
    //             } 
    //             else {
    //                 // send no message if input is not blank
    //                 setErrorMessage('');
    //             }
    //         }
    //     }
    //     else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required`);
    //         }
    //         else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         // update user input
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setStatus("Semding...");
        const {name, email, message } = e.target.elements;
        
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        }

        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });

        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    }

    return (
        <div id="contact">
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" >Name:</label><br/>
                    <input type="text" name="name" required />
                </div>
                <br/>
                <div>
                    <label htmlFor="email">Email address:</label><br/>
                    <input type="email" name="email" required />
                </div>
                <br/>
                <div>
                    <label htmlFor="message">Message:</label><br/>
                    <textarea name="message" rows="5" required />
                </div>
                <br/>
            </form>
            <br/>
            <button type="submit">{status}</button><br/>
        </div>
    );
  }
  
  export default Contact;