import React, { useState, useEffect } from "react";

const Contact = () => {
  const contactDetails = {
    phone: "+91123456789",
    email: "homeoz@gmail.com",
    address: "ludhiyan",
  };

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    fetch("../contents/contacts")
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
      });
  }, []);

  return (
    <div>
      <div className="text-center mt-10">
        <p className="text-primary font-medium">Contact Us</p>
        <p className="font-bold text-xl"> Feel free to Contact us</p>
      </div>
      <div className="flex items-center justify-around mt-10">
        <div className="flex flex-col  justify-center relative right-10">
          <div className="flex my-6  ">
            <div className="h-20 w-20 rounded-full bg-primary relative left-16   bottom-0 z-10 drop-shadow-lg  p-4">
              <img src="/images/logo.png"></img>
            </div>
            <div className="h-20 w-96 bg-white drop-shadow-lg rounded-lg px-20 flex flex-col justify-center ">
              <div className="text-sm">Call us</div>
              <div className="text-md">
                {contacts.length > 0 && contacts[0].details}
              </div>
            </div>
          </div>

          {/* email */}
          <div className="flex my-6  ">
            <div className="h-20 w-20 rounded-full bg-primary relative left-16   bottom-0 z-10 drop-shadow-lg  p-4">
              <img src="/images/logo.png"></img>
            </div>
            <div className="h-20 w-96 bg-white drop-shadow-lg rounded-lg px-20 flex flex-col justify-center ">
              <div className="text-sm">email us</div>
              <div className="text-md">
                {contacts.length > 0 && contacts[1].details}
              </div>
            </div>
          </div>

          {/* address */}
          <div className="flex my-6  ">
            <div className="h-20 w-20 rounded-full bg-primary relative left-16   bottom-0 z-10 drop-shadow-lg  p-4">
              <img src="/images/logo.png"></img>
            </div>
            <div className="h-20 w-96 bg-white drop-shadow-lg rounded-lg px-20 flex flex-col justify-center ">
              <div className="text-sm">address </div>
              <div className="text-md">
                {contacts.length > 0 && contacts[2].details}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/3 self-end">
          <img src="/images/contactus.png" className=""></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
