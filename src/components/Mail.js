import React, { useState, useEffect } from 'react';
import '../styles/mail.css';

const Mail = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        text: ''
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                return;
            }

            try {
                const response = await fetch('http://localhost:8080/api/currentUser', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: data.email,
                        subject: '',
                        text: ''
                    });
                } else {
                    const error = await response.json();
                    setMessage(`Error: ${error.error}`);
                }
            } catch (error) {
                setMessage(`Error: ${error.message}`);
            }
        };

        fetchUserData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json'
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        try {
            const response = await fetch('http://localhost:8080/api/sendMail', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    username: `${formData.firstName} ${formData.lastName}`,
                    userEmail: formData.email,
                    subject: formData.subject,
                    text: formData.text
                })
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Message sent successfully!');
            } else {
                setMessage(`Error: ${result.error}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div className="mail-form">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="Имя"
                    required
                    disabled={!!localStorage.getItem('token')} // Disable if user is logged in
                />
                <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Фамилия"
                    required
                    disabled={!!localStorage.getItem('token')} // Disable if user is logged in
                />
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    required
                    disabled={!!localStorage.getItem('token')} // Disable if user is logged in
                />
                <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Тема"
                    required
                />
                <textarea
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    placeholder="Сообщение"
                    required
                ></textarea>
                <button type="submit">Отправить</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Mail;
