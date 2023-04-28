import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAuthor } from "../features/authors/authorsSlice";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmitCreate = async (evt) => {
    evt.preventDefault;
    console.log(username)
    dispatch(addAuthor({ username, email, password }));
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup">
      <div className="form-title">Sign Up</div>
      <form className="create-form " onSubmit={handleSubmitCreate}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          required="required"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
          name="email"
          placeholder="email"
          required="required"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          value={password}
          name="password"
          placeholder="password"
          required="required"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="create-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
