import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Box from "./Box";
import { DataContext } from "./data-context";

function Height() {
  let { isMetric, height } =
    useContext(DataContext);
  const feetInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const inchInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const centimetersInputRef =
    useRef() as React.MutableRefObject<HTMLInputElement>;

  function handleSubmit() {
    const enteredFeetValue = feetInputRef.current.value;
    const enteredInchValue = inchInputRef.current.value;
    const enteredCentiValue = centimetersInputRef.current.value;
    isMetric
      ? (height = Number(enteredFeetValue) * 12 + Number(enteredInchValue))
      : (height = Number(enteredCentiValue));
  }

  return (
    <div className="w-screen h-screen">
      <Box>
        <h2 className="text-3xl mt-12 font-semibold mx-6 text-center">
          Please Enter Your Height
        </h2>
        {!isMetric && (
          <div className="flex gap-6 justify-center mt-2 w-[50%] mx-auto">
            <input
              type="number"
              id="height-foot"
              placeholder="feet"
              className="text-black"
              min={0}
              max={9}
              ref={feetInputRef}
            />
            <input
              type="number"
              id="height-inch"
              placeholder="inches"
              className="text-black"
              min={0}
              max={12}
              ref={inchInputRef}
            />
          </div>
        )}
        {isMetric && (
          <div className="flex gap-6 justify-center mt-2 w-[50%] mx-auto">
            <input
              type="number"
              id="height-foot"
              placeholder="centimeters"
              className="text-black"
              min={0}
              max={250}
              ref={centimetersInputRef}
            />
          </div>
        )}
        <div className="flex gap-6 justify-center mt-8 w-[50%] mx-auto">
          <Link to="/weight">
          <button onClick={handleSubmit} className="border-solid border-green-400 border-2 p-2 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-green-400">
            Submit
          </button>
          </Link>
          <Link to="/units">
            <button className="border-solid border-red-400 border-2 p-2 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-red-400">
              Go Back
            </button>
          </Link>
        </div>
      </Box>
    </div>
  );
}

export default Height;
