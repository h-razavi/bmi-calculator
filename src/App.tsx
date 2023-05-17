import { useState } from "react";
import Welcome from "./components/Welcome";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import UnitSelector from "./components/UnitSelector";
import Height from "./components/Height";
import {DataContextProvider} from "./components/data-context";
import Weight from "./components/Weight";
import Results from "./components/Results";

function App() {
  return (
    <div className="mt-20 mx-auto text-center  overflow-hidden">
      <DataContextProvider>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/units" element={<UnitSelector />} />
            <Route path="/height" element={<Height />} />
            <Route path="/weight" element={<Weight />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </MemoryRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;
