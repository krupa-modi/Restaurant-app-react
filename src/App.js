import React from "react";
import Meal from "./components/Meal";
import MealInstruction from "./components/MealInstruction";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={<MealInstruction />} />
      </Routes>
    </>
  );
}

export default App;
