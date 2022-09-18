import React from "react";
import Header from "../components/Header";

const Professional = () => {
  return (
    <div>
      <Header />
      <div className="presentation-container">
        <div className="presentation">
          <h2>The show must go on !</h2>
          <div className="img-container">
            <div className="img img1"></div>
          </div>
          <p className="p1">
            Les compagnies de spectacles privées sont souvent chargées d’un
            ensemble de tâches organisationnelles importantes. <br />
            La créations des shows, l’organisation des résidences,
            l’organisation de la coproduction, trouver des dates, la gestion des
            intermittents, la gestion du publique, les costumes, les lumières et
            la sécurité sont tant d’éléments qui sont obligatoires aux
            compagnies pour exister et pour se faire connaitre.{" "}
          </p>

          <div className="img-container">
            <div className="img img2"></div>
          </div>
          <p className="p2">
            Il est essentiel pour les compagnies de pouvoir se consacrer à 100%
            à ces activités. Le temps devient alors très précieux et les tâches
            administratives sont parfois complexes, rébarbatives et souvent
            chronophages. <br />
            <strong>
              L’administratif ne devrait pas être une préoccupation{" "}
            </strong>
            <br />
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
          <div className="img-container">
            <div className="img img3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professional;
