import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import the useAuth hook
import "./Styles/Navbar.css";

function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="Navbar-container">
      <h1>Job Finder</h1>
      <div className="Navbar-Menu-Items">
        <ul>
          <li style={{ color: "black" }}>
            <Link to="/HomePage" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>

          {isAuthenticated && (
            <li style={{ color: "black" }}>
              <Link to="/JobPage" style={{ textDecoration: "none", color: "black" }}>
                Find a Job
              </Link>
            </li>
          )}

          {isAuthenticated && (
            <li style={{ color: "black" }}>
              <Link to="/JobPost" style={{ textDecoration: "none", color: "black" }}>
                Post a Job
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="Navbar-Buttons">
        {isAuthenticated ? (
          <button onClick={logout} id="Navbar-b1">
            Logout
          </button>
        ) : (
          <Link to="/Login" id="Navbar-b1">
            Login
          </Link>
        )}

        <Link to="/SignUp" id="Navbar-b2">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
