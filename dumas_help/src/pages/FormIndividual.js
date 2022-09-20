import React, {useRef} from "react";
import {init} from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
init(process.env.ID);

const FormIndividual = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_lnmk4es",
        "template_tctilvj",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML =
            "<p className='success'> Votre message a été envoyé avec succès.</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p className='error'> Echec de l'envoi, veuillez réessayer. </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div>
      <Header />
      <div className="form-container individual">
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <ul className="individual-infos">
            <h3>identité</h3>
            <li>
              <label>Nom</label>
              <input type="text" name="name" required autoComplete="off" />
              <label>prenom</label>
              <input type="text" name="siret" required autoComplete="off" />
            </li>
          </ul>
          <ul className="individual-infos">
            <h3>adresse</h3>
            <li>
              <label>N° de rue</label>
              <input type="text" name="number" required autoComplete="off" />
            </li>
            <li>
              <label>Rue</label>
              <input type="text" name="street" required autoComplete="off" />
            </li>
            <li>
              <label>Code postal</label>
              <input type="text" name="postal" required autoComplete="off" />
            </li>
            <li>
              <label>ville</label>
              <input type="text" name="city" required autoComplete="off" />
            </li>
          </ul>

          <ul className="individual-infos">
            <h3>Coordonnées</h3>
            <li>
              <label>N° Téléphone</label>
              <input type="text" name="phone" required autoComplete="off" />
            </li>
            <li>
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                id="email"
              />
            </li>
            <li>
              <label>Message</label>
              <textarea name="message" id="mess" />
            </li>
            <input type="submit" value="Envoyer" className="submit-btn" />
          </ul>
        </form>
        <div className="form-message"></div>
      </div>
    </div>
  );
};

export default FormIndividual;
