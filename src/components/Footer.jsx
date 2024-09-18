import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#B7C7A9] to-[#4A773C] text-black rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4 text-green-800">Nature's World Agro Business</h1>
          <p className="text-sm">
            We are committed to advancing agricultural practices through sustainable solutions. Explore our services and products designed to enhance your farming experience and contribute to a greener future.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 text-green-800">Quick Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-green-700 transition-all cursor-pointer"
              href="#home"
            >
              Home
            </a>
            <a
              className="hover:text-green-700 transition-all cursor-pointer"
              href="#menu"
            >
              Our Expertise
            </a>
            <a
              className="hover:text-green-700 transition-all cursor-pointer"
              href="#products"
            >
              Agricultural Solutions
            </a>
            <a
              className="hover:text-green-700 transition-all cursor-pointer"
              href="#review"
            >
              Customer Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 text-green-800">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-green-700 transition-all cursor-pointer"
              href="mailto:info@naturesworldagro.com"
            >
              info@naturesworldagro.com
            </a>
            <a
              className="hover:text-green-700 transition-all cursor-pointer"
              href="tel:+1234567890"
            >
              +234 703 9219 871
            </a>
            <a
              className="hover:text-green-700 transition-all cursor-pointer"
              href="/social-media"
            >
              Follow us on Social Media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright by
          <span className="text-green-700"> Olaseni Ajayi </span>
          for Nature's World Agro Business| All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
