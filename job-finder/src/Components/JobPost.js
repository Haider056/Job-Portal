import React from "react";
import Navbar from "./Navbar";
import "./Styles/JobPost.css";
import Footer from "./Footer";
function JobPost() {
  return (
    <div>
      <Navbar />
      <h1 id="JobPost-H1">Post a Job</h1>
      <div className="JobPost-Container">
      <h2 >Job Type:</h2>
        <select>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>
      </div>
      <div className="JobPost-inputs">
    <div className="Input-container">
        <label htmlFor="responsibilities">Responsibilities</label>
        <textarea id="responsibilities" name="responsibilities" rows="5" cols="40" placeholder="Enter responsibilities here"></textarea>
    </div>

    <div className="Input-container">
        <label htmlFor="requirements">Requirements</label>
        <textarea id="requirements" name="requirements" rows="5" cols="40" placeholder="Enter requirements here"></textarea>
    </div>

    <div className="Input-container">
        <label htmlFor="additionalRequirements">Additional Requirements</label>
        <textarea id="additionalRequirements" name="additionalRequirements" rows="5" cols="40" placeholder="Enter additional requirements here"></textarea>
    </div>
    <button>Submit</button>
</div>
<Footer/>
    </div>
  );
}

export default JobPost;
