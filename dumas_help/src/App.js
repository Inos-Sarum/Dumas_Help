import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Prestations from "./pages/Prestations";
import Informations from "./pages/Informations";
import Company from "./pages/Company";
import Individual from "./pages/Individual";
import FormIndividual from "./pages/FormIndividual";
import FormCompany from "./pages/FormCompany";
import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/formcompany" element={<FormCompany />} />
        <Route path="/formindividual" element={<FormIndividual />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
