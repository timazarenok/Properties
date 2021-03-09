import React from 'react'
import { Link } from 'react-router-dom';

import './property-item.css'

const PropertyItem = ({id, name, image, description, square, number_of_bedrooms, number_of_bathrooms, number_of_car_parking, onDeleteClick}) => (
  <div className="card">
    <img className="card-img-top" src="images/p1.jpg" alt={name}/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">
        {description}
      </p>
    </div>
    <div className="prop-info-w3ls">
        <div className="both-w3-agileits">
          <p>
            <i className="fas fa-building" aria-hidden="true" />
            {square} Sqft
          </p>
        </div>
        <div className="both-w3-agileits">
          <p>
            <i className="fa fa-bed" aria-hidden="true" /> 
            {number_of_bedrooms}
          </p>
        </div>
        <div className="both-w3-agileits">
          <p>
            <i className="fas fa-bath" aria-hidden="true" />
            {number_of_bathrooms}
          </p>
        </div>
        <div className="both-w3-agileits">
          <p>
            <i className="fas fa-car" aria-hidden="true" />
            {number_of_car_parking}
          </p>
        </div>
      </div>
      <button className="btn">
        <Link to={`/property/${id}/edit`}>
          <i class="far fa-edit" />
        </Link>
      </button>
      <button className="btn" onClick={() => onDeleteClick(id)}>
        <i className="far fa-trash-alt" style={{ color: "red" }}/>
      </button>
  </div>
)

export default PropertyItem;