import React from "react";

const Button = ({ placeholder, styles }) => {
  return (
    <button className="bg-[#E50914] px-4 py-2 text-white rounded-md font-semibold text-xs {styles}">
      {placeholder}
    </button>
  );
};

export default Button;
