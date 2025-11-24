import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./Components/Header";
import HomePage from "./Page/HomePage";
import AboutUs from "./Page/AboutUs";
// import Footer from "./Components/Footer";
import Contact from "./Page/ContactUs";
import Blogs from "./Page/Blogs";
import BlogSingle from "./Components/BlogSingle";
// import PopUp from "./Components/PopUp";
import Dashboard from "./Page/Dashboard";
import ContentChange from "./Page/ContentChange";
import Appointment from "./Page/Appointment";
// import BlogEdit from "./Components/BlogEdit";
import BlogChange from "./Page/BlogChange";
import Register from "./Page/Register";
import Checkout from "./Components/Checkout";
import { PaymentSuccess } from "./Components/PaymentSuccess";
import PaymentFailure from "./Components/PaymentFailure";
import AppointmentSingle from "./Components/AppointmentSingle";
import MaterialUiDashboard from "./Components/Dashboard/DashboardHome";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<AboutUs />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/dashboard/blogs" element={<BlogChange />}></Route>
          <Route exact path="/blogs/:id" element={<BlogSingle />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>

          <Route
            exact
            path="/dashboardui"
            element={<MaterialUiDashboard />}
          ></Route>

          <Route
            exact
            path="/falied-payment"
            element={<PaymentFailure />}
          ></Route>
          <Route
            exact
            path="/paymentSuccess"
            element={<PaymentSuccess />}
          ></Route>
          <Route
            exact
            path="/dashboard/appointments"
            element={<Appointment />}
          ></Route>
          <Route
            exact
            path="/dashboard/appointments/:userId"
            element={<AppointmentSingle />}
          ></Route>
          <Route
            exact
            path="/dashboard/contentupdate"
            element={<ContentChange />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};
export default App;
