import React from "react";
import { Link } from "react-router-dom";
//need to use link

const Navbar = () => {
  return (
    <header className="header-container">
      <div className="logo container-item">
        <Link to="/">
          <img
            src="https://banner2.cleanpng.com/20201021/tix/transparent-blog-icon-writing-icon-social-media-icon-5f90eb01928963.5926112316033328656002.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="nav-options container-item">
        <ul className="nav-list-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>View Blogs</li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
