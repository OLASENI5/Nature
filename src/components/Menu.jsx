import React from "react";
import img1 from "../assets/img/hydroponics.jpg";
import img2 from "../assets/img/greenhouse.jpg";
import img3 from "../assets/img/pig.jpg";
import img4 from "../assets/img/veg.jpg";
import img5 from "../assets/img/consultancy.jpg";
import img6 from "../assets/img/training.jpg";
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-8">
        Our Expertise
      </h1>

      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <MenuCard img={img1} title="Hydroponics Farming" />
        <MenuCard img={img2} title="Greenhouse Construction" />
        <MenuCard img={img3} title="Livestock Management" />
        <MenuCard img={img4} title="Crop Farming Solutions" />
        <MenuCard img={img5} title="Consultancy Services" />
        <MenuCard img={img6} title="Training Programs" />
      </div>
    </div>
  );
};

export default Menu;
