import React from "react";
import reviewer from "../img/1440/reviewer.png"

function Reviews() {
  return (
    <section className="reviews">
      <div className="reviews__block">
        <h2 className="section-title reviews__title">Отзывы</h2>
        <img
          className="reviews__img"
          src={reviewer}
          alt="фото коментатора"
        />
        <p className="section-subtitle reviews__subtitle">
          Мы очень долго искали коттедж, чтобы отметить день рождение. Все очень
          понравилось. Комфортно, уютно,не дом, а сказка. Все очень
          понравилось,, хочется приехать еще сюда не один раз
        </p>
        <p className="reviews__name">Ирина Иванова</p>
        <div className="toogle reviews__toogle">
          <ul className="toogle__list">
            <li className="toogle__item">
              <a href="#">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="4"
                    cy="4.32097"
                    rx="4"
                    ry="3.9633"
                    fill="#FAB04759"
                    fillOpacity="0.85"
                  />
                </svg>
              </a>
            </li>
            <li className="toogle__item toogle__item_active">
              <a href="#">
                <svg
                  className="toogle__svg toogle__svg_active"
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    className="toogle__svg toogle__svg_active"
                    cx="4"
                    cy="4.32097"
                    rx="4"
                    ry="3.9633"
                    fill="#FAB04759"
                    fillOpacity="0.85"
                  />
                </svg>
              </a>
            </li>
            <li className="toogle__item">
              <a href="#">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="4"
                    cy="4.32097"
                    rx="4"
                    ry="3.9633"
                    fill="#FAB04759"
                    fillOpacity="0.85"
                  />
                </svg>
              </a>
            </li>
            <li className="toogle__item">
              <a href="#">
                <svg
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="4"
                    cy="4.32097"
                    rx="4"
                    ry="3.9633"
                    fill="#FAB04759"
                    fillOpacity="0.85"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Reviews;
