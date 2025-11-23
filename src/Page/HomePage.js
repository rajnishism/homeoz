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
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import ConsultancySection from "../Components/ConsultancySection";
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
          <Header />
          <Hero />
          <Benefits />
          <Steps />
          <Specialization />
          <FAQuestion />
          <Blogs />
          <Testinomials />
          <Contact />
          
          <div
            className="flex justify-center py-10 bg-primary "
            onClick={handleClick}
          >
            <Button text="Book" />
          </div>
          <Footer />
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
