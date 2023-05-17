import React , {useContext} from "react";
import { Link } from "react-router-dom";
import Box from "./Box";
import {DataContext} from './data-context'



function UnitSelector() {

  const {setUnitsImperial , setUnitsMetric , isMetric} = useContext(DataContext)

  console.log(isMetric);

  return (
    <div className="h-screen w-screen">
      <Box>
        <h2 className="text-3xl mt-12 font-semibold mx-6 text-center">
          Please Select The Units You Want To Use{" "}
        </h2>
          <Link to='/height'>
        <div className="flex flex-col gap-5 mt-16 items-center">
          <button
            className="text-xl border-green-400 border-solid border-2 p-4 rounded-lg hover:shadow-md hover:shadow-slate-500 active:bg-green-400 md:w-[15vw] w-[40vw]"
            onClick={setUnitsMetric}
          >
            Metric (m,kg)
          </button>
          <button
            className="text-xl border-red-400 border-solid border-2 p-4 rounded-lg hover:shadow-md hover:shadow-slate-500 md:w-[15vw] active:bg-red-400 w-[40vw]"
            onClick={setUnitsImperial}
          >
            Imperial (ft,lbs)
          </button>
        </div>
          </Link>
      </Box>
    </div>
  );
}

export default UnitSelector;
