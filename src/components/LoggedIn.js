import React from "react";
import { Link } from "react-router-dom";

const LoggedIn = () => {
  return (
    <div id="your-profile">
      <div className="title">
        <h2>Your Blogs</h2>
        <Link to="/create-blog">
          <button>Create Blog Post</button>
        </Link>
      </div>
    </div>
  );
};

export default LoggedIn;
