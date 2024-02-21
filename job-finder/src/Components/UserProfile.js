import React from 'react';
import Footer from "./Footer";
import "./Styles/UserProfile.css";
import logo from "./Assests/logo.png";

function UserProfile() {
  return (
    <div className='Profile'>
      <div className='Profile-Container'>
        <h1>Job Finder</h1>
        <button>Sign Out</button>
      </div>
      <div className='Form'>
        <div className='UserControl'>
          <div className='UserID'>
            <img src={logo} alt="" />
            <div className='Name'>
              <h2>Haider</h2>
              <h2>FrontEnd </h2>
            </div>
            <div className='User-Control1'>
              <button id="B1">Upload New Photo</button>
              <button id="B2">Delete</button>
            </div>
          </div>
        </div>
        
        <div className='UserForm'>
          <form>
            <div className="FormRow">
              <div className="FormField">
                <label htmlFor="firstName" placeholder='FirstName'>First Name</label>
                <input type="text" id="firstName" />
              </div>
              <div className="FormField">
                <label htmlFor="lastName" placeholder='LastName'>Last Name</label>
                <input type="text" id="lastName" />
              </div>
            </div>
            <div className="FormField">
              <label htmlFor="userName">User Name</label>
              <input type="text" id="userName" />
            </div>
          </form>
        </div>

        <hr className="Separator" />

        <div className="EmailPhone">
          <div className="FormField">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" />
          </div>
          <div className="FormField">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" />
          </div>
          <div>

          </div>
        </div>
        <div className='Controls'>
         <button id="B2">Cancel</button>
              <button id="B1">Save Changes</button>
              </div>
      </div>
      <div className='Stats'>
        <h1>Stats</h1>
        <h2>Jobs Applied</h2>
        <h2>Interviews Invited</h2>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
