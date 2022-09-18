import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <NavLink to="/" className="logo-container">
        <img
          src="../img/Modèles-Logos.png"
          alt="Logo de l'entreprise d'aide administrative (comptabilité, gestion de comptes bancaires, démarches administratives diverses) Dumas Help"
        />
      </NavLink>

      <div className="navigation">
        <ul className="btn-container">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? " nav-btn " : "nav-btn")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/prestations"
            className={(nav) => (nav.isActive ? " nav-btn " : "nav-btn")}
          >
            <li>Prestations</li>
            <ul className="subtn-container">
              <NavLink
                to=""
                className={(nav) => (nav.isActive ? "subtn " : "subtn")}
              >
                <li>Professionel</li>
              </NavLink>
              <NavLink
                to=""
                className={(nav) => (nav.isActive ? "subtn " : "subtn")}
              >
                <li>Particulier</li>
              </NavLink>
            </ul>
          </NavLink>
          <NavLink
            to=""
            className={(nav) => (nav.isActive ? " nav-btn " : "nav-btn")}
          >
            <li>Informations Utiles</li>
            <ul className="subtn-container">
              <NavLink
                to=""
                className={(nav) => (nav.isActive ? "subtn " : "subtn")}
              >
                <li>Professionel</li>
              </NavLink>
              <NavLink
                to=""
                className={(nav) => (nav.isActive ? "subtn " : "subtn")}
              >
                <li>Particulier</li>
              </NavLink>
            </ul>
          </NavLink>
          <NavLink
            to=""
            className={(nav) => (nav.isActive ? " nav-btn " : "nav-btn")}
          >
            <li>Contact</li>
            <ul className="subtn-container">
              <NavLink
                to="/formcompany"
                className={(nav) => (nav.isActive ? "subtn " : "subtn")}
              >
                <li>Professionel</li>
              </NavLink>
              <NavLink
                to="/formindividual"
                className={(nav) => (nav.isActive ? "subtn " : "subtn")}
              >
                <li>Particulier</li>
              </NavLink>
            </ul>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
