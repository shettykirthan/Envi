import React, { useState } from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import { account } from '../appwrite/config';
import Navbar from '../components/Navbar';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password){
      try {
        const result = await account.create(
          'unique()', // userId
          email, // email
          password, // password
          name // name (optional)
        );
        console.log(result);

        navigate("/login")
      } catch (error) {
        setError(error.message || 'Failed to register');
        console.error(error);
      }
    } else {
      setError('All fields are required');
    }
  };

  return (
    <>
    <Navbar />
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Link to = "/login"><p>Already have an account?</p></Link>
        <button type="submit">Register</button>
      </form>
    </div>
    </>
  );
};

export default Register;
