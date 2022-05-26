import React, { useState } from "react";
import { validateEmail } from '../utils/helper';


export default function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

      return (
          <section>
              <h1 className="d-flex justify-content-center p-4">Contact Me Here!</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group d-flex justify-content-around">
                    <label htmlFor="name" className="m-4 p-3 h3">Name:</label>
                    <input type="text" name="name" className="form-control form-control-lg m-4 pb-5 w-50 h-25" defaultValue={name} onBlur={handleChange}></input>
                </div>
                <div className="form-group d-flex justify-content-around">
                    <label htmlFor="email" className="m-4 p-3 h3">Email Address:</label>
                    <input type="text" name="email" className="form-control form-control-lg m-4 pb-5 w-50 h-25" defaultValue={email} onBlur={handleChange}></input>
                </div>
                <div className="form-group d-flex justify-content-around">
                    <label htmlFor="message" className="m-4 p-3 h3">Message:</label>
                    <textarea name="message" rows="5" className="form-control form-control-lg m-4 pb-5 w-50 h-25" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="d-flex justify-content-center h2">{errorMessage}</p>
                    </div>
                )}
                  <button type="submit" className="btn btn-primary d-flex justify-content-center"></button>
              </form>
          </section>
      );
}