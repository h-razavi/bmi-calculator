import { useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Welcome() {
  let navigate = useNavigate();
  return (
    <div className="w-screen overflow-visible md:overflow-hidden">
      <img src={logo} alt="logo" className="mx-auto h-24 mb-2" />
      <h1 className="text-6xl font-extrabold">BMI Calculator</h1>
      <div className="md:w-[60vw] w-[80vw] border-2 border-white mx-auto mt-12 rounded-xl p-8">
        <h2 className="text-green-400 font-bold mb-3 text-xl">
          {" "}
          First : What is BMI?
        </h2>
        <p className="text-lg leading-10">
          Body Mass Index (BMI) is a person’s weight in kilograms (or pounds)
          divided by the square of height in meters (or feet). A high BMI can
          indicate high body fatness. BMI screens for weight categories that may
          lead to health problems, but it does not diagnose the body fatness or
          health of an individual.
        </p>
        <p className="text-lg leading-10 underline font-semibold">
          Note : The results of this Calulator is intended for adults (Men &
          Women) over the age of 20.
        </p>
      </div>
      <button
        onClick={() => navigate("/units")}
        className="my-6 bg-[var(--primary-button)] p-3 rounded-lg hover:bg-[var(--primary-link)] font-extrabold text-xl"
      >
        Let's Start
      </button>
    </div>
  );
}
