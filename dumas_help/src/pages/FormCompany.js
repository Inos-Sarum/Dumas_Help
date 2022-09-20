import React, {useRef} from "react";
import {init} from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
init(process.env.ID);

const FormCompany = () => {
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
          formMess.innerHTML = "<p className='success'> Message envoyé </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p className='error'> Echec de l'envoi, veuillez réessayer </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div>
      <Header />
      <div className="form-container company">
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <ul className="company-infos">
            <h3>raison sociale</h3>
            <li>
              <label>Nom de l'entreprise</label>
              <input type="text" name="name" required autoComplete="off" />
            </li>
            <li>
              <label>N° Siret</label>
              <input type="text" name="siret" required autoComplete="off" />
            </li>
          </ul>

          <ul className="company-infos">
            <h3>adresse</h3>
            <li>
              <label>N°</label>
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

          <ul className="company-infos">
            <h3>Coordonnées</h3>
            <li>
              <label>Personne à contacter</label>
              <input type="text" name="contact" required autoComplete="off" />
            </li>
            <li>
              <label>Fonction</label>
              <input type="text" name="role" required autoComplete="off" />
            </li>
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
          <div className="form-message"></div>
        </form>
      </div>
    </div>
  );
};

export default FormCompany;
