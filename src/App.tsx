import { useState } from "react";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UnitSelector from "./components/UnitSelector";
import Height from "./components/Height";
import DataProvider from "./components/data-context";
import Weight from "./components/Weight";
import Results from "./components/Results";

function App() {
  return (
    <div className="mt-20 mx-auto text-center  overflow-hidden">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/units" element={<UnitSelector />} />
            <Route path="/height" element={<Height />} />
            <Route path="/weight" element={<Weight />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
