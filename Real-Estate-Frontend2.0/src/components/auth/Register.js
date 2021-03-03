import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import InnerPageBanner from "../layout/InnerPageBanner";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  
componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();
    const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      };
    this.props.registerUser(newUser, this.props.history); 
  };
  
render() {
    const { errors } = this.state;
return (
      <div>
        <InnerPageBanner />
          <section className="contact_form py-5">
            <div className="container">
              <div className="heading">
                <h1 className="heading text-capitalize mb-5 pb-3"><span>Register</span></h1>
                <h4 className="position cont">Register</h4>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="input-w3ls w3ls-left">
                  <input onChange={this.onChange}
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  placeholder="Name"
                  className={classnames("", {
                    invalid: errors.name
                  })} />
                  <span className="text-danger font-weight-bold">
                  {errors.name}
                </span>
                </div>
                <div className="input-w3ls w3ls-rght">
                  <input  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                  className={classnames("", {
                    invalid: errors.email
                  })} />
                  <span className="text-danger font-weight-bold">
                  {errors.email}
                  </span>
                </div>
                <div className="input-w3ls w3ls-left">
                  <input onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  className={classnames("", {
                    invalid: errors.password
                  })} />
                  <span className="text-danger font-weight-bold">
                  {errors.password}
                </span>
                </div>
                <div className="input-w3ls w3ls-rght">
                  <input onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                  className={classnames("", {
                    invalid: errors.password2
                  })} />
                  <span className="text-danger font-weight-bold">
                  {errors.password2}
                  </span>
                </div>
                <div className="input-w3ls">
                  <input type="submit" value="Register" />
                </div>
              </form>              
            </div>
          </section>   
        {/* <div className="row">
          <div className="col s8 offset-s2">
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  
                />
                <label htmlFor="name">Name</label>
                <span className="red-text"></span>
              </div>
              <div className="input-field col s12">
                <input
                 
                />
                <label htmlFor="email">Email</label>
                <span className="red-text"></span>
              </div>
              <div className="input-field col s12">
                <input
                  
                />
                <label htmlFor="password">Password</label>
                <span className="red-text"></span>
              </div>
              <div className="input-field col s12">
                <input
                  
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text"></span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));