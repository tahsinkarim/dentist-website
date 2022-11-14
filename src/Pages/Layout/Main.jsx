import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto px-4'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
