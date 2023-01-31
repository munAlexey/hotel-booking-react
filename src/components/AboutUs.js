import React from "react";
import aboutUs from "../img/1440/about-us__img.jpg"

function AboutUs() {
  return (
    <section className="about-us">
        <div className="about-us__block">
          <img
            className="about-us__img"
            src={aboutUs}
            alt="Уютный двухэтажный дом в норвежском стиле"
          />
          <div className="about-us__text-block">
            <h2 className="section-title about-us__title">
              Уютный двухэтажный дом в норвежском стиле
            </h2>
            <p className="section-subtitle about-us__subtitle">
              Просторные коттеджи с видом на лес полностью укомплектованы:
              кондиционер, холодильник, посудомоечная машина, газовая плита,
              духовка, микроволновая печь, чайник, набор посуды и столовых
              приборов. В каждом коттедже: стиральная машина, гладильная
              станция, сушилка для белья, фен.
            </p>
            <button className="button button_hover">Подробнее</button>
          </div>
        </div>
      </section>
  )
}

export default AboutUs;