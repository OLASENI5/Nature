import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import img from '../assets/img/tract.jpg';


const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-[#A8D5BA] to-[#4F7942] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-row items-center cursor-pointer gap-2">
          {/* Use the logo image here */}
          <img src={img} alt="logo" className="w-10 h-10" />
          <h1 className="text-xl font-semibold">NATURE'S WORLD AGRO BUSINESS</h1>
        </div>

        <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link to="home" spy={true} smooth={true} duration={500} className="group relative inline-block cursor-pointer hover:text-[#4F7942]">
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#4F7942] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to="menu" spy={true} smooth={true} duration={500} className="group relative inline-block cursor-pointer hover:text-[#4F7942]">
            Our Expertise
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#4F7942] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to="products" spy={true} smooth={true} duration={500} className="group relative inline-block cursor-pointer hover:text-[#4F7942]">
            Agricultural Solutions
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#4F7942] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
          <Link to="reviews" spy={true} smooth={true} duration={500} className="group relative inline-block cursor-pointer hover:text-[#4F7942]">
            Customer Reviews
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#4F7942] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </Link>
        </nav>

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>
      <div className={` ${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <Link to="home" spy={true} smooth={true} duration={500} className="hover:text-[#4F7942] transition-all cursor-pointer" onClick={closeMenu}>
          Home
        </Link>
        <Link to="menu" spy={true} smooth={true} duration={500} className="hover:text-[#4F7942] transition-all cursor-pointer" onClick={closeMenu}>
          Our Expertise
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500} className="hover:text-[#4F7942] transition-all cursor-pointer" onClick={closeMenu}>
          Agricultural Solutions
        </Link>
        <Link to="products" spy={true} smooth={true} duration={500} className="hover:text-[#4F7942] transition-all cursor-pointer" onClick={closeMenu}>
          Customer Reviews
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
