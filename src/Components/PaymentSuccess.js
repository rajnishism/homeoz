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

  // setTimeout(sendHome, counter);
  // setInterval(()=>{
  //   setCounter(counter-1)
  // },counter)
  // if(counter===0){
  //   navigate('/')
  // }

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div class="my-6">
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
        <h2 className="text-2xl font-bold mb-4">Booking Confirmed</h2>
        <div className="bg-white p-4  shadow-lg w-96 text-center">
          <table className="table-auto border-none font-sans inline-block">
            <tr>
              <td className="border-0 p-2 font-bold  ">Booking Id</td>
              <td className="border-0 p-2 font-semibold ">123423</td>
            </tr>
            <tr>
              <td className="border-0 p-2">Name</td>
              <td className="border-0 p-2">Rajnish Kumar</td>
            </tr>
            <tr>
              <td className="border-0 p-2">Phone</td>
              <td className="border-0 p-2">+91 122922929</td>
            </tr>
            <tr>
              <td className="border-0 p-2">Date</td>
              <td className="border-0 p-2">10/11/2023</td>
            </tr>
          </table>
        </div>

        <p className="mt-4">
          Your order has been confirmed. Thank you for Trusting us!
        </p>
        <p>You will recieve details on your email and Phone </p>
      </div>

      <div className="text-center mt-10">
        <a href="/">Go Back to home</a>
      </div>
    </>
  );
};

// OrderConfirmation.js
