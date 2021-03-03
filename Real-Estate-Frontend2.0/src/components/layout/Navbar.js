import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        {/* Navigation */}
        <header>
          <div className="top-nav">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand text-uppercase" href="/">
                  Lanka Land <i className="fas fa-building" />
                  <span>Real Property</span>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center pr-md-4"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Главная
                      </Link>
                      {/* <a className="nav-link" href="/">Home</a> */}
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        О нас
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">
                        Сервисы
                      </a>
                    </li>
                    {/* <li className="dropdown nav-item">
                      <a
                        href="#"
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                      >
                        Pages
                        <b className="caret" />
                      </a>
                      <ul className="dropdown-menu agile_short_dropdown">
                        <li>
                          <a href="single.html">Single Page</a>
                        </li>
                        <li>
                          <a href="history.html">History</a>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className="nav-item">
                      <Link
                        to="/register"
                        style={{
                          display: user.name === undefined ? "block" : "none",
                        }}
                        className="nav-link"
                      >
                        Register
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link
                        to="/login"
                        style={{
                          display: user.name === undefined ? "block" : "none",
                        }}
                        className="nav-link"
                      >
                        Админ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/dashboard"
                        style={{
                          display: user.name === undefined ? "none" : "block",
                        }}
                        className="nav-link"
                      >
                        Сообщения
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        onClick={this.onLogoutClick}
                        style={{
                          display: user.name === undefined ? "none" : "block",
                        }}
                      >
                        Выход
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
        {/* //Navigation */}
      </div>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
