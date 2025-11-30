import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="منصة أشرف عابد"
              title={
                <>
                  مرحبًا بك في منصة{" "}
                  <span className="text-red-600">م / أشرف عابد</span>
                  <br />
                  لتعليم اللغة الإنجليزية
                </>
              }
            />

            <p>
              استمتع بتجربة تعلم تفاعلية مع حصة لغة إنجليزية مبنية على المغامرة والمرح.
            </p>

            <div className="button">
              <button className="primary-btn">
                انضم الآن <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                جميع الكورسات <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>

          {/* ✨ عناصر الطيران (كتب + حروف) */}
          <div className="flying-elements">
            <span className="book">📚</span>
            <span className="letter">A</span>
            <span className="letter">B</span>
            <span className="letter">C</span>
            <span className="letter">📚</span>
            <span className="letter">📚</span>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
