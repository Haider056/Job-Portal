import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./Styles/JobPage.css";
import logo from './Assests/logo.png';
import Footer from "./Footer";
function JobPage() {
  const jobData = [
    {
      id: 1,
      companyName: "Company 1",
      jobTitle: "Software Quality Assurance",
      industry: "Industry 1",
      description: "Job description 1",
    },
    {
      id: 2,
      companyName: "Company 2",
      jobTitle: "Frontend Developer",
      industry: "Industry 2",
      description: "Job description 2",
    },
    {
        id: 2,
        companyName: "Company 2",
        jobTitle: "Frontend Developer",
        industry: "Industry 2",
        description: "Job description 2",
      },
      {
        id: 2,
        companyName: "Company 2",
        jobTitle: "Frontend Developer",
        industry: "Industry 2",
        description: "Job description 2",
      },
   
  ];

  return (
    <div className="Container">
      <Navbar />
      <div className="Intro">
        <h1>
          Find Your <span style={{ color: "#4985FA" }}>New Job</span> Today
        </h1>
        <p style={{color:"Black"}}>Find Thousands of jobs waiting for you</p>
      </div>
      <div className="search-container">
      <div className="search">
        <input type="text" placeholder="Search for jobs" />
        <input type="text" placeholder="Industry" id="input1" />
        <Link to="/" id="button2">
          Search
        </Link>
      </div>
      </div>
      <div className="JobsListing">
        {jobData.map((job) => (
          <div className="Jobs" key={job.id}>
            <div className="child1">
              <img src={logo} alt="company logo" />
              <h4>{job.companyName}</h4>
              <Link to="/ApplicationForm" id="jobs-search">
                Apply
              </Link>
            </div>
            <div className="child2">
              <h2>{job.jobTitle}</h2>
              <h4>{job.industry}</h4>
            </div>
            <div className="child3">
              <p style={{color:"Black"}}>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default JobPage;
