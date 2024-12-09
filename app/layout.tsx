import React, { ReactNode } from "react";
import Navbar from ".././components/Navbar";
import Footer from ".././components/Footer";
import "./globals.css";
import { ToastContainer } from "react-toastify";

// Global layout for pages
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* You can add custom head tags here, like meta tags, link to styles, etc. */}
      </head>
      <body>
        <Navbar />
        <main className="flex flex-col">{children}</main>
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
