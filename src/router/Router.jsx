import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashScreen from "../components/splash/SplashScreen";
import Home from "../components/home/Home";
import Dice from "../components/dice/Dice";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Restaurants from "../components/restaurants/Restaurants";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Dice" element={<Dice />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Restaurants" element={<Restaurants />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
