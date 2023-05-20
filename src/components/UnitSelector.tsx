import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./data-context";
import Box from "./Box";
import GreenButton from "./GreenButton";
import RedButton from "./RedButton";

function UnitSelector() {
  let navigate = useNavigate();

  const { setMetric } = useContext(DataContext);

  return (
    <div className="h-screen">
      <Box>
        <h2 className="text-3xl mt-12 font-semibold mx-6 text-center">
          Please Select The Units You Want To Use{" "}
        </h2>
        <div className="flex flex-col gap-5 mt-16 items-center h-full">
          <GreenButton
            onClick={() => {
              setMetric(true);
              navigate("/height");
            }}
          >
            Metric (m,kgs)
          </GreenButton>
          <RedButton
            onClick={() => {
              setMetric(false);
              navigate("/height");
            }}
          >
            Imperial (ft,lbs)
          </RedButton>
        </div>
      </Box>
    </div>
  );
}

export default UnitSelector;
