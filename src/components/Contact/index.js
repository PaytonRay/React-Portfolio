import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log("Submit Form", formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Please enter your ${e.target.name}.`);
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log("Handle Form", formState);
        }
    };


    return (
        <section className="my-5">
            <h1 className="titles">
                Contact Me
            </h1>
            <hr></hr>
            <div className="boxes">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Elton John"
                            defaultValue={name}
                            onBlur={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Elton.John@gmail.com"
                            defaultValue={email}
                            onBlur={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            rows="5"
                            defaultValue={message}
                            onBlur={handleChange}
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type="submit">
                        Submit
                    </button>
                </form>
            </div>

            <div className="boxes">
                <h3 className="titles">Reach Out</h3>
                <ul>
                    <li>
                    <a className="contacts" href="Telephone:(512)-573-7446">(512)-573-7446</a>
                    </li>
                    <li>
                    <a className="contacts" href="Email:webdevpayton@gmail.com">webdevpayton@gmail.com</a>
                    </li>
                    <li>
                    <a className="contacts" href="" target="https://github.com/PaytonRay" rel="noreferrer">GitHub</a> 
                    </li>
                </ul>
            </div>
        </section>
    );
}




export default Contact;