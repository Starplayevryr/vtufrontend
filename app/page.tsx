// app/home/page.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from './components/Navbar/Navbar';// Adjust the import path as needed
 // Adjust the import path as needed

const Home = () => {
  return (
    <>
   <div className="home-background">
      <div className="container my-4">
        <div className = "boxen">
      <img src='/images/banner.jpg' alt="Festival Banner" className="banner-image" />
      <div className="banner-text">
          <h1>Welcome to the GAT VTU Youth Fest 2025!</h1>
        <strong><p>Join us for an exciting celebration of 25 years of excellence!</p></strong>  
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
