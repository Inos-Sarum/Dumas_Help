import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  const clock = () => {
    const clockDisplay = document.querySelector(".clock");
    const date = new Date();
    const hour = date.toLocaleString().split(" ")[1];
    clockDisplay.textContent = hour;
  };

  setInterval(() => clock(), 1000);

  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          src="./Logo_Dumas_Help_Couleur_Web.png"
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
        <NavLink to="/Contact">
          <div>Contact</div>
        </NavLink>
      </div>
      <div className="clock-container">
        <div className="clock"></div>
      </div>
    </div>
  );
};

export default Header;
