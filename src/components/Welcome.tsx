import React from "react";
import logo from "../assets/logo1.png";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="w-screen h-screen">
      <img src={logo} alt="logo" className="mx-auto h-24 mb-4" />
      <h1 className="text-6xl underline underline-offset-8">BMI Calculator</h1>
      <div className="lg:w-[40vw] w-[80vw] border-2 border-white mx-auto mt-12 rounded-xl p-8">
        <h2 className="text-green-400 font-bold mb-3 text-xl"> First : What is BMI?</h2>
        <p className="text-lg leading-10">
          Body Mass Index (BMI) is a person’s weight in kilograms (or pounds)
          divided by the square of height in meters (or feet). A high BMI can
          indicate high body fatness. BMI screens for weight categories that may
          lead to health problems, but it does not diagnose the body fatness or
          health of an individual.
        </p>
        <p className="text-lg leading-10 underline font-semibold"> Note : The results of this Calulator is intended for adults (Men & Women) over the age of 20. </p>
      </div>
      <Link to='/units'><Button>Let's Start</Button></Link>
    </div>
  );
}
