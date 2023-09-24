import Header from "../Components/Header";
import Footer from "../Components/Footer";
const AboutUs = () => {
  const aboutus =
    "Homeoz is your partner in healing holistically with homeopathy. We are a team of homeopathy doctors with almost two decades of experience. From your normal cough to more serious ailments such as arthritis,HOMEOZ is to your rescue. With proven experience in curing a wide range of diseases and disabilities, HOMEOZ operates across the globe. With HOMEOZ, comes the assurance of absolutely no side effects and permanent cure!";
  return (
    <>
      <Header />
      <div className="">
        <div className="">
          <div>
            <div className="text-center ">
              <p className="text-primary font-medium">About us</p>
              <p className="font-bold text-xl">Know more about Homeoz</p>
            </div>
            <div className="flex justify-center md:p-10 items-center flex-col md:flex-row">
              <div className="md:w-1/3 w-8/12  py-10 md:py-0 md:self-start">
                <img
                  src="/images/faq.png"
                  className="rounded-md drop-shadow-md"
                ></img>
              </div>
              <div className="  w-[40rem]  flex px-20 h-full flex-col md:items-center  self-center">
                <div className="text-lg  font-semibold self-center leading-8">
                  {aboutus}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
