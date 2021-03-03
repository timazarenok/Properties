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
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem atus error sit volupt unde.
                  </p>
                </div>
                <div className="col-lg-7 col-md-9 mt-lg-0 mt-4 row w3_agile-footer1 f2">
                  <div className="col-md-4 col-sm-4 mb-sm-0 mb-4 inner-li">
                    <h5 className="mb-3">Partners</h5>
                    <ul className="w3ls-footer-bottom-list">
                      <li>
                        <a className="page-scroll scroll" href="#about">
                          Estate Group
                        </a>
                      </li>
                      <li>
                        <a className="page-scroll scroll" href="#pricing">
                          Developers
                        </a>
                      </li>
                      <li>
                        <a className="page-scroll scroll" href="#gallery">
                          Builders
                        </a>
                      </li>
                      <li>
                        <a className="page-scroll scroll" href="#gallery">
                          Constructors
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 mb-sm-0 mb-4 inner-li">
                    <h5 className="mb-3">About us</h5>
                    <ul className="w3ls-footer-bottom-list">
                      <li>
                        <a href="#">History</a>
                      </li>
                      <li>
                        <a href="#">Terms of use</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4 inner-li">
                    <h5 className="mb-3">support</h5>
                    <ul className="w3ls-footer-bottom-list">
                      <li>
                        <a href="#">24/7 service</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">media</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 mt-lg-0 mt-4 w3_agile-footer1 f3">
                  <h5 className="mb-3">Need Help?</h5>
                  <ul className="footer-social-icons">
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">knowledge base</a>
                    </li>
                    <li>
                      <a href="#">Pdf document</a>
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
