import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./data-context";
import Box from "./Box";
import GreenButton from "./GreenButton";
import RedButton from "./RedButton";

function Height() {
  let { isMetric, setHeight } = useContext(DataContext);
  let [hasError, setHasError] = useState<boolean>();
  const feetInputRef = useRef<HTMLInputElement>(null);
  const inchInputRef = useRef<HTMLInputElement>(null);
  const cmInputRef = useRef<HTMLInputElement>(null);

  let navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isMetric) {
      const enteredCmValue = cmInputRef.current?.value;
      if (
        !enteredCmValue ||
        Number(enteredCmValue) < 100 ||
        Number(enteredCmValue) > 250
      ) {
        setHasError(true);
        return;
      } else {
        setHeight(Number(enteredCmValue));
        setHasError(false);
      }
    } else {
      const enteredFeetValue = feetInputRef.current?.value;
      const enteredInchValue = inchInputRef.current?.value;
      if (
        !enteredFeetValue ||
        !enteredInchValue ||
        Number(enteredFeetValue) > 10 ||
        Number(enteredFeetValue) < 4 ||
        Number(enteredInchValue) > 12
      ) {
        setHasError(true);
        return;
      } else {
        setHeight(Number(enteredFeetValue) * 12 + Number(enteredInchValue));
        setHasError(false);
      }
    }
    navigate("/weight");
  }

  return (
    <div className="w-screen h-screen">
      <Box>
        <h2 className="text-3xl mt-12 font-semibold mx-6 text-center">
          Please Enter Your Height
        </h2>
        <form
          className="flex flex-col gap-10 justify-center items-center align-center mt-4 x mx-auto overflow-visible"
          onSubmit={handleSubmit}
        >
          {!isMetric ? (
            <>
              <input
                type="number"
                min="4"
                max="10"
                ref={feetInputRef}
                id="height-foot"
                placeholder="feet"
                onChange={(e) => setHeight(Number(e.target.value))}
                className="text-black mt-1 block w-3/4 border border-gray-400 h-12 rounded-lg p-2"
              />
              <input
                type="number"
                id="height-inch"
                placeholder="inches"
                className="text-black block w-3/4 border border-gray-400 h-12 rounded-lg p-2"
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
              className="text-black mt-1 block w-3/4 border border-gray-400 h-12 rounded-lg p-2 mx-auto"
              min="100"
              max="250"
              ref={cmInputRef}
            />
          )}
          {hasError ? (
            <p className="text-red-500">
              Please Enter a Valid Number For Your Height
            </p>
          ) : (
            ""
          )}
          <div className="flex lg:flex-row flex-col w-[24rem] items-center justify-center gap-4">
            <GreenButton type="submit">Submit</GreenButton>
            <RedButton type="button" onClick={() => navigate("/units")}>
              Go Back
            </RedButton>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Height;
