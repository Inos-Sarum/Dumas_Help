import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./styles/index.scss";
import Prestations from "./pages/Prestations";
import Informations from "./pages/Informations";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
