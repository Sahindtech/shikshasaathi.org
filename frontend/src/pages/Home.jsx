import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Gallery />
      <Footer />
    </Fragment>
  );
};

export default Home;
