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
        Appointment
        <FontAwesomeIcon icon="fa-solid fa-arrow-down" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 bg-white border border-gray-300 shadow-lg rounded-sm">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-secondary "
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-secondary  "
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-secondary  "
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
