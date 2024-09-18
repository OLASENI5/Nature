import React from "react";
import img from "../assets/img/fish-removebg-preview.png"; // Update image to a relevant agricultural image
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#B7C7A9] to-[#4A773C]">
      <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
        <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight text-green-800">
          Empowering Agriculture with Sustainable Solutions
        </h1>
        <p>
          <b>Your Partner in Livestock and Crop Farming Excellence,</b> we are dedicated to advancing agricultural practices through sustainable solutions. Our expertise spans across livestock and crop farming, offering a comprehensive range of services including setup, training, and consultancy. We are committed to delivering innovative and effective solutions that enhance productivity and sustainability in the agricultural sector.
        </p>
      </div>

      <div className="relative">
        <img src={img} alt="Agricultural Solutions" />
      </div>
    </div>
  );
};

export default Home;
