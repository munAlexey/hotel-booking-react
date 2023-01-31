import React from "react";

function Header() {
  return (
    <header className="header">
          <div className="header__block">
            <a href="#" className="logo">
              HotelBooking
            </a>
            <div className="burger">
              <span className="burger__menu"></span>
            </div>
            <div className="header__nav">
              <nav>
                <ul className="header__list">
                  <li className="header__item">
                    <a href="#" className="header__link link">
                      Дома
                    </a>
                  </li>
                  <li className="header__item">
                    <a href="#" className="header__link link">
                      Бронирование
                    </a>
                  </li>
                  <li className="header__item">
                    <a href="#" className="header__link link">
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
              <button
                className="button header__button button_hover"
                type="button"
              >
                Бронировать
              </button>
            </div>
          </div>
        </header>
  )
}

export default Header;