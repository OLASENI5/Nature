import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="px-6 py-2 border-2 border-green-800 bg-green-300 text-green-800 hover:bg-green-400 hover:border-green-700 transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
