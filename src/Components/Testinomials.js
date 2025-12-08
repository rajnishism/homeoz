import React from "react";
import base from "../url";
import Button from "./Button";

import { useState, useEffect } from "react";

const Testinomials = () => {
  const [testinomials, setTestinomials] = useState([]);
  const [index, setIndex] = useState(0);
  
  //fetch testimonials
  useEffect(() => {
    fetch(`${base}/contents/testinomials`)
      .then((response) => response.json())
      .then((data) => {
        setTestinomials(data|| []);
        setIndex(0);
        })
        .catch((err) => console.error("Error Fetching testimonials:", err));
      });
  }, []);


//Auto change testimonials every 2 seconds
useEffect(()=>{
      if(!testinomials.length) return;
    
      const intervalId = setInterval(()=> {
        setIndex((prev)=> (prev+1)% testinomials.length);
        }, 2000); // 2 seconds 

      return () => clearInterval(intervalId); // cleanup 
  }, [testinomials.length]);


  // handle manual click
  const handleClick = () => {
    if (!testinomials.length) return;
    setIndex((prev) => (prev + 1) % testinomials.length);
  };
  

  return (
    <>
      <div></div>
      <div className="text-center my-12">
        <p className="text-primary font-medium">Testinomials</p>
        <p className="font-bold text-xl">What our patient Says</p>
      </div>

      <div className="lg:w-2/3 shadow-lg flex mx-auto justify-center items-center flex-col md:flex-row ">
        <div className="w-1/2  ">
          <img src="images/customers.jpg" className=""></img>
        </div>
        <div className="md:w-1/2 flex flex-col self-center items-center px-10  py-10 md:py-0  ">
          <div className="hidden md:block">
            <img src="/images/logo.png" className="w-20"></img>
          </div>

          {testinomials.length > 0 && (
            <div className="text-center transition-opacity duration-500">
              <div className="maincontent text-md font-bold">
                {testinomials[index].testinomial}
              </div>
              <div className="subtitle pt-4">
                {testinomials[index].person}
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="flex justify-center pt-10 drop-shadow-lg mb-10"
        onClick={handleClick}
      >
        <Button text="Next" icons="" />
      </div>
    </>
  );
};

export default Testinomials;
