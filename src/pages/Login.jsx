import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { account } from '../appwrite/config';
import { useAuth } from '../utils/AuthContext';
import Navbar from '../components/Navbar';

const Login = () => {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();
  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate('/user');
    }
  }, [user, navigate]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;
    const userInfo = { email, password };
    loginUser(userInfo);
  };

  return (
    <>
      <Navbar />
      <div className='loginbody'>
        <div className="wrapper">
          <form ref={loginForm} className="form" onSubmit={handleSubmit}>
            <h1 className="title">Login</h1>
            {error && <p className="error">{error}</p>}
            <div className="inp form-group">
              <input
                type="email"
                name="email"
                id="email"
                className="input"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="inp form-group">
              <input
                type="password"
                name="password"
                id="password"
                className="input"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <button className="submit" type="submit">Submit</button>
            <p className="footer">
              create new account? <Link to="/register" className="link">register</Link>
            </p>
          </form>
          <div className="banner">
            <h1 className="wel_text">EnviPro</h1>
            <p className="para"></p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          color: #000000;
        }
        .loginbody {
          width: 100vw;
          height: 87vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        ::-webkit-input-placeholder {
          color: grey;
        }
        :-ms-input-placeholder {
          color: grey;
        }
        ::placeholder {
          color: grey;
        }
        .wrapper {
          position: relative;
          width: 100%;
          max-width: 800px;
          height: auto;
          display: grid;
          grid-template-columns: 1fr;
          border: 3px solid #04ff00;
          box-shadow: 0 0 50px 0 #00C371;
          border-radius: 20px;
          overflow: hidden;
        }
        .form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .title {
          font-size: 35px;
        }
        .inp {
          padding-bottom: 10px;
          border-bottom: 2px solid #eee;
        }
        .input {
          border: none;
          outline: none;
          background: none;
          width: 100%;
          max-width: 260px;
          margin-top: 40px;
          padding-right: 10px;
          font-size: 17px;
        }
        .submit {
          border: none;
          outline: none;
          width: 100%;
          max-width: 288px;
          margin-top: 25px;
          padding: 10px 0;
          font-size: 20px;
          border-radius: 40px;
          letter-spacing: 1px;
          cursor: pointer;
          background: linear-gradient(45deg, rgb(126, 186, 116), #00C371);
        }
        .footer {
          margin-top: 30px;
          letter-spacing: 0.5px;
          font-size: 14px;
        }
        .link {
          color: #0ef;
          text-decoration: none;
        }
        .banner {
          display: none;
        }
        .wel_text {
          font-size: 40px;
          line-height: 50px;
        }
        .para {
          margin-top: 10px;
          font-size: 18px;
          line-height: 24px;
          letter-spacing: 1px;
        }

        @media(min-width: 768px) {
          .wrapper {
            grid-template-columns: 1fr 1fr;
          }
          .banner {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            padding-right: 70px;
            background: linear-gradient(to right, rgba(133, 248, 118, 0.356), #00C371);
            clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 100%);
          }
        }
      `}</style>
    </>
  );
};

export default Login;