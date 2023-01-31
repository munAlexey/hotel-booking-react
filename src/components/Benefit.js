import React from "react";
import benefit1 from "../img/1440/image_benefit1.jpg";
import benefit2 from "../img/1440/image_benefit2.jpg"

function Benefit() {
  return (
    <section className="benefit">
        <div className="benefit__blocks">
          <div className="benefit__block">
            <div className="benefit__text-block">
              <h2 className="section-title benefit__title-first">Активности</h2>
              <p className="section-subtitle benefit__subtitle">
                К вашим услугам наши прекрасные повора, которые приготовят
                вкусную еду по составленную для вас персональному меню.Также вы
                сможете воспользоваться СПА, тренажерным залом и прочими
                услугами, доступными на нашей территории.
              </p>
            </div>
            <img
              className="benefit__img"
              src={benefit1}
              alt="Активности"
            />
          </div>
          <div className="benefit__block">
            <img
              className="benefit__img"
              src={benefit2}
              alt="100% Натуральные продукты"
            />
            <div className="benefit__text-block">
              <h2 className="section-title benefit__title-second">
                100% Натуральные продукты
              </h2>
              <p className="section-subtitle benefit__subtitle">
                При приготовлении наших блюд мы используем только свежие,
                полезные, натуральные продукты.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Benefit;