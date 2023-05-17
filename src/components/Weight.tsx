import React, { useContext, useRef } from "react";
import Box from "./Box";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./data-context";

function Weight() {
  let { isMetric, setWeight } = useContext(DataContext);
  const weightInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const enteredWeightValue = weightInputRef.current?.value;
    enteredWeightValue?setWeight(Number(enteredWeightValue)):setWeight(0)
    navigate("/results")
  }
  return (
    <div className="w-screen h-screen">
      <Box>
        <h2 className="text-3xl mt-12 font-semibold mx-6 text-center">
          Please Enter Your Weight
        </h2>
        <form
          className="flex flex-col gap-6 justify-center mt-2 w-[50%] mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            id="weight"
            ref={weightInputRef}
            placeholder={`Your Weight in ${isMetric ? "KGs" : "lbs"}`}
            className="text-black"
            min={0}
            max={200}
          />
          <div className="flex gap-6 justify-center mt-8 w-[50%] mx-auto">
            <button
              type="submit"
              className="border-solid border-green-400 border-2 p-2 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-green-400"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={()=>navigate("/height")}
              className="border-solid border-red-400 border-2 p-2 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-red-400"
            >
              Go Back
            </button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Weight;
