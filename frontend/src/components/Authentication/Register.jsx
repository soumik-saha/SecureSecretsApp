/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!username || !email || !password) {
      setError('Fill in all details to register');
      return;
    }

    try {
      const response = await fetch('https://secure-secrets-app.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Successful registration
        console.log('Registration successful!');
        window.location.href = `https://secure-secrets-app.netlify.app/login`;
        // You may want to redirect the user or update the state to reflect the registration status
      } else {
        // Unsuccessful registration
        console.log('Registration failed!');
        setError('Registration Failed');
        // Handle error, show message, etc.
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Error During Registration');
    }
  };

  return (
    <div className="register-form">
      <div className="text-center mb-4">
        <h2>Register</h2>
      </div>
      <form>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />

        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

        <div className="text-right">
          <Button variant="primary" type="button" onClick={handleRegister}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
