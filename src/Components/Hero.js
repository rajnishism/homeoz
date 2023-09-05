import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

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
        <div className=" hero   my-16 ">
          <div className=" flex w-full justify-between flex-col-reverse  md:flex-row  ">
            <div className="w-10/12 md:w-5/12 h-full mt-10 max-w-lg items-center md:self-center ">
              <div className="hero-text pl-10 ">
                <p className="md:text-4xl text-3xl font-extrabold  ">
                  Your partner in healing holistically with homeopathy
                </p>
                <p className="mt-8 text-sm max-w-25 leading-2 ">
                  From your normal cough to more serious ailments such as
                  arthritis, HOMEOZ is to your rescue. With proven experience in
                  curing a wide range of diseases and disabilities, HOMEOZ
                  operates across the globe.
                </p>
                <div className="buttons border-solid">
                  <Link to="#benefits">
                    <button
                      className="p-4 text-sm boundary bg-primary rounded-sm mt-4 text-white font-bold"
                      onClick={handleClickScroll}
                    >
                      {" "}
                      Learn More
                    </button>
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
