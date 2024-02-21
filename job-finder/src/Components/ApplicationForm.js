import React, { useState } from 'react';
import './Styles/ApplicationForm.css';
import Navbar from './Navbar';
import Footer from './Footer';

function ApplicationForm() {
  const [resume, setResume] = useState(null);

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted with data:", {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      Email: e.target.Email.value,
      CoverLetter: e.target.CoverLetter.value,
      Resume: resume,
    });
    // Clear form fields and reset selected resume
    e.target.reset();
    setResume(null);
  };

  return (
    <div>
      <Navbar />
      <h1 id="App-h1">Apply for the Job</h1>
      <div className='UserForm'>
        <form onSubmit={handleSubmit}>
          <div className="FormRow">
            <div className="FormField">
              <label htmlFor="firstName">First Name</label>
              <input type="text" placeholder='First Name' id="firstName" name="firstName" />
            </div>
            <div className="FormField">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" placeholder='Last Name' id="lastName" name="lastName" />
            </div>
          </div>
          <div className="FormField">
            <label htmlFor="Email">Email</label>
            <input type="email" placeholder='Email' id="Email" name="Email" />
          </div>
          <div className="FormField CoverLetter">
            <label htmlFor="CoverLetter">Cover Letter</label>
            <textarea
              id="CoverLetter"
              name="CoverLetter"
              rows="66" 
              placeholder="Type your cover letter here..."
            ></textarea>
          </div>
          <div className="FormField Resume">
            <label htmlFor="Resume">Upload Resume</label>
            <input type="file" id="Resume" name="Resume" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
          </div>
          {resume && <p>Selected Resume: {resume.name}</p>}
          <button type="submit">Apply Now</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ApplicationForm;
