import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Galeria from "./pages/Galeria";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/galeria" element={<Galeria />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
