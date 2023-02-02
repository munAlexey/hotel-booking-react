import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <div className="header__block">
        <a href="/" className="logo">
          HotelBooking
        </a>
        <div className="burger">
          <span className="burger__menu"></span>
        </div>
        <div className="header__nav">
          <nav>
            <ul className="header__list">
              <li className="header__item">
                <NavLink
                onClick={props.isOpen}
                  to="/homes"
                  className={({ isActive }) =>
                    `header__link ${isActive ? "link " : ""}`
                  }
                >
                  Дома
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                onClick={props.isOpen}
                  to="/booking"
                  className={({ isActive }) =>
                    `header__link ${isActive ? "link " : ""}`
                  }
                >
                  Бронирование
                </NavLink>
              </li>
              <li className="header__item">
                <NavLink
                onClick={props.isOpen}
                  to="/contacts"
                  className={({ isActive }) =>
                    `header__link ${isActive ? "link " : ""}`
                  }
                >
                  Контакты
                </NavLink>
              </li>
            </ul>
          </nav>
          <button className="button header__button button_hover" type="button">
            Бронировать
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
