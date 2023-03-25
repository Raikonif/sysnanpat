import React from "react";
// import "./App.css";
import { BrowserRouter } from "react-router-dom";
import GenericRoutes from "./routes/GenericRoutes";

function App() {
  return (
    <BrowserRouter>
      <GenericRoutes />
    </BrowserRouter>
  );
}

export default App;
