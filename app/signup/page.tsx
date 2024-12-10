"use client";
import React, { useState } from "react";
import Link from "next/link"; // Import Link to navigate
import OuterBox from "../../components/OuterBox";
import Heading from "../../components/Heading";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { WarningMessage } from "../../components/WarningMessage";
import "../globals.css";

const RegisterCollege = () => {
  const [collegeName, setCollegeName] = useState("");
  const [collegeCode, setCollegeCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    collegeName: "",
    collegeCode: "",
    contactNumber: "",
    email: "",
  });

  const validateForm = () => {
    let isValid = true;
    let newErrors = {
      collegeName: "",
      collegeCode: "",
      contactNumber: "",
      email: "",
    };

    // Validate college Name
    if (collegeName.trim() === "") {
      newErrors.collegeName = "College Name is required.";
      isValid = false;
    }

    // validate college Code
    if (collegeCode.trim() === "") {
      newErrors.collegeCode = "College Code is required.";
      isValid = false;
    }

    // validate Contact Number
    const phoneRegex = /^[0-9]{10}$/;
    if (contactNumber.trim() === "") {
      newErrors.contactNumber = "Contact Number is required.";
      isValid = false;
    } else if (!phoneRegex.test(contactNumber)) {
      newErrors.contactNumber = "Contact Number must be 10 digits.";
      isValid = false;
    }

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
      newErrors.email = "Email Address is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleRegister = () => {
    if (validateForm()) {
      console.log("Registration successful:", {
        collegeName,
        collegeCode,
        contactNumber,
        email,
      });
      // api call
    }
  };

  return (
    <div>
      <OuterBox>
        <Heading label="Register Your College" />
        <InputField
          label="College Name"
          placeholder="Enter your college name"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
          errorMessage={errors.collegeName}
        />
        <InputField
          label="College Code"
          placeholder="Enter your college code"
          value={collegeCode}
          onChange={(e) => setCollegeCode(e.target.value)}
          errorMessage={errors.collegeCode}
        />
        <InputField
          label="Contact Number"
          placeholder="Enter your contact number"
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          errorMessage={errors.contactNumber}
        />
        <InputField
          label="Email Address"
          placeholder="Enter your email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          errorMessage={errors.email}
        />
        <Button label="Register" OnClick={handleRegister} />
        <WarningMessage
          label="Already a User?"
          buttonText="Log In"
          to="/login"
        />
      </OuterBox>
    </div>
  );
};

export default RegisterCollege;
