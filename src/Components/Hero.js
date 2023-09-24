import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Button from "./Button";

const Hero = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("benefits");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section>
        <div className=" hero   lg-my-6 mb-4">
          <div className=" flex w-full justify-between flex-col-reverse  md:flex-row  ">
            <div className="w-10/12 md:w-5/12 h-full mt-10 max-w-lg items-center md:self-center ">
              <div className="hero-text pl-10 ">
                <p className="md:text-4xl text-2xl font-extrabold  ">
                  Your partner in healing holistically with homeopathy
                </p>
                <p className="mt-8 text-xs md:text-sm max-w-25 leading-2 ">
                  From your normal cough to more serious ailments such as
                  arthritis, HOMEOZ is to your rescue. With proven experience in
                  curing a wide range of diseases and disabilities, HOMEOZ
                  operates across the globe.
                </p>
                <div className="mt-4 flex mb-10 sm:mb-0">
                  <Link to="#benefits">
                    <Button text="Learn More" />
                  </Link>

                  <Link to="/blogs" className="ml-4">
                    <Button text="Book Now" />
                  </Link>
                </div>
              </div>
            </div>
            <div className=" md:w-5/12  px-8 md:p-0 hero-img flex justify-center   ">
              <img src="/images/hero.png " className=" w-auto"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
