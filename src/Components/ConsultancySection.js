import React from "react";

const ConsultancySection = () => {
  const handleClick = () => {
    // Add logic to handle redirection to payment page
    // For example, using React Router or an external link
    window.location.href = "https://example.com/payment"; // Replace with actual payment URL
  };

  return (
    <section className="py-16 bg-secondary text-center relative">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Online Homeopathy Consultancy
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Get personalized homeopathic solutions from our experienced experts.
          <br></br>
          <span className="underline underline-offset-2 font-bold">
            Book your appointment now!
          </span>
        </p>
        <img
          src="images/consultancy-image.png"
          alt="Consultancy"
          className="mx-auto mb-12  shadow-lg md:w-1/2 "
        />
        <button
          onClick={handleClick}
          className="px-8 py-4 bg-red-500 text-white font-bold rounded-full text-lg transition duration-300 hover:bg-red-700"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default ConsultancySection;
