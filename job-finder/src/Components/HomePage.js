import React from "react";
import { Link } from "react-router-dom";
import "./Styles/HomePage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const jobData = [
  {
    title: 'Junior FrontEnd developer',
    role: 'Web developer',
    company: 'Innovative IQ',
  },
  {
    title: 'Senior Backend developer',
    role: 'Back-End developer',
    company: 'Tech Solutions Inc.',
  },
  {
    title: 'UI/UX Designer',
    role: 'Designer',
    company: 'Creative Designs Co.',
  },
  {
    title: 'Data Scientist',
    role: 'Data Analyst',
    company: 'DataTech Labs',
  },
];

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="headings">
        <h1>Looking for Perfect Jobs?</h1>
        <h1>You are at the Right Place</h1>
        <p style={{color:"Black"}}>Empowering everyone to find a perfect job for themselves</p>
      </div>
      <div className="Menu">
        <Link to="/JobPage" id="button1">
          Find a Job
        </Link>
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
      <div className="Featured">
        <h1>Featured Jobs</h1>
        <div className="featured-jobs-container">
          {jobData.map((job, index) => (
            <div className="Featured_jobs" key={index}>
              <h3>{job.title}</h3>
              <h5>{job.role}</h5>
              <p style={{color:"Black"}}>{job.company}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="Free_job">
        <h1>Post a Free Job</h1>
        <div className="postjob">
          <p style={{color:"Black"}}>Posting a free job listing is budget-friendly and reaches a large pool of job seekers, offering a cost-effective solution for filling positions with qualified candidates. It can also help build a talent pipeline for future job openings.</p>
          <Link to="/JobPost" id="button4">
            Post a Free Job
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
