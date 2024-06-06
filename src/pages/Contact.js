import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="contact">
      <div className="hero">
        <h1>Contact Us</h1>
        <p>
          Have a question or want to get in touch? We'd love to hear from you!
        </p>
      </div>
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <ul>
          <li>
            <i className="fas fa-envelope" />
            <span>Email: nnm22ad054@nmamit.in (Shreevathsa Tantry)</span>
          </li>
          <li>
            <i className="fas fa-envelope" />
            <span>Email: nnm22ad051@nmamit.in(Shetty Kirthan Dinesh)</span>
          </li>
          <li>
            <i className="fas fa-envelope" />
            <span>Email: nnm22ad047@nmamit.in (Sarvajith)</span>
          </li>
          <li>
            <i className="fas fa-envelope" />
            <span>Email: nnm22ad068@nmamit.in (Vishanth)</span>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .contact {
          font-family: Arial, sans-serif;
          padding: 2rem;
          max-width: 1000px;
          margin: 40px auto;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          border-radius:20px;
        }
        .hero {
          background: linear-gradient(45deg, rgb(126, 186, 116), #00C371);
          background-size: 100% 200px;
          background-position: 0% 100%;
          padding: 20px;
          text-align: center;
          color: #fff;
          border-radius:20px;
        }
        .hero h1 {
          font-size: 36px;
          margin-bottom: 10px;
        }
        .hero p {
          font-size: 18px;
          margin-bottom: 20px;
        }
        .contact-info {
          padding: 20px;
        }
        .contact-info h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }
        .contact-info ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .contact-info ul li {
          margin: 10px 0;
          display: flex;
          align-items: center;
        }
        .contact-info ul li i {
          font-size: 24px;
          margin-right: 10px;
          color: #666;
        }
        .contact-info ul li span {
          font-size: 18px;
          font-weight: bold;
        }
        @media (max-width: 600px) {
          .contact {
            padding: 1rem;
            margin: 20px auto;
          }
          .hero {
            background-size: 100% 150px;
          }
        }
      `}</style>
    </div>
    </>
  );
};

export default Contact;