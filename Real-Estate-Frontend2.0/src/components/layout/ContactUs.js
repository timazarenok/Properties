import React, { Component } from "react";
import axios from "axios";

import InnerPageBanner from "./InnerPageBanner";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      subject: props.location.state.subject,
      message: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const inquiry = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    axios
      .post("/api/add", inquiry)
      .then((res) => {
        this.setState({
          firstname: "",
          lastname: "",
          email: "",
          subject: "",
          message: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in Inquiry!");
      });
  };

  render() {
    const { subject } = this.props.location.state;
    return (
      <div>
        <InnerPageBanner />
        <section className="contact_form py-5">
          <div className="container">
            <div className="heading">
              <h1 className="heading text-capitalize mb-5 pb-3">
                <span>Contact</span> Us
              </h1>
              <h4 className="position cont">CONTACT</h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-w3ls w3ls-left">
                <input
                  type="text"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  className="name"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-rght">
                <input
                  type="text"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  className="name"
                  name="lastname"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-left">
                <input
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  className="name"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-rght">
                <input
                  type="text"
                  value={this.state.subject || subject}
                  onChange={this.onChange}
                  className="name"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="input-w3ls">
                <textarea
                  placeholder="Your Message"
                  value={this.state.message}
                  onChange={this.onChange}
                  name="message"
                  id="message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="input-w3ls">
                <input type="submit" defaultValue="Send Message" />
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default ContactUs;
