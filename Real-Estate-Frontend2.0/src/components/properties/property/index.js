import React, { Component } from 'react'

import axios from "axios";
import { Link } from "react-router-dom";

import InnerPageBanner from '../../layout/InnerPageBanner'



class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("/api/properties/property/" + this.props.match.params.id)
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const data = {...this.state.data }
    console.log(data)
    return (
      <>
        <InnerPageBanner />
        <div className="banner_bottom read_page py-5 my-md-5">
          <div className="container">
            <div className="heading">
              <h1 className="heading text-uppercase mb-5 pb-3">
                <span>Недвижимость</span> Описание
              </h1>
              <h4 className="position cont">{data.name}</h4>
            </div>
            <div className="inner_sec_info_agile_w3_info">
              <div className="read_img">
                <img src="images/1.jpg" alt={data.name} className="img-responsive" />
                <ul className="property-info mt-4">
                  <li>
                    <span className="fas fa-building" /> {data.square}кв.м
                  </li>
                  <li>
                    <span className="fas fa-bed" /> {data.number_of_bedrooms} Спален
                  </li>
                  <li>
                    <span className="fas fa-bath" /> {data.number_of_bathrooms} Ванных комнат
                  </li>
                  <li>
                    <span className="fas fa-car" /> {data.number_of_car_parking} Парковочных мест
                  </li>
                  <li>
                    <span className="prop-btm-w3ls"/>
                    <span>${data.price}</span>
                  </li>
                </ul>
                <p className="para mt-2">
                  <span className="fas fa-map-marker-alt" />
                  <strong>Адрес : </strong> {data.address}
                </p>
                <p className="read_para">
                  {data.description}
                </p>
              </div>
              <div className="ab_button">
                <Link
                  className="btn btn-primary btn-lg"
                  to={{ pathname: "/contactus", state: { subject: data.name }}}
                >
                  Отправить запрос
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Property;