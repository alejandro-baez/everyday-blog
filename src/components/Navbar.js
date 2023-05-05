import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";
//need to use link

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);

  console.log(isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutandRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };

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
      {isLoggedIn ? (
        <div className="nav-options container-item">
          <ul className="nav-list-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>View Blogs</li>
            <li>
              <h4>Welcome</h4>
            </li>
            <li>
              <button type="button" onClick={logoutandRedirectHome}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
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
      )}
    </header>
  );
};

export default Navbar;
