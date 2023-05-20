import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./data-context";
import Box from "./Box";
import GreenButton from "./GreenButton";
import RedButton from "./RedButton";

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
          className="flex flex-col gap-6 justify-center items-center mt-4 w-3/4 lg:w-[70%] mx-auto overflow-visible"
          onSubmit={handleSubmit}
        >
          <input
            type="number"
            id="weight"
            ref={weightInputRef}
            placeholder={`Your Weight in ${isMetric ? "KGs" : "lbs"}`}
            className="text-black mt-1 block w-3/4 border border-gray-400 h-12 rounded-lg p-2 mx-auto"
            min={0}
            max={200}
          />
          <div className="flex lg:flex-row flex-col w-[24rem] items-center justify-center gap-4">
            <GreenButton
              type="submit"            >
              Submit
            </GreenButton>
            <RedButton
              type="button"
              onClick={()=>navigate("/height")}            >
              Go Back
            </RedButton>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Weight;
