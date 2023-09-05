import Hero from "../Components/Hero";
import "../Components/Hero.css";
import Benefits from "../Components/Benefits";
import Steps from "../Components/Steps";
import Specialization from "../Components/Specialization";
import FAQuestion from "../Components/FAQuestion";
import Blogs from "../Components/Blogs";
import Testinomials from "../Components/Testinomials";
import Contact from "../Components/Contact";
// import Footer from "../Components/Footer";
// import { Link } from "react-router-dom";
import PopUp from "../Components/PopUp";
import { useState } from "react";
// import
const HomePage = () => {
  const [hidden, setHide] = useState(true);
  // const navigate=useNavigate()
  const handleClick = (e) => {
    // <PopUp/>
    setHide(false);
  };
  return (
    <>
      {hidden ? (
        <>
          <Hero />
          <Benefits />
          <Steps />
          <Specialization />
          <FAQuestion />
          <Blogs />
          <Testinomials />
          <Contact />
          <div className="flex justify-center py-10 bg-primary ">
            <button
              className="p-4 text-sm boundary bg-white rounded-sm mt-4 bg-white drop-shadow-2xl  font-semibold"
              onClick={handleClick}
            >
              Book Your Appointment Now
            </button>
          </div>
        </>
      ) : (
        <>
          <PopUp />
        </>
      )}
    </>
  );
};
export default HomePage;
