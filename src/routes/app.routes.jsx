import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Discover } from "../pages/Discover";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/descobrir" element={<Discover />} />
    </Routes>
  );
};