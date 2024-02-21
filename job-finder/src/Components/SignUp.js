import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Styles/SignUp.css";
import Footer from "./Footer";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    user_type: "jobseeker",
  });

  const [errorMessage, setErrorMessage] = useState(""); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:5000/api/users/signup", formData);

        if (response.data.message === "User registered successfully") {
          alert("Successfully registered. You can now log in.");
          navigate('/login');
        } else {
          console.error("Registration failed:", response.data.error);
          setErrorMessage("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setErrorMessage("An error occurred during registration.");
      }
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (
      formData.username.trim() === "" ||
      formData.email.trim() === "" ||
      formData.password.trim() === "" ||
      formData.confirmPassword.trim() === ""
    ) {
      setErrorMessage("Please fill in all fields.");
      return false;
    } else if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return false;
    } else {
      setErrorMessage("");
      return true;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h1>Welcome Back</h1>
        <div className="login-form">
          <h1>Sign Up</h1>
          <p style={{ color: "black" }}>Just Some Details to get you in!!</p>

          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <select
              name="user_type"
              value={formData.user_type}
              onChange={handleInputChange}
            >
              <option value="employer">Employer</option>
              <option value="jobseeker">Job Seeker</option>
            </select>

            <button type="submit">Sign Up</button>
          </form>
          <p>Forgot Password?</p>
          <div className="divider">
            <hr />
            <p>Or</p>
            <hr />
          </div>
          <button className="google-login">Sign Up with Google</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
