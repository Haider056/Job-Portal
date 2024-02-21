import React from "react";

function Footer() {
  const footerStyles = {
    textAlign: "center", 
    color: "#000",       
    fontSize: "20px",    

  };

  return (
    <div className="footer" style={{ marginTop: "100px" , marginBottom:"2px"}}>
      <hr />
      <p style={footerStyles}>Copyright © 2023 JobFinder. All rights reserved.</p>
    </div>
  );
}

export default Footer;
