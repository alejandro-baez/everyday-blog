import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../features/auth/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmitLogin = async (evt) => {
    evt.preventDefault;
    dispatch(logIn({ username, password }));
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login" onSubmit={handleSubmitLogin}>
      <div className="form-title">Log In</div>
      <form className="create-form">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          required="required"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required="required"
        />

        <button className="create-btn" type="submit">
          Log In
        </button>
      </form>

      <div className="redirect-link">
        Don't have an account?{" "}
        <span>
          <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
