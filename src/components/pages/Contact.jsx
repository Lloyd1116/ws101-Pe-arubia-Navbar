import React, { useState } from 'react';
import './Contact.css';
export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            
            <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
                <div>
                    
                    <label htmlFor='name-input'>
                        Name:
                        <input
                            id='name-input'
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
