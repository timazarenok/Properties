import React from 'react'
import { Link } from "react-router-dom";

const LandingProperty = ({ id, name, square, price, number_of_bedrooms, number_of_bathrooms, number_of_car_parking }) => (
  <>
    <div className="team-img">
      <img src="images/p1.jpg" className="img-responsive" alt=" " />
      <figcaption className="overlay">
        <Link to={"/property/" + id}>Подробнее</Link>
      </figcaption>
    </div>
    <div className="prop-info-w3ls">
      <div className="both-w3-agileits">
        <p>
          <i className="fas fa-building" aria-hidden="true" />
          {square} кв.м
        </p>
      </div>
      <div className="both-w3-agileits">
        <p>
          <i className="fa fa-bed" aria-hidden="true" /> {number_of_bedrooms}
        </p>
      </div>
      <div className="both-w3-agileits">
        <p>
          <i className="fas fa-bath" aria-hidden="true" /> {number_of_bathrooms}
        </p>
      </div>
      <div className="both-w3-agileits">
        <p>
          <i className="fas fa-car" aria-hidden="true" /> {number_of_car_parking}
        </p>
      </div>
      <div className="clearfix"> </div>
    </div>
    <div className="prop-btm-w3ls">
      <h4>
        {name} <span>${price}</span>
      </h4>
    </div>
  </>
)

export default LandingProperty;