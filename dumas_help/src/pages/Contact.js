import React, {useState} from "react";
import FormIndividual from "../components/FormIndividual";
import FormCompany from "../components/FormCompany";
import Header from "../components/Header";

const Contact = () => {
  const [customerType, setCustomerType] = useState("");
  const formCloser = document.querySelector(".form-closer");

  const customerTypeDisplayer = () => {
    if (customerType === "company") {
      return <FormCompany />;
    } else if (customerType === "individual") {
      return <FormIndividual />;
    } else {
      return "";
    }
  };

  return (
    <div>
      <Header />
      <div className="form-choice">
        <div
          className="category-container individual"
          onClick={() => {
            setCustomerType("individual");
          }}
        >
          <h3>Particulier</h3>
        </div>
        <div
          className="category-container company"
          onClick={() => {
            setCustomerType("company");
          }}
        >
          <h3>Entreprise</h3>
        </div>
      </div>
      <button
        className="form-closer"
        onClick={() => {
          setCustomerType("");
        }}
      >
        <span className="first-bar"></span>
        <span className="second-bar"></span>
      </button>
      <div className="formDisplayer">{customerTypeDisplayer()}</div>
    </div>
  );
};

export default Contact;
