import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        {/* footer */}
        <section className="agile-footer w3ls-section py-5">
          <div className="container">
            <div className="list-footer">
              <ul className="footer-nav text-center">
                <li>
                  <a href="#">Главная</a>
                </li>
                <li>
                  <a href="#">Онас</a>
                </li>
                <li>
                  <a href="#">Сервисы</a>
                </li>
                <li>
                  <a href="/properties">Недвижимость</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div className="agileits_w3layouts-footer-bottom">
              <div className="row w3_agile-footer-grids py-5 my-4">
                <div className="col-lg-3 w3_agile-footer1 f1">
                  <h2 className="mb-3">
                    <a href="index.html">Lanka Land</a>
                  </h2>
                  <p>
                    Сайт создан для удобного поиска дешевой недвижимости
                    и последующей ее аренды
                  </p>
                </div>
                <div className="col-lg-7 col-md-9 mt-lg-0 mt-4 row w3_agile-footer1 f2">
                  <div className="col-md-4 col-sm-4 mb-sm-0 mb-4 inner-li">
                    <h5 className="mb-3">Партнеры</h5>
                    <ul className="w3ls-footer-bottom-list">
                      <li>
                        <a className="page-scroll scroll" href="#about">
                          Дизайнеры
                        </a>
                      </li>
                      <li>
                        <a className="page-scroll scroll" href="#pricing">
                          Разработчики
                        </a>
                      </li>
                      <li>
                        <a className="page-scroll scroll" href="#gallery">
                          Строители
                        </a>
                      </li>
                      <li>
                        <a className="page-scroll scroll" href="#gallery">
                          Конструкторы
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 mb-sm-0 mb-4 inner-li">
                    <h5 className="mb-3">О нас</h5>
                    <ul className="w3ls-footer-bottom-list">
                      <li>
                        <a href="#">История</a>
                      </li>
                      <li>
                        <a href="#">Правила пользования</a>
                      </li>
                      <li>
                        <a href="#">Приватная политика</a>
                      </li>
                      <li>
                        <a href="#">Блог</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 inner-li">
                    <h5 className="mb-3">Поддержка</h5>
                    <ul className="w3ls-footer-bottom-list">
                      <li>
                        <a href="#">24/7 Поддержка</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Медиа</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 mt-lg-0 mt-4 w3_agile-footer1 f3">
                  <h5 className="mb-3">Нужна помощь?</h5>
                  <ul className="footer-social-icons">
                    <li>
                      <a href="#">Свяжитесь с нами</a>
                    </li>
                    <li>
                      <a href="#">Информационная база</a>
                    </li>
                    <li>
                      <a href="#">PDF документ</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* //footer */}
      </div>
    );
  }
}

export default Footer;
