import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./successAnimation.css";

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
        <div class="success-animation">
          <svg
            class="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              class="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              class="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg w-96">
          <h3 className="text-lg font-semibold mb-2">Order Details:</h3>
          <ul></ul>
        </div>

        <p className="mt-4">
          Your order has been confirmed. Thank you for shopping with us!
        </p>
      </div>
      <Link to="/">Click here to go Ghar</Link>
    </>
  );
};

// OrderConfirmation.js
