import React from "react";

const Signup = () => {
  return (
    <div className="signup">
        <div className="form-title">Sign Up</div>
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
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
