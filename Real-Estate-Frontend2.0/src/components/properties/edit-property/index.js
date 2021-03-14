import React, { Component } from 'react';
import axios from "axios";

import './edit-property.css'
import InnerPageBanner from '../../layout/InnerPageBanner';

class EditProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      address: "",
      price: 0,
      square: 0,
      number_of_bedrooms: 0,
      number_of_bathrooms: 0,
      number_of_car_parking: 0,
      valid: {
        price: false,
        square: false,
        number_of_bedrooms: false,
        number_of_bathrooms: false,
        number_of_car_parking: false
      },
      formValid: false
    };
  }

  componentDidMount() {
    axios
      .get("/api/properties/property/" + this.props.match.params.id)
      .then((response) => {
        const { name, description, address, price, square, number_of_bedrooms, number_of_bathrooms, number_of_car_parking } = response.data;
        this.setState({
          name: name,
          description: description,
          address: address,
          price: price,
          square: square,
          number_of_bedrooms: number_of_bedrooms,
          number_of_bathrooms: number_of_bathrooms,
          number_of_car_parking: number_of_car_parking,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  validateField(field, value) {
    const valid = this.state.valid;
    let priceValid = valid.price;
    let bedroomsValid = valid.number_of_bedrooms;
    let bathroomsValid = valid.number_of_bathrooms;
    let carparkingValid = valid.number_of_car_parking;
    let squareValid = valid.square;

    switch (field) {
      case 'price':
        priceValid = value >= 0
        break;
      case 'number_of_bedrooms':
        bedroomsValid = value >= 0
        break;
      case 'number_of_bathrooms':
        bathroomsValid = value >= 0
        break;
      case 'number_of_car_parking':
        carparkingValid = value >= 0
        break;
      case 'square':
        squareValid = value >= 0
        break;
    }
    this.setState({
      valid: {
        price: priceValid,
        square: squareValid,
        number_of_bedrooms: bedroomsValid,
        number_of_bathrooms: bathroomsValid,
        number_of_car_parking: carparkingValid
      }
    }, this.validateForm)
  }

  validateForm() {
    const { price, square, number_of_bedrooms, number_of_bathrooms, number_of_car_parking } = this.state.valid;
    this.setState({formValid: price && square && number_of_bedrooms && number_of_bathrooms && number_of_car_parking});
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validateField(name, value));
  };

  onAddClick = (e) => {
    e.preventDefault();

    const property = {
      name: this.state.name,
      lastname: this.state.lastname,
      description: this.state.description,
      address: this.state.address,
      price: this.state.price,
      square: this.state.square,
      number_of_bedrooms: this.state.number_of_bedrooms,
      number_of_bathrooms: this.state.number_of_bathrooms,
      number_of_car_parking: this.state.number_of_car_parking,
    };

    axios
      .put(`/api/properties/property/${this.props.match.params.id}/edit`, property)
      .then((res) => {
        this.props.history.push("/property/" + this.props.match.params.id)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <InnerPageBanner />
        <section className="contact_form py-5">
          <div className="container">
            <div className="heading">
              <h1 className="heading text-capitalize mb-5 pb-3">
                <span>Редактирование</span> Объекта
              </h1>
              <h4 className="position cont">Объекты</h4>
            </div>
            <form noValidate onSubmit={this.onAddClick}>
              <div className="input-w3ls w3ls-left">
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange}
                  className="name"
                  name="name"
                  id="name"
                  placeholder="Имя"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-rght">
                <input
                  type="text"
                  value={this.state.address}
                  onChange={this.onChange}
                  className="name"
                  name="address"
                  placeholder="Адрес"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-left">
                <span class="text-muted">Цена</span>
                <br />
                <input
                  type="number"
                  value={this.state.price}
                  onChange={this.onChange}
                  className="number"
                  name="price"
                  id="price"
                  placeholder="цена"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-rght">
                <span class="text-muted">Количество спален</span>
                <br />
                <input
                  type="number"
                  value={this.state.number_of_bedrooms}
                  onChange={this.onChange}
                  className="number"
                  name="number_of_bedrooms"
                  id="number_of_bedrooms"
                  placeholder="кол-во спален"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-left">
                <span class="text-muted">Количество парковочных мест</span>
                <br />
                <input
                  type="number"
                  value={this.state.number_of_car_parking}
                  onChange={this.onChange}
                  className="number"
                  name="number_of_car_parking"
                  id="number_of_car_parking"
                  placeholder="парковочные места"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-rght">
                <span class="text-muted">Количество ванных комнат</span>
                <br />
                <input
                  type="number"
                  value={this.state.number_of_bathrooms}
                  onChange={this.onChange}
                  className="number"
                  name="number_of_bathrooms"
                  id="number_of_bathrooms"
                  placeholder="Количество ванных комнат"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-left">
                <span class="text-muted">Площадь</span>
                <br />
                <input
                  type="number"
                  value={this.state.square}
                  onChange={this.onChange}
                  className="number"
                  name="square"
                  id="square"
                  placeholder="Площадь"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls">
                <textarea
                  placeholder="Описание"
                  value={this.state.description}
                  onChange={this.onChange}
                  name="description"
                  id="description"
                  required
                />
              </div>
              <div className="input-w3ls">
                <input type="submit" disabled={!this.state.formValid}>Подтвердить</input>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
}

export default EditProperty;