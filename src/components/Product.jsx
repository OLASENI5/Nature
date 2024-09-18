import React from "react";
import img1 from "../assets/img/hydroponics.jpg"; // Update images to relevant agricultural products
import img2 from "../assets/img/greenhouse.jpg";
import img3 from "../assets/img/organic_fertilizer.jpg";
import ProductCard from "../layouts/ProductCard";

const Product = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 text-green-800">
        Agricultural Solutions
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 justify-center">
        <ProductCard img={img1} title="Hydroponics Systems" description="Efficient systems for soil-less farming, ideal for modern agriculture." />
        <ProductCard img={img2} title="Greenhouse Kits" description="Complete kits for creating controlled environments for plant growth." />
        <ProductCard img={img3} title="Organic Fertilizers" description="Natural fertilizers to enhance soil health and crop productivity." />
      </div>
    </div>
  );
};

export default Product;
