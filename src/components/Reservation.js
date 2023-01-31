import React from "react";
import reservation1 from "../img/1440/reservation-1.jpg";
import reservation2 from "../img/1440/reservation-2.jpg";
import reservation3 from "../img/1440/reservation-3.jpg";

function Reservation() {
  return (
    <section className="reservation">
        <div className="reservation__block">
          <h2 className="section-title">Выберите ваш дом</h2>
          <p className="section-subtitle reservation__subtitle">
            У нас есть дома для любых мероприятий. Для большой компании у нас
            есть двухэтажный дом на самом краю леса.
          </p>
          <button className="button reservation__button button_hover">
            Подробнее
          </button>
          <ul className="reservation__list">
            <li className="reservation__item">
              <img
                className="reservation__img"
                src={reservation1}
                alt="Маленький домик"
              />
              <h3 className="reservation__item-title">Маленький домик</h3>
              <p className="section-subtitle reservation__item-subtitle">
                Уютный коттедж с 3 спальнями и бильярдом.
              </p>
              <a href="#" className="reservation__more link">
                <span className="reservation__arrow">Подробнее</span>
              </a>
            </li>
            <li className="reservation__item">
              <img
                className="reservation__img"
                src={reservation2}
                alt="Большой дом"
              />
              <h3 className="reservation__item-title">Большой дом</h3>
              <p className="section-subtitle reservation__item-subtitle">
                266 кв.м. с тремя спальнями, четырьмя санузлами, камином и
                бильярдом.
              </p>
              <a href="#" className="reservation__more link">
                <span className="reservation__arrow">Подробнее</span>
              </a>
            </li>
            <li className="reservation__item">
              <img
                className="reservation__img"
                src={reservation3}
                alt="Двухэтажный дом"
              />
              <h3 className="reservation__item-title">Двухэтажный дом</h3>
              <p className="section-subtitle reservation__item-subtitle">
                Коттедж с сауной, четырьмя спальнями и бильярдом. Идеально
                подойдет для полноценного празднования нового года.
              </p>
              <a href="#" className="reservation__more link">
                <span className="reservation__arrow">Подробнее</span>
              </a>
            </li>
          </ul>
          <ul className="reservation__link-list">
            <li className="reservation__link-item">
              <a href="#" className="reservation__link link">
                <span className="reservation__arrow">Подробнее</span>
              </a>
            </li>
            <li className="reservation__link-item">
              <a href="#" className="reservation__link link">
                <span className="reservation__arrow">Подробнее</span>
              </a>
            </li>
            <li className="reservation__link-item">
              <a href="#" className="reservation__link link">
                <span className="reservation__arrow">Подробнее</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Reservation;