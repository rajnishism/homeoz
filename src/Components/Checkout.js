import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import base from "../url"
const Checkout = () => {
  // const navigate = useNavigate();
  // const {data}=props;
  // const [pres,setPres]=useState(true)
  const [fee, setFee] = useState(100000);

  const storedUser = localStorage.getItem("data");
  const data = JSON.parse(storedUser);
  // if(data){
  //     setPres(true)
  //     console.log("Ahaha");
  // }else{
  //     console.log("naa");
  //     setPres(false)
  //     // navigate(-1)
  // }
  // console.log("Mila",data.name);
  // console.log("Fronted Data",data);
  const handleSubmit = async (e) => {
    const res = await fetch(`${base}/pay/create-order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fee,
        data,
      }),
    });
    const resp = await res.json();
    console.log("resp", resp);
    const order = resp.data;
    const aid = resp.aid;
    console.log("Order", order);
    const options = {
      key: "rzp_test_wnTfrZx6ogS5Ge", // Enter the Key ID generated from the Dashboard
      amount: order.amount,
      currency: "INR",
      name: "Homeoz",
      description: "Appointment Booking",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: `${base}/pay/verify-payment/${aid}.${fee}`,
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var razor = new window.Razorpay(options);
    razor.open();
  };
  // useEffect(()=>{
  //     console.log("Use");
  //     if(pres){
  //         console.log("Hua");
  //     }else{
  //         console.log("Ni hua");
  //     }
  // },[])

  return (
    <>
      <div className="mt-28">
        <div className="flex justify-center font-bold text-3xl">Checkout </div>
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
                  value={data.name}
                  name="name"
                  contentEditable
                  className=" mt-2  p-4  drop-shadow-md  focus:border-primary w-full rounded-sm h-8"
                ></input>
              </div>
              <div className="mb-4 w-72">
                <label className="  ">Phone Number</label>
                <input
                  value={data.phone}
                  name="phone"
                  className=" mt-2 p-4 drop-shadow-md  focus:border-primary w-full rounded-sm h-8"
                ></input>
              </div>
              <div className="mb-4 w-72">
                <label className="  ">email</label>
                <input
                  value={data.email}
                  name="email"
                  className=" mt-2  p-4   drop-shadow-md  focus:border-primary w-full rounded-sm h-8"
                ></input>
              </div>
              <div className="mb-4 w-72">
                <label className="  ">GENDER</label>
                <input
                  value={data.gender}
                  name="gender"
                  className=" mt-2  p-4    drop-shadow-md  focus:border-primary w-full rounded-sm h-8"
                ></input>
              </div>
              <div className="mb-4 w-72">
                <label className="  ">AGE</label>
                <input
                  value={data.age}
                  name="age"
                  className=" mt-2 p-4   drop-shadow-md  focus:border-primary  w-full rounded-sm h-8"
                ></input>
              </div>
              <div className="mb-4 w-72">
                <label className="  ">Symptoms or breif of problem</label>
                <input
                  value={data.symptom}
                  name="symptom"
                  className=" mt-2 p-4    focus:border-primary w-full rounded-sm h-8"
                ></input>
              </div>
              <div className="mb-4 w-72">
                <label className="  ">Fee</label>
                <input
                  value={fee}
                  name="fee"
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
                Proceed To Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
