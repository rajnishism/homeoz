import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const refNum = searchQuery.get("ref");
  const navigate = useNavigate();

  const sendHome = () => {
    navigate("/");
  };
  const [counter, setCounter] = useState(10000);
  setTimeout(sendHome, counter);
  // setInterval(()=>{
  //   setCounter(counter-1)
  // },counter)
  // if(counter===0){
  //   navigate('/')
  // }
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg w-96">
          <h3 className="text-lg font-semibold mb-2">Order Details:</h3>
          <ul></ul>
        </div>
        <p className="mt-4">
          Your order has been confirmed. Thank you for shopping with us!
        </p>
      </div>
      <Link to="/">Click here to go Home</Link>
    </>
  );
};

// OrderConfirmation.js
