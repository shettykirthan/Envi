import React, { useEffect, useRef, useState } from 'react';
import '../index.css';
import { Link, useNavigate } from 'react-router-dom';
import { account } from '../appwrite/config';
import { useAuth } from '../utils/AuthContext';
import Navbar from '../components/Navbar';

const Login = () => {
  const navigate = useNavigate();
  const {user,loginUser} = useAuth()

  const loginForm = useRef(null)
  useEffect(()=>{
    if(user){
      navigate('/user')
    }

  },[])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value
    const userInfo = {email , password}
    loginUser(userInfo)
  };






  

  return (
    <>
    <Navbar />
    <div className="login-container">
      
      <form ref = {loginForm}  className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
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
        <Link to="/register"><p>Create new account?</p></Link>
        <button type="submit">Login</button>
      </form>
    </div>
  </>
  );
};

export default Login;
