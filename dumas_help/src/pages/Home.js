import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="presentation-container">
        <div className="presentation">
          <h2>Qui est Dumas Leila ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut,
            illum rerum delectus tempora labore fugiat, enim ullam quidem neque
            consectetur ducimus doloribus repellendus porro numquam iure tenetur
            harum. Animi.
          </p>
        </div>
        <div className="portrait">
          <div className="img-container">
            <img
              src=""
              alt="Portrait de Leila Dumas, fondatrice de Dumas Help"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
