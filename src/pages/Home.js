import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
