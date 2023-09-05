import React from "react";
import Button from "../Components/Button";

const Dashboard = () => {
  return (
    <>
      <div className="px-10 sm:flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" className="w-20 inline-block"></img>
          <h2 className="inline text-3xl font-semibold">Homeoz</h2>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center bg-secondary py-1 px-4 mr-2">
            <img src="images/man.png" className="w-8 mr-2"></img>
            <h2 className="">Hi, Rajnish</h2>
          </div>

          <div className="bg-secondary  p-2 hover:bg-primary hover:text-white">
            Logout
          </div>
        </div>
      </div>
      <div className="w-96 h-10 flex  sm:mx-auto mx-10 my-10 sm:my-0">
        <div className="w-20 h-10 bg-primary mr-2"></div>
        <div className="w-20 h-10 bg-secondary mr-2"></div>
        <div className="w-20 h-10 bg-secondary mr-2"></div>
      </div>
    </>
  );
};

export default Dashboard;
