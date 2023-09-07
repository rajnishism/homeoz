// import React from "react";
// import Button from "./Button";

// const PopUp = () => {
//   const [paymentError, setPaymentError] = useState(null);

//   const handlePayment = async () => {
//     const Razorpay = await loadRazorpay();

//     const options = {
//       key: 'YOUR_RAZORPAY_KEY',
//       amount: appointmentDetails.amount * 100, // Amount in paise
//       currency: 'INR',
//       name: 'Your Clinic Name',
//       description: 'Appointment Payment',
//       image: 'your_logo_url',
//       order_id: 'order_id_from_backend',
//       handler: (response) => {
//         // This function is called when payment is successful
//         console.log(response);
//         // You can send this response to your backend for verification
//       },
//       prefill: {
//         name: appointmentDetails.name,
//         email: appointmentDetails.email,
//         contact: appointmentDetails.phone,
//       },
//       notes: {
//         appointment_id: appointmentDetails.id,
//       },
//     };

//     const rzp = new Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="mt-28">
//       <div className="flex justify-center font-bold text-3xl">
//         Enter Patient Details{" "}
//       </div>
//       <div className="flex justify-center items-center py-10 w-screen ">
//         <div className="lg:w-2/3 w-full py-10  flex  ">
//           <div className="hidden md:flex w-1/2 items-center ">
//             <img src="/images/registerbg1.jpg" className=""></img>
//           </div>
//           <div className=" w-full md:w-1/2 p-6 ">
//             <div className="mb-4 w-72">
//               <label className=" ">Name</label>
//               <input className=" mt-2  p-4  drop-shadow-md  focus:border-primary w-full rounded-sm h-8"></input>
//             </div>
//             <div className="mb-4 w-72">
//               <label className="  ">Phone Number</label>
//               <input className=" mt-2 p-4 drop-shadow-md  focus:border-primary w-full rounded-sm h-8"></input>
//             </div>
//             <div className="mb-4 w-72">
//               <label className="  ">email</label>
//               <input className=" mt-2  p-4   drop-shadow-md  focus:border-primary w-full rounded-sm h-8"></input>
//             </div>
//             <div className="mb-4 w-72">
//               <label className="  ">GENDER</label>
//               <input className=" mt-2  p-4    drop-shadow-md  focus:border-primary w-full rounded-sm h-8"></input>
//             </div>
//             <div className="mb-4 w-72">
//               <label className="  ">AGE</label>
//               <input className=" mt-2 p-4   drop-shadow-md  focus:border-primary  w-full rounded-sm h-8"></input>
//             </div>
//             <div className="mb-4 w-72">
//               <label className="  ">Symptoms or breif of problem</label>
//               <input className=" mt-2 p-4    focus:border-primary w-full rounded-sm h-8"></input>
//             </div>
//             <div>
//       <button onClick={handlePayment}>Pay Now</button>
//       {paymentError && <p>{paymentError}</p>}
//     </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopUp;

// new code
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "./Button";

const PopUp = () => {
  if (localStorage.getItem("data")) localStorage.removeItem("data");
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    phone: 0,
    email: "",
    gender: "",
    age: 0,
    symptom: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/checkout");
    // <Checkout data={data}/>
    // console.log("data",data);
  };
  return (
    <div className="mt-28">
      <div className="flex justify-center font-bold text-3xl">
        Enter Patient Details{" "}
      </div>
      <div className="flex justify-center items-center py-10 w-screen ">
        <div className="lg:w-2/3 w-full py-10  flex  ">
          <div className="hidden md:flex w-1/2 items-center ">
            <img
              src="/images/registerbg1.jpg"
              className=""
              alt="Ni mila😢😢"
            ></img>
          </div>
          <div className=" w-full md:w-1/2 p-6 ">
            <div className="mb-4 w-72">
              <label className=" ">Name</label>
              <input
                onChange={handleChange}
                value={data.name}
                name="name"
                className=" mt-2  p-4  drop-shadow-md  focus:border-primary w-full rounded-sm h-8"
              ></input>
            </div>
            <div className="mb-4 w-72">
              <label className="  ">Phone Number</label>
              <input
                onChange={handleChange}
                value={data.phone}
                name="phone"
                className=" mt-2 p-4 drop-shadow-md  focus:border-primary w-full rounded-sm h-8"
              ></input>
            </div>
            <div className="mb-4 w-72">
              <label className="  ">email</label>
              <input
                onChange={handleChange}
                value={data.email}
                name="email"
                className=" mt-2  p-4   drop-shadow-md  focus:border-primary w-full rounded-sm h-8"
              ></input>
            </div>
            <div className="mb-4 w-72">
              <label className="  ">GENDER</label>
              <input
                onChange={handleChange}
                value={data.gender}
                name="gender"
                className=" mt-2  p-4    drop-shadow-md  focus:border-primary w-full rounded-sm h-8"
              ></input>
            </div>
            <div className="mb-4 w-72">
              <label className="  ">AGE</label>
              <input
                onChange={handleChange}
                value={data.age}
                name="age"
                className=" mt-2 p-4   drop-shadow-md  focus:border-primary  w-full rounded-sm h-8"
              ></input>
            </div>
            <div className="mb-4 w-72">
              <label className="  ">Symptoms or breif of problem</label>
              <input
                onChange={handleChange}
                value={data.symptom}
                name="symptom"
                className=" mt-2 p-4    focus:border-primary w-full rounded-sm h-8"
              ></input>
            </div>
            {/* <Button text="Book " /> */}
            <button
              onClick={handleSubmit}
              style={{
                border: "2px solid black",
                padding: "0px 15px 0px 15px",
                backgroundColor: "beige",
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
