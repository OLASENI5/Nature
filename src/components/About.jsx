import React from "react";
import img from "../assets/img/pig.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
          Discover how our tailored services can transform your farming operations.
          </h2>
          <p>
          Nature’s World Agro Business is a leading agro services outlet specializing in providing sustainable solutions for livestock and crop farming. Our mission is to support farmers with cutting-edge techniques, comprehensive setup services, and expert consultancy. We are driven by a commitment to sustainability, innovation, and excellence in all aspects of agricultural management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;