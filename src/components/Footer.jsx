import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <p className="mb-0 text-center">
          &copy; {new Date().getFullYear()} Marvel Heroes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
