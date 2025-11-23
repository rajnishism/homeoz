import React, { useState } from "react";
import { Icon } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-secondary text-black rounded-md focus:outline-none"
      >
        Appointment{" "}
        {!isOpen ? (
          <svg
            className="inline-block"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        ) : (
          <svg
            className="inline-block"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 bg-white border border-gray-300 shadow-lg rounded-sm">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-secondary "
          >
            Book Appointment
          </a>
          <a
            href="/dashboard/appointments"
            className="block px-4 py-2 text-gray-800 hover:bg-secondary  "
          >
            Track Appointment
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
