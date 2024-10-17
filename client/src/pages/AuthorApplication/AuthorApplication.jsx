import React, { useState } from "react";
import axios from "axios";
import styles from './AuthorApplication.module.css';

const AuthorApplication = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('/api/v1/user/apply', formData);
            setMessage(response.data.message);
            setFormData({ name: '', email: '', contact: '' });
        } catch (error) {
            setMessage('Error submitting application.');
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Apply for Author</h2>
            {message && <p className={styles.message}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="contact">Contact Number:</label>
                    <input
                        type="text"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default AuthorApplication;
