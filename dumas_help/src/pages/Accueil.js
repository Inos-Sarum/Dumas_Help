import React from "react";
import Header from "../components/Header";

const Accueil = () => {
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
          <div className="company">
            <h2>Professionnel</h2>
          </div>
          <div className="individual">
            <h2>Particulier</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
