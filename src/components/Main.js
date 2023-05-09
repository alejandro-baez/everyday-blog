import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import { me } from "../store/store";

const Main = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);

  //this helps with staying logged in despite refreshing
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(me());
  });

  return (
    <div className="main">
      <Navbar />
      <main>
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/logged-in" element={<LoggedIn />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Main;
