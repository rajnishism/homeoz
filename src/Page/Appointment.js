import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import base from "../url"
const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [paid, setPaid]= useState([]);
  const [consult, setConsult]= useState([]);
  const [med, setMed]= useState([]);
  const [revisit, setRevisit]= useState([]);

  useEffect(() => {
    fetch(`${base}/appointment`)
      .then((response) => response.json())
      .then((appointment) => {
        setAppointments(appointment);
        console.log(appointment);
      });
  }, []);
  const showAllAppointments = () => {
    const btn = (document.getElementById(
      "showAllAppointment"
    ).style.backgroundColor = "#ffeaea");
    fetch(`${base}/appointment`)
      .then((response) => response.json())
      .then((appointment) => {
        setAppointments(appointment);
        console.log(appointment);
      });
  };
  const showPaidAppointments = () => {
    fetch(`${base}/paidappointment`)
      .then((response) => response.json())
      .then((appointment) => {
        setAppointments(appointment);
        console.log(appointment);
      });
  };

  const showPendingMedication = () => {
    fetch(`${base}/pendingMedication`)
      .then((response) => response.json())
      .then((appointment) => {
        setAppointments(appointment);
        console.log(appointment);
      });
  };

  const showPendingConsultation = () => {
    fetch(`${base}/pendingConsultation`)
      .then((response) => response.json())
      .then((appointment) => {
        setAppointments(appointment);
        console.log(appointment);
      });
  };

  const showRevisit = (req, res) => {
    fetch(`${base}/revisit`)
      .then((response) => response.json())
      .then((appointment) => {
        setAppointments(appointment);
        console.log(appointment);
      });
  };
  return (
    <div>
      <div className="px-10 sm:flex items-center justify-between">
        <div className="flex items-center">
          <img src="/images/logo.png" className="w-20 inline-block"></img>
          <h2 className="inline text-3xl font-semibold">Homeoz</h2>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center bg-secondary py-2 px-4 mr-2">
            <h2 className="">
              {" "}
              <span className="font-bold text-xl"> &larr;</span> Back to main
              Website
            </h2>
          </div>

          <div className="bg-secondary  p-2 hover:bg-primary hover:text-white">
            Logout
          </div>
        </div>
      </div>

      <div className="w-80 h-10 flex  sm:mx-auto mx-10 my-10 sm:my-0">
        <Link to="../dashboard/contentUpdate">
          <div className="w-28 h-10 bg-secondary  hover:bg-primary mr-2 text-xs justify-center flex items-center">
            {" "}
            <div> Contents Update</div>
          </div>
        </Link>
        <Link to="../dashboard/blogs">
          <div className="w-20 h-10 bg-secondary  hover:bg-primary mr-2 text-xs justify-center flex items-center">
            Blogs
          </div>
        </Link>
        <Link to="../dashboard/appointments">
          <div className="w-28 h-10 bg-secondary hover:bg-primary mr-2 text-xs justify-center flex items-center">
            Appointment
          </div>
        </Link>
      </div>
      <div className="mx-10 mt-4 border-b-2 border-primary  font-bold text-lg ">
        <div> Appointments</div>
      </div>
      <div className="flex ml-10 mt-4 justify-center text-xs ">
        <button
          id="showAllAppointment"
          className="bg-primary rounded-md mx-2 py-2 px-4 hover:bg-secondary shadow-md"
          onClick={() => showAllAppointments()}
        >
          All Appointments {appointments.length}
        </button>
        <button
          className="bg-primary rounded-md mx-2 py-2 px-4 hover:bg-secondary shadow-md"
          onClick={() => showPaidAppointments()}
        >
          All Payment {appointments.length}
        </button>
        <button
          className="bg-primary rounded-md mx-2 py-2 px-4 hover:bg-secondary shadow-md"
          onClick={() => showPendingConsultation()}
        >
          Pending Consultation {appointments.length}
        </button>
        <button
          className="bg-primary rounded-md mx-2 py-2 px-4 hover:bg-secondary shadow-md"
          onClick={() => showPendingMedication()}
        >
          Medicine Pending {appointments.length}
        </button>
        <button
          className="bg-primary rounded-md mx-2 py-2 px-4 hover:bg-secondary shadow-md"
          onClick={() => showRevisit()}
        >
          Revisit {appointments.length}
        </button>
      </div>

      <div className="px-10 ">
        <table className=" w-full  text-center mt-4">
          <tr className="">
            <th className="p-2">Id</th>
            <th className="p-2">Name</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Symptoms</th>

            <th>Payment Status</th>
            <th></th>
          </tr>

          {appointments?.map((appointment) => (
            <tr className="">
              <td className="p-2">{}</td>
              <td className="p-2">{appointment.personal.name}</td>
              <td className="p-2">{appointment.personal.phone}</td>
              <td className="p-2">{appointment.personal.symptoms}</td>
              <td className="p-2">
                {appointment.personal.payments.length ? "Success" : "Failed"}
              </td>
              <td className="border-none">
                <Link to={"/dashboard/appointments/" + appointment._id}>
                  <button className="bg-green-400 p-2 px-4 rounded-md text-sm">
                    {" "}
                    More
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Appointment;
