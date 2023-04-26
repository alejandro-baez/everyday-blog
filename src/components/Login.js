import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="form-title">Log In</div>
      <form className="create-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          required="required"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          placeholder="password"
          required="required"
        />

        <button className="create-btn" type="submit">
          Log In
        </button>
      </form>

      <div className="redirect-link">Don't have an account? <span><Link to ="/signup">Sign Up</Link></span></div>
    </div>
  );
};

export default Login;
