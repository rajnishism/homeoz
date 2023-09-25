import React from "react";

const Benefits = () => {
  return (
    <>
      <section id="benefits">
        <div className="bg-secondary flex justify-center">
          <div className=" w-full lg:w-[80rem] flex justify-between  items-center  p-8  flex-col md:flex-row  md:px-10 text-center ">
            <div className="w-80  flex flex-col items-center my-4">
              <div className="self-center bg-white drop-shadow-lg rounded p-4 mb-4 animate-bounce">
                {" "}
                <img
                  src="/images/mask.png "
                  className="w-16 md:w-20  "
                ></img>{" "}
              </div>
              <div className="p-2 ">
                <p className="text-lg md:text-xl font-bold">
                  10K+ Happy customers
                </p>
                <p className="text-sm font-medium mt-2">
                  HOMEOZ operates across the globe.
                </p>
              </div>
            </div>

            <div className="w-80  flex flex-col items-center my-4">
              <div className="self-center bg-white drop-shadow-lg rounded p-4 mb-4 animate-bounce">
                {" "}
                <img
                  src="/images/heart.png "
                  className="w-16 md:w-20  "
                ></img>{" "}
              </div>
              <div className="p-2 ">
                <p className="text-lg md:text-xl font-bold">No Side Effects</p>
                <p className="text-sm font-medium mt-2">
                  With HOMEOZ, comes the assurance of absolutely no side effects
                  and permanent cure!
                </p>
              </div>
            </div>

            <div className="w-80  flex flex-col items-center my-4">
              <div className="self-center bg-white drop-shadow-lg rounded p-4 mb-4 animate-bounce">
                {" "}
                <img
                  src="/images/doctors.png "
                  className="w-16 md:w-20  "
                ></img>{" "}
              </div>
              <div className=" p-2">
                <p className="text-lg md:text-xl font-bold">
                  20 years + Experience
                </p>
                <p className="text-sm font-medium mt-2">
                  We are a team of homeopathy doctors with almost two decades of
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
