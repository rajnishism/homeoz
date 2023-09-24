import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";

const Header = () => {
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  const [showPop, setShowPop] = useState(false);
  return (
    <>
      <div className="flex w-full  bg-white px-10 md:justify-between justify-center pt-4 ">
        <div className="logobox flex items-center ">
          <img
            src="/images/logo.png"
            className="w-12 md:w-20 inline-block"
          ></img>
          <h2 className="inline md:text-3xl text-2xl font-semibold">Homeoz</h2>
        </div>
        <div className="menubox  items-center  md:flex hidden">
          <div className="menu flex list-none  mr-4 items-center font-sans">
            <Link
              to="/"
              onClick={topFunction}
              className="hover:underline underline-offset-4 decoration-primary"
            >
              {" "}
              <li className="m-4 ">Home</li>
            </Link>
            <Link
              to="/about"
              onClick={topFunction}
              className="hover:underline underline-offset-4 decoration-primary"
            >
              {" "}
              <li className="m-4" onClick={topFunction}>
                About
              </li>
            </Link>
            <Link
              to="/contact"
              className="hover:underline underline-offset-4 decoration-primary"
            >
              {" "}
              <li className="m-4" onClick={topFunction}>
                Contact
              </li>
            </Link>
            <Link
              to="/blogs"
              className="hover:underline underline-offset-4 decoration-primary"
            >
              {" "}
              <li className="m-4">Blogs</li>
            </Link>

            <Dropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
