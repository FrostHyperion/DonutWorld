import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
// pages

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Donuts from "./pages/Donuts";
import Donut from "./pages/Donut";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

const stripePromise = loadStripe(
  "pk_test_51M7ilmDvDXyfD6vsxfM1qYe4SKG52Wla4G7KxNbCmiGRq5RWBtcUPFOjISR05AwIfH7dxK9fBo2MlEP84QyCd6lj00DvxXL6De"
);

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  const location = useLocation();
  return (
    <div className="app">
      {location.pathname !== "/login" && <Header /> &&
        location.pathname !== "/register" && <Header /> &&
        location.pathname !== "/reset-password" && <Header />}

      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}></Elements>
        )}
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} /> qa~
        <Route path="/donuts" element={<Donuts />} />
        <Route exact path="/donut/:id" element={<Donut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {location.pathname !== "/login" && <Footer /> &&
        location.pathname !== "/register" && <Footer /> &&
        location.pathname !== "/reset-password" && <Footer />}
    </div>
  );
}
