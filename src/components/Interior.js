import React from "react";
import image2 from "../img/1440/image_25.jpg";
import image3 from "../img/1440/image_26.jpg";
import image4 from "../img/1440/image_27.jpg";

function Interior() {
  function handleChoosen(e) {
    setChange(e.target.src);
  }

  const [change, setChange] = React.useState(image2);
  return (
    <section className="interior">
      <h2 className="section-title interior__title">Наши интерьеры</h2>
      <div className="interior__imgs">
        <div className="interior__main-img">
          <img
            className="interior__img"
            onClick={handleChoosen}
            src={change}
            alt="Наши интерьеры - примеры"
          />
          <div className="interior__position">
          </div>
        </div>
        <ul className="interior__list">
          <li className="interior__item">
            <img
              className="interior__item-img"
              onClick={handleChoosen}
              src={image2}
              alt="Наши интерьеры - примеры"
            />
          </li>
          <li className="interior__item">
            <img
              className="interior__item-img"
              onClick={handleChoosen}
              src={image3}
              alt="Наши интерьеры - примеры"
            />
          </li>
          <li className="interior__item">
              <img
                className="interior__item-img"
                onClick={handleChoosen}
                src={image4}
                alt="Наши интерьеры - примеры"
              />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Interior;
