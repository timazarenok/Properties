import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import InnerPageBanner from "../layout/InnerPageBanner";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <InnerPageBanner />
        <div className="container">
          *use email = admin@test.com && password = 123456
        </div>
        <section className="contact_form py-5">
          <div className="container">
            <div className="heading">
              <h1 className="heading text-capitalize mb-5 pb-3">
                <span>Login</span>
              </h1>
              <h4 className="position cont">Login</h4>
            </div>
            <form noValidate onSubmit={this.onSubmit} className="login">
              <div className="input-w3ls w3ls-left">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />
                <span className="text-danger font-weight-bold">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-w3ls w3ls-rght">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />
                <span className="text-danger font-weight-bold">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="input-w3ls">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
