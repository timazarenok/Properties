import React, { Component } from "react";

import axios from "axios";
import LandingProperty from "./landing-property";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/properties")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const data = this.state.data
    return (
      <div id="landing">
        {/*Slider*/}
        <div className="slider">
          <div className="callbacks_container">
            <ul className="rslides callbacks callbacks1" id="slider4">
              <li>
                <div className="slider-img2">
                  <div className="dot">
                    <div className="container">
                      <div className="slider_banner_info_w3ls">
                        <h2 className="text-uppercase mb-5">
                          Арендуйте выгодно <br /> недвижимость
                        </h2>
                        <a
                          href="#"
                          className="read"
                          data-toggle="modal"
                          data-target="#exampleModalCenter"
                          role="button"
                        >
                          Прочитать больше{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clearfix" />
        {/*//Slider*/}
        {/*property */}
        <section className="property mb-5">
          <div className="container-fluid">
            <div className="row agile-team-grids">
              {
                data.map( el => (
                  <div className="col-lg-4 mt-5 col-sm-6 mb-lg-0 mb-5 team-grid">
                    <LandingProperty {...el}/>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        {/* //property */}
      </div>
    );
  }
}
export default Landing;
