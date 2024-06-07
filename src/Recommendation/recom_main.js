import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import client, { databases, DATABASE_ID, COLLECTION_ID_USERS } from '../appwrite/appwriteConfig';
import Bad from './Bad';
import Poor from './Poor';
import Average from './Average';
import Good from './Good';
import Excellent from './Excellent';
import './CategoryCard.css';
import { useAuth } from '../utils/AuthContext';
import Navbar from '../components/Navbar';

const RecomMain = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [totalFootprint, setTotalFootprint] = useState(location.state?.totalFootprint || null);
  const userId = user.$id;

  const fetchTotalFootprint = async (userId) => {
    try {
      const response = await databases.getDocument(DATABASE_ID, COLLECTION_ID_USERS, userId);
      return response.totalFootprint;
    } catch (error) {
      console.error('Failed to fetch totalFootprint:', error);
      return null;
    }
  };

  useEffect(() => {
    console.log(totalFootprint)
    if (totalFootprint === null) {
      const getTotalFootprint = async () => {
        const footprint = await fetchTotalFootprint(userId);
        setTotalFootprint(footprint);
      };
      getTotalFootprint();
    }
  }, [userId, totalFootprint]);

  let categoryComponent;

  if (totalFootprint === null) {
    return <div>Loading...</div>;
  }

  if (totalFootprint > 30) {
    categoryComponent = <Bad />;
  } else if (totalFootprint >= 20) {
    categoryComponent = <Poor />;
  } else if (totalFootprint >= 10) {
    categoryComponent = <Average />;
  } else if (totalFootprint >= 5) {
    categoryComponent = <Good />;
  } else {
    categoryComponent = <Excellent />;
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="App">
      <h1>Carbon Footprint Categories</h1>
      <div className="category-container">
        Your total value {totalFootprint}
        {categoryComponent}
      </div>
    </div>
    </>
  );
};

export default RecomMain;
