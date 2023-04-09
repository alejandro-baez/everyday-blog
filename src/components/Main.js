import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import Login from "./Login";

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
