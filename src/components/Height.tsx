import React, { useContext, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Box from "./Box";
import { DataContext } from "./data-context";

function Height() {
  let { isMetric , setHeight } = useContext(DataContext);
  const feetInputRef = useRef<HTMLInputElement>(null);
  const inchInputRef = useRef<HTMLInputElement>(null);
  const cmInputRef = useRef<HTMLInputElement>(null);

  let navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(isMetric){
      setHeight((Number(cmInputRef.current?.value)))
    } else {
      const enteredFeetValue = feetInputRef.current?.value;
      const enteredInchValue = inchInputRef.current?.value;
      setHeight(Number(enteredFeetValue) * 12 + Number(enteredInchValue))
    }
    navigate("/weight");
  }

  return (
    <div className="w-screen h-screen">
      <Box>
        <h2 className="text-3xl mt-12 font-semibold mx-6 text-center">
          Please Enter Your Height
        </h2>
        <form className="flex flex-col gap-6 justify-center mt-2 w-[50%] mx-auto" onSubmit={handleSubmit}>
          {!isMetric ? (
            <>
              <input
                type="number"
                min="4"
                max="10"
                ref={feetInputRef}
                id="height-foot"
                placeholder="feet"
                onChange={(e)=>setHeight(Number(e.target.value))}
                className="text-black mt-1 block w-3/4 border border-gray-400 rounded p-2"
              />
              <input
                type="number"
                id="height-inch"
                placeholder="inches"
                className="text-black"
                min="0"
                max="12"
                ref={inchInputRef}
              />
            </>
          ) : (
            <input
              type="number"
              id="height-cm"
              placeholder="centimeters"
              className="text-black"
              min="100"
              max="250"
              ref={cmInputRef}
            />
          )}
          <div className="flex gap-6 justify-center mt-8 w-[50%] mx-auto">
            <button
              type="submit"
              className="border-solid border-green-400 border-2 p-2 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-green-400"
            >
              Submit
            </button>
            <button
              type="reset"
              className="border-solid border-red-400 border-2 p-2 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-red-400"
              onClick={() => navigate("/units")}
            >
              Go Back
            </button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Height;
