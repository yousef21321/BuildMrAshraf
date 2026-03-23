import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">

          <div className="left row">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="video-container">
              <iframe
                width="100%"
                height="350"
                src="https://www.youtube.com/embed/_3awAWDRl6g"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* ✅ النصوص والمحتوى */}
          <div className="right row">
            <Heading
              subtitle="انطلق في رحلة نحو التفوق في امتحانات الثانوية العامة مع دروس تفاعلية ومراجعات مركزة."
              title="مميزات التعلم مع Edu Masr"
            />

            <div className="items">
              <div className="item flexSB">
                <div className="icon">📘</div>
                <div className="text">
                  <h2>شرح قواعد اللغة بوضوح</h2>
                  <p>فهم عميق ومبسط لقواعد اللغة الإنجليزية خطوة بخطوة.</p>
                </div>
              </div>

              <div className="item flexSB">
                <div className="icon">🧩</div>
                <div className="text">
                  <h2>مفردات وتمارين تفاعلية</h2>
                  <p>تعلّم كلمات جديدة عبر تمارين ممتعة وتطبيقات عملية.</p>
                </div>
              </div>

              <div className="item flexSB">
                <div className="icon">📝</div>
                <div className="text">
                  <h2>اختبارات تحضيرية للثانوية العامة</h2>
                  <p>نماذج اختبارات شاملة لمساعدتك على الاستعداد الكامل للامتحانات.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
