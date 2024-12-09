"use client";
import React, { useState } from "react";
import Link from "next/link";
import OuterBox from "../../components/OuterBox";
import Heading from "../../components/Heading";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { WarningMessage } from "../../components/WarningMessage";
import "../globals.css";

const Login = () => {
  // State to hold input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // State to hold error messages
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    let newErrors = { username: "", password: "" };

    // Username validation
    if (username.trim() === "") {
      newErrors.username = "Username is required.";
      isValid = false;
    }

    // Password validation
    if (password.trim() === "") {
      newErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      // Proceed with login API call
      console.log("Logging in with:", { username, password });
      // Integrate toast for success/failure messages
    }
  };

  return (
    <div>
      <OuterBox>
        <Heading label="Login" />
        <InputField
          label="Username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          errorMessage={errors.username}
        />
        <InputField
          label="Password"
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          errorMessage={errors.password}
        />
        <Button label="Login" OnClick={handleLogin} />
        <WarningMessage label="New User?" buttonText="Sign Up" to="/signup" />
      </OuterBox>
    </div>
  );
};

export default Login;
