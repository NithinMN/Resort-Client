import React from 'react';

const ContactCard = ({ name, email, message }) => {
    return (
        <div className="contact-card">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Message: {message}</p>
        </div>
    );
}

export default ContactCard;
