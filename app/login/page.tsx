// pages/login.tsx

import React from "react";
import Link from "next/link"; // Import Link to navigate

const Login = () => {
  return (
    <section id="login">
      <h2>Login to Your Account</h2>
      <form action="details.html" method="GET">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        New User? <Link href="/register">Register Here</Link>
      </p>
    </section>
  );
};

export default Login;
