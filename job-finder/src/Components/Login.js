import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Styles/Login.css";
import Footer from "./Footer";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext"; 

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const { login } = useAuth(); 

  useEffect(() => {
    // Check for a token in local storage when the component initializes (on page load)
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      console.log('Token found in local storage:', storedToken);
      // If a token is found, set it to the authentication context
      login();
    } else {
      console.log('No token found in local storage.');
    }
  }, [login]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(formData.password)) {
      alert("Password must contain at least one capital letter and one number.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response Data:', data);

        const token = data.token;
        localStorage.setItem('token', token); // Store the token in local storage
        console.log('Token stored in local storage:', token);

        login();

        if (data.user.user_type === 'jobseeker') {
          console.log('Navigating to Job Seeker Profile');
          navigate('/UserProfile'); 
        } else if (data.user.user_type === 'employer') {
          console.log('Navigating to Employer Dashboard');
          navigate('/HomePage'); 
        } else {
          console.log('Invalid user type');
          alert('Invalid user type');
        }
      } else {
        console.error('Invalid credentials');
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <Navbar />
      <div className="login-container">
        <h1>Welcome Back</h1>
        <div className="login-form">
          <h3>Login</h3>
          <p style={{ color: "black" }}>Glad You are Back</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="submit">Login</button>
          </form>
          <p>Forgot Password?</p>
          <div className="divider">
            <hr />
            <p>Or</p>
            <hr />
          </div>
          <button className="google-login">Login with Google</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
