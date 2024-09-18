import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
      <img className="w-24 h-24 object-cover rounded-full" src={props.img} alt={props.title} />
      <div className="flex flex-col items-center mt-4 gap-3">
        <h2 className="font-semibold text-xl text-green-800">{props.title}</h2>
        <p className="text-gray-600 text-center">
          {props.review}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
