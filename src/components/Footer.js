import React from "react";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-info">
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            impedit aperiam, consequatur voluptas praesentium sequi ullam
            exercitationem ex, cum amet porro? Voluptas recusandae dolorum nemo
            totam adipisci autem ipsum vitae?
          </p>
        </div>
        <div className="footer-nav">
            <h3>Quick Links</h3>
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>

            </ul>
        </div>
      </div>
      <div className="copyright">@ 2023 Copyright</div>
    </footer>
  );
};

export default Footer;
