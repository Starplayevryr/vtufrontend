// app/layout.tsx
import React, { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// You can create this Footer component if needed

// Global layout for pages
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      {/* Navbar at the top */}
      <head>
        {/* You can add custom head tags here, like meta tags, link to styles, etc. */}
      </head>
      <body>
         <Navbar />
         <main className="container my-4">{children}</main>
         <Footer/>
      </body>
     

      {/* Main Content Area */}
      

      {/* Footer at the bottom */}
      </html>
  );
};

export default Layout;
