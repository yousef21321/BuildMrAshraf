import React from "react";
import "./Head.css";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>𝕒𝕤𝕙𝕣𝕒𝕗 𝕒𝕓𝕖𝕕</h1>
          </div>

          <div className="socail">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
