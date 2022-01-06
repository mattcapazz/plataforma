import React from "react";

import Cards from "./Card";
import Carousel from "./Carousel";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Cards />
    </>
  );
};

export default Dashboard;
