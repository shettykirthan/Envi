import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="about">
      <div className="hero">
        <h1>About Our Project</h1>
        <p>
          Our project aims to calculate the carbon emission of users based on their input values and compare it with their country's average. 
          This will help users understand if their carbon footprint is excessive and take necessary steps to reduce it.
        </p>
        <p>
          By using our platform, users can input their daily habits and activities, such as energy consumption, transportation, and diet. 
          Our algorithm will then calculate their carbon emission and provide a personalized report, comparing it to the average carbon footprint of their country.
        </p>
      </div>
      <div className="team">
        <h2>Meet Our Team</h2>
        <p>
          We are a team of four second-year students from Nitte University, passionate about creating a sustainable future.
        </p>
        <ul>
          <li>
            
            <span>Shreevathsa Tantry</span>
          </li>
          <li>
       
            <span>Shetty Kirthan Dinesh</span>
          </li>
          <li>
       
            <span>Sarvajith</span>
          </li>
          <li>
         
            <span>Vishanth</span>
          </li>
        </ul>
        <p>
          We believe that every small step counts, and by working together, we can make a significant impact on reducing carbon emissions and creating a better future for our planet.
        </p>
      </div>
      <style jsx>{`
       .about {
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
       .team {
          padding: 20px;
        }
       .team h2 {
          font-size: 24px;
          margin-bottom: 10px;
        }
       .team ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
       .team ul li {
          margin: 10px 0;
          display: flex;
          align-items: center;
        }
       .team ul li img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }
       .team ul li span {
          font-size: 18px;
          font-weight: bold;
        }
        @media (max-width: 600px) {
         .about {
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

export default About;