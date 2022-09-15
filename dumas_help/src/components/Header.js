import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="./Modèles-Logos.png"
          alt="Logo de l'entreprise d'aide administrative (comptabilité, gestion de comptes bancaires, démarches administratives diverses) Dumas Help"
        />
      </div>
      <div className="nav-container">
        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/Prestations">
          <div>Prestations</div>
        </NavLink>
        <NavLink to="/Informations">
          <div>informations Utiles</div>
        </NavLink>
        <NavLink to="/Contact">
          <div>Contact</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
