import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./styles/index.scss";
import Prestations from "./pages/Prestations";
import Tarifs from "./pages/Tarifs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;