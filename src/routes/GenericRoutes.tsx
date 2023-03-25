import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Patients from "../pages/Patients";
import PatientsHistory from "../pages/PatientsHistory";

function GenericRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/patients_history" element={<PatientsHistory />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default GenericRoutes;
