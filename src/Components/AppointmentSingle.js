import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Dashboard from "../Page/Dashboard";
import base from "../url";
const AppointmentSingle = () => {
  const { userId } = useParams();
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    const url = `${base}/appointment/` + userId;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((appointment) => {
        setAppointment(appointment);
        console.log(appointment);
      });
  }, []);
  return (
    <div>
      <Dashboard />
      {appointment ? (
        <div>
          <div className=" ">
            <div className=" px-10 bg-secondary text-lg font-bold text-gray-800 py-1 my-2">
              Personal Details
            </div>
            <div className="px-10">
              <div>Name: {appointment?.personal?.name}</div>
              <div>Age: {appointment?.personal?.age}</div>
              <div>Gender: {appointment?.personal?.gender}</div>
              <div>Phone: {appointment?.personal?.phone}</div>
              <div>Symptoms: {appointment?.personal?.symptoms}</div>
              <div>
                {" "}
                Payment stauts{" "}
                {appointment.personal?.payments.length > 0
                  ? "Success"
                  : "Failed"}
              </div>
            </div>

            <div className=" px-10 bg-secondary text-lg font-bold text-gray-800 py-1 my-2">
              Consultation Details
            </div>

            {appointment.consultation?.map((consult) => (
              <div className="px-10">
                <div>Mode: {consult.mode}</div>
                <div>Date of Booking: {consult.dateOfBooking}</div>
                <div>status {consult.status}</div>
              </div>
            ))}

            <div className=" px-10 bg-secondary text-lg font-bold text-gray-800 py-1 my-2">
              Medicine History
            </div>
            {appointment.medicine?.map((med) => (
              <div className="px-10">
                <div>Orderid : {med.orderId} </div>
                <div>Price : {med.price} </div>
                <div> Update: {med.updates.length}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AppointmentSingle;
