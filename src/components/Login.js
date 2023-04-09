import React from "react";

const Login = () => {
  return (
    <div className="login">
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
          Create
        </button>
      </form>
    </div>
  );
};

export default Login;
