import React, { useContext, useRef } from "react";
import Box from "./Box";
import { Link } from "react-router-dom";
import { DataContext } from "./data-context";

function Weight() {
  let {isMetric , weight} = useContext(DataContext);
  const weightInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  function handleSubmit(){
    const enteredWeightValue = weightInputRef.current.value;
    weight = Number(enteredWeightValue);
  }
  return (
    <div className="w-screen h-screen">
      <Box>
        <h2 className="text-3xl mt-12 font-semibold mx-6 text-center">
          Please Enter Your Weight
        </h2>
        <div className="flex gap-6 justify-center mt-2 w-[50%] mx-auto">
            <input type="number" id="weight-kg" ref={weightInputRef} placeholder={`Your Weight in ${isMetric?'KGs':'lbs'}`} className="text-black" min={0} max={200} />
        </div>
        <div className="flex gap-6 justify-center mt-8 w-[50%] mx-auto">
          <Link to="/results">
          <button onClick={handleSubmit} className="border-solid border-green-400 border-2 p-2 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-green-400">
            Submit
          </button>
          </Link>
          <Link to="/height">
            <button className="border-solid border-red-400 border-2 p-2 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-red-400">
              Go Back
            </button>
          </Link>
        </div>
      </Box>
    </div>
  );
}

export default Weight;
