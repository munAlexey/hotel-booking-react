import React from "react";
import image1 from "../img/1440/image_22.jpg";
import image2 from "../img/1440/image_25.jpg";
import image3 from "../img/1440/image_26.jpg";
import image4 from "../img/1440/image_27.jpg";

function Interior() {
  return (
    <section className="interior">
        <h2 className="section-title interior__title">Наши интерьеры</h2>
        <div className="interior__imgs">
          <div className="interior__main-img">
            <a href="#">
              <img
                className="interior__img"
                src={image1}
                alt="Наши интерьеры - примеры"
              />
            </a>
            <div className="interior__position">
              <div className="toogle">
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
                          className="toogle__svg"
                          cx="4"
                          cy="4.32097"
                          rx="4"
                          ry="3.9633"
                          fill="white"
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
                          fill="white"
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
                          className="toogle__svg"
                          cx="4"
                          cy="4.32097"
                          rx="4"
                          ry="3.9633"
                          fill="white"
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
                          className="toogle__svg"
                          cx="4"
                          cy="4.32097"
                          rx="4"
                          ry="3.9633"
                          fill="white"
                          fillOpacity="0.85"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="interior__list">
            <li className="interior__item">
              <a className="interior__link" href="#">
                <img
                  className="interior__img"
                  src={image2}
                  alt="Наши интерьеры - примеры"
                />
              </a>
            </li>
            <li className="interior__item">
              <a className="interior__link" href="#">
                <img
                  className="interior__img"
                  src={image3}
                  alt="Наши интерьеры - примеры"
                />
              </a>
            </li>
            <li className="interior__item">
              <a className="interior__link" href="#">
                <img
                  className="interior__img"
                  src={image4}
                  alt="Наши интерьеры - примеры"
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default Interior;