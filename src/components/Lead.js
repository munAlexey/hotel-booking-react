import React from "react";
import lead_img1 from "../img/1440/lead__img1.jpg";
import lead_img2 from "../img/1440/lead__img2.jpg";
import lead_img3 from "../img/1440/lead__img3.jpg";

function Lead() {

  return (
    <section className="lead">
      <div className="lead__blocks">
        <div className="lead__text-block">
          <h2 className="section-title lead__title">
            Аренда загородного дома для отдыха
          </h2>
          <p className="section-subtitle">
            Самые выгодные предложения по аренде коттеджей и загородных домов в
            Москве и области
          </p>
          <button className="button lead__button button_hover">
            Бронирование
          </button>
        </div>
        <ul className="lead__list">
          <li className="lead__item">
            <img
              className="lead__img"
              src={lead_img1}
              alt="Первая часть дома"
            />
          </li>
          <li className="lead__item">
            <img
              className="lead__img lead__img_btm"
              src={lead_img2}
              alt="Вторая часть дома"
            />
          </li>
          <li className="lead__item">
            <img
              className="lead__img"
              src={lead_img3}
              alt="Третья часть дома"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Lead;
