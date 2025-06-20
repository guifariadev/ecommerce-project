import React from "react";
import Hero from "../components/home/Hero";
import Collections from "../components/home/Collections";
import BestSellers from "../components/home/BestSellers";
import NewsLetter from "../components/home/NewsLetter";
import BannerCollection from "../components/home/BannerCollection";

const Home = () => {
  return (
    <>
      <Hero />
      <Collections />
      <BannerCollection />
      <BestSellers />
      <NewsLetter />
    </>
  );
};

export default Home;
