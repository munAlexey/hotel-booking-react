import React from "react";

function Footer() {
  return (
    <footer className="footer">
          <div className="footer__block">
            <div className="footer__left-block">
              <a href="#" className="logo footer__logo">
                HotelBooking
              </a>
              <p className="footer__subtitle">
                Загородный отдых с замечательными видами
              </p>
              <ul className="footer__social-list">
                <li>
                  <a href="">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_659_147)">
                        <path
                          d="M32 6.078C30.81 6.6 29.542 6.946 28.22 7.114C29.58 6.302 30.618 5.026 31.106 3.488C29.838 4.244 28.438 4.778 26.946 5.076C25.742 3.794 24.026 3 22.154 3C18.522 3 15.598 5.948 15.598 9.562C15.598 10.082 15.642 10.582 15.75 11.058C10.296 10.792 5.47 8.178 2.228 4.196C1.662 5.178 1.33 6.302 1.33 7.512C1.33 9.784 2.5 11.798 4.244 12.964C3.19 12.944 2.156 12.638 1.28 12.156C1.28 12.176 1.28 12.202 1.28 12.228C1.28 15.416 3.554 18.064 6.536 18.674C6.002 18.82 5.42 18.89 4.816 18.89C4.396 18.89 3.972 18.866 3.574 18.778C4.424 21.376 6.836 23.286 9.704 23.348C7.472 25.094 4.638 26.146 1.57 26.146C1.032 26.146 0.516 26.122 0 26.056C2.906 27.93 6.35 29 10.064 29C22.136 29 28.736 19 28.736 10.332C28.736 10.042 28.726 9.762 28.712 9.484C30.014 8.56 31.108 7.406 32 6.078Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_659_147">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="">
                    <svg
                      width="44"
                      height="26"
                      viewBox="0 0 44 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.45645 0C2.96474 0 5.26308 0 6.5559 0C7.2023 0 7.70507 0.43094 7.92054 1.00553C8.56695 2.87293 10.0034 6.96685 11.6553 9.76796C13.8819 13.4309 15.3183 14.7956 16.252 14.6519C17.1857 14.4365 16.8984 11.9945 16.8984 10.0552C16.8984 8.11602 17.1139 4.81216 16.1802 3.30387L14.7437 1.221C14.3846 0.718233 14.7437 0.0718235 15.3183 0.0718235H23.5062C24.2962 0.0718235 24.9426 0.718232 24.9426 1.50829V11.9227C24.9426 11.9227 25.3018 13.7901 27.3128 11.8508C29.3239 9.9116 31.4786 6.32044 33.2741 2.65746L33.9924 0.933702C34.2078 0.430939 34.7106 0.0718235 35.2852 0.0718235H40.6001C41.6056 0.0718235 42.3239 1.07735 41.9647 2.01105L41.3902 3.51934C41.3902 3.51934 39.4509 7.39779 37.4399 10.1271C35.4288 12.9282 34.9979 13.5746 35.2852 14.2928C35.5725 15.0111 40.7437 19.8232 42.0366 22.1215C42.3957 22.768 42.683 23.3425 42.9703 23.8453C43.473 24.779 42.7548 26 41.6774 26H35.6443C35.1415 26 34.6388 25.7127 34.4233 25.2818L33.8487 24.3481C33.8487 24.3481 30.1857 20.0387 27.9592 18.674C25.6609 17.3812 25.7327 19.2486 25.7327 19.2486V23.0552C25.7327 24.6354 24.4399 25.9282 22.8598 25.9282H21.4233C21.4233 25.9282 13.5227 25.9282 7.2023 16.5193C2.2465 9.19337 0.594569 4.45304 0.0199833 1.72376C-0.123663 0.861878 0.522746 0 1.45645 0Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__right-block">
              <ul className="footer__nav">
                <li className="footer__home">
                  <h2 className="footer__nav-title">Дома</h2>
                  <ul className="footer__nav-list">
                    <li className="footer__nav-item">
                      <a className="footer__nav-link link" href="#">
                        Маленький домик{" "}
                      </a>
                    </li>
                    <li className="footer__nav-item">
                      <a className="footer__nav-link link" href="#">
                        Большой дом
                      </a>
                    </li>
                    <li className="footer__nav-item">
                      <a className="footer__nav-link link" href="#">
                        Двухэтажный дом
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer__booking">
                  <h2 className="footer__nav-title">Бронирование</h2>
                  <ul className="footer__nav-list">
                    <li className="footer__nav-item">
                      <a className="footer__nav-link link" href="">
                        Оформление
                      </a>
                    </li>
                    <li className="footer__nav-item">
                      <a className="footer__nav-link link" href="">
                        Оплата
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="footer__contacts">
                  <h2 className="footer__nav-title">Контакты</h2>
                  <ul className="footer__nav-list">
                    <li className="footer__nav-item">8-800-555-35-35</li>
                    <li className="footer__nav-item">email@yandex.ru</li>
                    <li className="footer__nav-item">
                      Деревня Кимжа, Архангельская область
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </footer>
  )
}

export default Footer;