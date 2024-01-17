/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://secure-secrets-app.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { redirectTo } = await response.json();
        console.log('Login successful!');
        console.log('Redirecting to:', redirectTo);
        window.location.href = redirectTo;
      } else {
        console.log('Login failed!');
        setError('Invalid email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="login-form">
      <div className="text-center mb-4">
        <h2>Welcome Back!</h2>
      </div>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <div className="text-right">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
      </Form>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </div>
  );
};

export default Login;