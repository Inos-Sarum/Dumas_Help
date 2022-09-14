import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="presentation-container">
        <div className="presentation">
          <h2>The show must go on !</h2>
          <p>
            Les compagnies de spectacles privées sont souvent chargées d’un
            ensemble de tâches organisationnelles importantes. <br />
            La créations des shows, l’organisation des résidences,
            l’organisation de la coproduction, trouver des dates, la gestion des
            intermittents, la gestion du publique, les costumes, les lumières et
            la sécurité sont tant d’éléments qui sont obligatoires aux
            compagnies pour exister et pour se faire connaitre.{" "}
          </p>
          <br />

          <div className="img-container">
            <img src="" alt="Image de festival" />
          </div>
          <p>
            Il est essentiel pour les compagnies de pouvoir se consacrer à 100%
            à ces activités. Le temps devient alors très précieux et les tâches
            administratives sont parfois complexes, rébarbatives et souvent
            chronophages. <br />
            <br />
            <strong>L’administratif n’est alors pas la priorité.</strong> <br />
            <br />
            Chez "DUMAS Help" notre vocation est d’aider les compagnies de
            spectacle privé dans absolument toutes leurs démarches, de les
            accompagner dans leurs demandes de mécénats, de subventions, dans
            leurs démarches administratives, dans leurs déclarations, leurs
            fiches de paies, la rédaction de leurs contrats. <br />
            Vous pouvez vous décharger de l’ensemble des tâches ou de choisir de
            garder celles qui vous conviennent, nous nous adaptons à vos
            besoins. <br />
            Nous nous chargeons de tout, c’est facile, simple et efficace, vous
            pourrez en toute liberté vous consacrer aux choses plus importantes.
          </p>
        </div>
        <div className="img-container">
          <img src="" alt="Image de festival" />
        </div>
      </div>
    </div>
  );
};

export default Home;
