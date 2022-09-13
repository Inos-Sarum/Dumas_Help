import React from "react";
import Header from "../components/Header";

const Prices = () => {
  return (
    <div>
      <Header />
      <h2>Tarifs</h2>
      <div className="tarif-container">
        <ul className="services-container">
          <li>
            <h3>Suivi Administratif</h3>
          </li>
          <li>
            <h3>Comptabilité</h3>
          </li>
          <li>
            <h3>Gestion des Paies</h3>
          </li>
          <li>
            <h3>Rédaction Juridique</h3>
          </li>
          <li>
            <h3>Standby</h3>
          </li>
        </ul>
        <ul className="description-container">
          <li>
            <h3>Description 1</h3>
          </li>
          <li>
            <h3>Description 1</h3>
          </li>
          <li>
            <h3>Description 1</h3>
          </li>
          <li>
            <h3>Description 1</h3>
          </li>
          <li>
            <h3>Description 1</h3>
          </li>
        </ul>
        <ul className="prices-container">
          <li>
            <h3>Prix 1</h3>
          </li>
          <li>
            <h3>Prix 2</h3>
          </li>
          <li>
            <h3>Prix 3</h3>
          </li>
          <li>
            <h3>Prix 4</h3>
          </li>
          <li>
            <h3>Prix 5</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Prices;
