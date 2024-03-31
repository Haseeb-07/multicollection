// RegistrationForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      setMessage(data.message);
      // Clear input fields on successful registration
      if (response.ok) {
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      setMessage('Error registering user');
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
      <br/>
      <Link to="/tasks">Tasks</Link>
    </div>
  );
};

export default RegistrationForm;
