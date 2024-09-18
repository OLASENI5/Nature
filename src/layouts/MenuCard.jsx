import React from "react";

const MenuCard = ({ img, title }) => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg shadow-md border border-green-300">
      <div>
        <img className="w-full h-40 object-cover rounded-xl" src={img} alt={title} />
      </div>
      <div className="p-2 mt-3">
        <h3 className="font-semibold text-xl text-center text-green-700">{title}</h3>
      </div>
    </div>
  );
};

export default MenuCard;
