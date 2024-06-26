import React from "react";
import Navbar from "../Navbar";
// import Caursel from "../Caursel";
import Card from "../Card";
import Footer from "../Footer";
import Carousel from "../Carousel";

const Home = () => {
  return (
    <div className="bg-gradient-secondary text-white">
      <Navbar />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
