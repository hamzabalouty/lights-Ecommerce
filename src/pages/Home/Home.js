import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Collection from "../../components/Collection/Collection";
import Arrivals from "../../components/Arrivals/Arrivals";
import News from "../../components/News/News";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <Collection />
      <Arrivals />
      <News />
    </div>
  );
};

export default Home;
