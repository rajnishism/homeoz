import React from "react";

const Button = (props) => {
  return (
    <button className="rounded-sm px-4 py-2 bg-primary text-white hover:bg-white hover:text-black transition-all hover:drop-shadow-lg">
      {props.text}
    </button>
  );
};

export default Button;
