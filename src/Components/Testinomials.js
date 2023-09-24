import React from "react";
import { useState, useEffect } from "react";
import base from "../url";
import Button from "./Button";
const Testinomials = () => {
  const [testinomials, setTestinomials] = useState([]);
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    fetch(`${base}/contents/testinomials`)
      .then((response) => response.json())
      .then((testinomial) => {
        if (testinomial.length) {
          setCnt(testinomial.length);
          console.log(testinomial.length);
        }
        setTestinomials(testinomial);
        console.log(testinomial);
      });
  }, []);

  const handleClick = () => {
    setCount((count + 1) % cnt);
  };
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log(count);
  }, [count]);

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
            <div className="text-center">
              <div className="maincontent text-md font-bold  ">
                {testinomials[count].testinomial}
              </div>
              <div className="subtitle pt-4">{testinomials[count].person}</div>
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
