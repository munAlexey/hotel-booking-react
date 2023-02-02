import React from "react";
import phone from "../img/phone.svg";
import email from "../img/email.svg";
import map from "../img/map.svg";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__block">
        <h2 className="contacts__title">Контактная информация</h2>
        <ul className="contacts__list">
          <li className="contacts__item">
            <a href="tel:+880055535355">
              <img className="contacts__img" src={phone} alt="phone" />
            </a>
            <a href="tel:+880055535355" className="contacts__tel">
              +8-800-555-35-35
            </a>
          </li>
          <li className="contacts__item">
            <img className="contacts__img" src={email} alt="phone" />
            <p className="contacts__info">email@yandex.ru</p>
          </li>
          <li className="contacts__item">
            <img className="contacts__img" src={map} alt="map" />
            <p className="contacts__info">
              Деревня Кимжа, Архангельская область
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
