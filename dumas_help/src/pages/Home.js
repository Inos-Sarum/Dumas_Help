import React from "react";
import {NavLink} from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="accueil">
        <div className="img-container">
          <img
            src="../img/Modèles-Logos.png"
            alt="logo de l'entreprise Dumas HELP"
          />
        </div>
        <h1>Délivrez vous de la paperasse</h1>
        <div className="choice-container">
          <NavLink to="/individual" className="individual">
            <h2>Particulier</h2>
          </NavLink>

          <NavLink to="/company" className="company">
            <h2>Professionnel</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
