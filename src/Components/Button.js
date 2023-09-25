import React from "react";

const Button = (props) => {
  return (
    <button className="rounded-sm text-md  font-sans lg:text-lg md:text-md hover:border-primary  text-gray-600 px-4 border-solid  border-2  border-secondary  py-2 bg-secondary hover:bg-primary  hover:text-white hover:bg-white hover:text-black transition-all hover:drop-shadow-lg drop-shadow-lg">
      {props.text}
    </button>
  );
};

export default Button;
