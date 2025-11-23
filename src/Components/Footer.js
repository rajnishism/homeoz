import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialHandle = {
    fb: "https://www.facebook.com/profile.php?id=100090609863515",
    twitter: "",
    linkedin: "",
    instgram: "https://instagram.com/homeoz_?igshid=MzRlODBiNWFlZA==",
  };
  return (
    <div className="bg-gray-800 py-10 flex flex-col justify-center ">
      <div className=" inline-flex items-center justify-center flex-col ">
        <div className="  flex items-center bg-white px-2  rounded-md ">
          <img src="/images/logo.png" className="w-16 inline-block"></img>
          <h2 className=" text-2xl  font-semibold pr-4 ">Homeoz</h2>
        </div>
        <div className="mt-4">
          <ul className="flex items-center flex-col lg:flex-row text-white">
            <li className="mx-4   lg:w-28 text-center font-sans hover:underline ">
              Home{" "}
            </li>
            <li className="mx-4  lg:w-28 text-center font-sans hover:underline">
              Blogs
            </li>
            <li className="mx-4  lg:w-28 text-center font-sans hover:underline">
              Book Appointment
            </li>
            <li className="mx-4  lg:w-28 text-center font-sans hover:underline">
              Track Appointment
            </li>
            <li className="mx-4  lg:w-28 text-center font-sans hover:underline">
              Admin Login
            </li>
          </ul>
        </div>

        <div className=" flex mt-4">
          <div>
            {socialHandle.fb.length > 0 && (
              <a href={socialHandle.fb}>
                <div className="w-10 h-10 bg-white rounded-full m-2 flex justify-center items-center drop-shadow-xl shadow-white">
                  <img
                    src="/images/fb.png"
                    className="w-8  drop-shadow-lg"
                  ></img>
                </div>
              </a>
            )}
          </div>

          <div>
            {socialHandle.twitter.length > 0 && (
              <a href={socialHandle.twitter}>
                <div className="w-10 h-10 bg-white rounded-full m-2 flex justify-center items-center drop-shadow-lg shadow-white">
                  <img
                    src="/images/twitter.png"
                    className="w-8 drop-shadow-lg"
                  ></img>
                </div>
              </a>
            )}
          </div>

          <div>
            {socialHandle.linkedin.length > 0 && (
              <a href={socialHandle.linkedin}>
                <div className="w-16 h-16 bg-white rounded-full m-2 flex justify-center items-center drop-shadow-lg shadow-white">
                  <img
                    src="/images/linkedin.png"
                    className="w-10 drop-shadow-lg"
                  ></img>
                </div>
              </a>
            )}
          </div>

          <a href={socialHandle.instgram}>
            <div className="w-10 h-10 bg-white rounded-full m-2 flex justify-center items-center drop-shadow-lg shadow-white">
              <img
                src="/images/instagram.png"
                className="w-7 drop-shadow-lg"
              ></img>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
