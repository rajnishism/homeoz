import React from "react";
import { useState, useEffect } from "react";
import base from "../url";
const Specialization = () => {
  const [diseases, setDiseases] = useState([]);
  useEffect(() => {
    fetch(`${base}/contents/diseases`)
      .then((response) => response.json())
      .then((diseases) => {
        setDiseases(diseases);
      });
  }, [diseases]);

  return (
    <div className="py-4">
      <div className="text-center">
        <p className="text-primary font-medium">Expertise</p>
        <p className="font-bold text-xl">Our Specialization</p>
      </div>

      <div className="flex flex-col bg-primary mt-10 p-auto">
        <div className="flex overflow-x-scroll py-10 hide-scroll-bar  ">
          <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            {diseases.map((disease) => (
              <div className="inline-block px-3">
                <div className="w-64 h-64 bg-secondary  max-w-xs overflow-hidden rounded shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="h-40  w-64 flex justify-center bg-white rounded-b-md p-10 drop-shadow-lg">
                    <img
                      src="/images/headache.png"
                      className="w-20 h-20 "
                    ></img>
                  </div>
                  <div className="text-center mt-4 p-2 ">{disease.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="flex justify-between mt-16 overflow-x-auto ">
        <div className="w-72  my-8 h-72 drop-shadow-lg   bg-secondary rounded-xl flex flex-col items-center">
          <div className="h-44 w-72 bg-white rounded-b-full drop-shadow-lg flex items-center justify-center">
            <div className="text-center pb-4">
              <img
                className="w-24 pb-4 drop-shadow-md"
                src="/images/headache.png"
              ></img>
            </div>
          </div>
          <div className="mt-8 font-bold">Headache</div>
        </div>

        <div className="w-72 m-8 h-72 drop-shadow-lg   bg-secondary rounded-xl flex flex-col items-center">
          <div className="h-44 w-72 bg-white rounded-b-full drop-shadow-lg flex items-center justify-center">
            <div className="text-center pb-4">
              <img
                className="w-24 pb-4 drop-shadow-md"
                src="/images/headache.png"
              ></img>
            </div>
          </div>
          <div className="mt-8 font-bold">Headache</div>
        </div>

        <div className="w-72 m-8 h-72 drop-shadow-lg   bg-secondary rounded-xl flex flex-col items-center">
          <div className="h-44 w-72 bg-white rounded-b-full drop-shadow-lg flex items-center justify-center">
            <div className="text-center pb-4">
              <img
                className="w-24 pb-4 drop-shadow-md"
                src="/images/headache.png"
              ></img>
            </div>
          </div>
          <div className="mt-8 font-bold">Headache</div>
        </div>

        <div className="w-72 m-8 h-72 drop-shadow-lg   bg-secondary rounded-xl flex flex-col items-center">
          <div className="h-44 w-72 bg-white rounded-b-full drop-shadow-lg flex items-center justify-center">
            <div className="text-center pb-4">
              <img
                className="w-24 pb-4 drop-shadow-md"
                src="/images/headache.png"
              ></img>
            </div>
          </div>
          <div className="mt-8 font-bold">Headache</div>
        </div>

        <div className="w-72 m-8 h-72 drop-shadow-lg   bg-secondary rounded-xl flex flex-col items-center">
          <div className="h-44 w-72 bg-white rounded-b-full drop-shadow-lg flex items-center justify-center">
            <div className="text-center pb-4">
              <img
                className="w-24 pb-4 drop-shadow-md"
                src="/images/headache.png"
              ></img>
            </div>
          </div>
          <div className="mt-8 font-bold">Headache</div>
        </div>

        <div className="w-72 m-8 h-72 drop-shadow-lg   bg-secondary rounded-xl flex flex-col items-center">
          <div className="h-44 w-72 bg-white rounded-b-full drop-shadow-lg flex items-center justify-center">
            <div className="text-center pb-4">
              <img
                className="w-24 pb-4 drop-shadow-md"
                src="/images/headache.png"
              ></img>
            </div>
          </div>
          <div className="mt-8 font-bold">Headache</div>
        </div>
      </div> */}
    </div>
  );
};

export default Specialization;
