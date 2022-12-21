import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import HousingSheet from "./Pages/HousingSheet";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housingsheet/:housingId" element={<HousingSheet />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
