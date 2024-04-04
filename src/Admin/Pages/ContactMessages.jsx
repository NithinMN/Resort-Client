import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ContactCard from '../../Admin/Components/ContactCard'; 

const ContactMessages = () => {
    const [contactdata, setContactData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/find/ContactMessages`);
                console.log(response);
                setContactData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            {contactdata.map((item,index) => (
                <ContactCard
                    key={index}
                    name={item.Name}
                    email={item.email}
                    message={item.message}
                />
            ))}
        </div>
    );
}

export default ContactMessages;
