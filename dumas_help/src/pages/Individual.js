import React from "react";
import Header from "../components/Header";

const Individual = () => {
  return (
    <div>
      <Header />
      <div className="presentation-container">
        <div className="presentation-individual">
          <h2>Reprenez le dessus !</h2>
          <p className="p1">
            89% des personnes subissent des pertes face à l’administration.
            <br />
            <br />
            Vous vous sentez impuissant face au trésor public ? Si vous pensez
            que vous payez trop d’impôt sur le revenu ?{" "}
            <div className="img-container">
              <div className="img img1"></div>
            </div>
          </p>

          <p className="p2">
            Alors vous êtes au bon endroit !
            <br />
            <br />
            Avec Dumas HELP, nous vous proposons de vous mettre en contact avec
            un comptable , nous vous proposons une analyse afin de faire et
            d’optimiser fiscalement vos déclarations et de vous permettre
            d’économiser parfois considérablement. <strong>*</strong>
            <br />
            <br />
            <i>
              “La chose la plus difficile à comprendre au monde c’est l’impôt
              sur le revenu ! ” - Albert EINSTEIN
            </i>
            <div className="img-container">
              <div className="img img2"></div>
            </div>
          </p>

          <p className="p3">
            Désespéré devant des lenteurs de l’assurance maladie ou démuni
            devant les caisses de retraite ?
            <div className="img-container">
              <div className="img img3"></div>
            </div>
          </p>
          <p className="p3">
            Alors vous êtes au bon endroit !
            <br />
            <br />
            Avec DUMAS Help nous nous proposons de mettre à disposition un
            assistant pour suivre activement votre dossier, pour faire des
            relances actives afin que votre dossier soit solutionné et que vous
            perceviez ce que les organismes vous doivent. <strong>*</strong>
            <div className="img-container">
              <div className="img img4"></div>
            </div>
          </p>
          <p className="p4">
            Vous avez des soupçons face à votre fiche de paie et vous souhaitez
            de l’aide ? <br />
            Vous souhaitez renégocier votre fiche de paie mais vous ne savez pas
            ce que vous pourriez négocier ?
            <div className="img-container">
              <div className="img img5"></div>
            </div>
          </p>
          <p className="p5">
            Alors vous êtes au bon endroit !
            <br />
            <br />
            Avec DUMAS Help nous nous proposons de vous mettre en contact avec
            gestionnaire de paie expérimenté qui se chargera d’analyser votre
            situation, de trouver les malfaçons, de vous proposer des solutions
            à mettre en application. <strong>*</strong>
            <div className="img-container">
              <div className="img img6"></div>
            </div>
          </p>
          <p className="p6">
            <strong>
              Nous nous chargeons de tout.
              <br />
              C’est facile, simple et efficace!
              <br />
              Vous pourrez bénéficier des gains de nos solutions.{" "}
            </strong>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Individual;
