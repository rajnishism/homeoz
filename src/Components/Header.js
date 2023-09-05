import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  const [showPop, setShowPop] = useState(false);
  return (
    <>
      <div className="flex w-screen z-20 bg-white px-10 md:justify-between justify-center drop-shadow-md ">
        <div className="logobox flex items-center ">
          <img src="/images/logo.png" className="w-20 inline-block"></img>
          <h2 className="inline text-3xl font-semibold">Homeoz</h2>
        </div>
        <div className="menubox  items-center  md:flex hidden">
          <div className="menu flex list-none  mr-4 items-center">
            <Link to="/" onClick={topFunction}>
              {" "}
              <li className="m-4">Home</li>
            </Link>
            <Link to="/about" onClick={topFunction}>
              {" "}
              <li className="m-4" onClick={topFunction}>
                About
              </li>
            </Link>
            <Link to="/contact">
              {" "}
              <li className="m-4" onClick={topFunction}>
                Contact
              </li>
            </Link>
            <Link to="/blogs">
              {" "}
              <li className="m-4">Blogs</li>
            </Link>

            <li>
              <p className="text-5xl font-extralight">l</p>
            </li>
          </div>
          <Button text="consult Now" />
        </div>
      </div>
    </>
  );
};

export default Header;
