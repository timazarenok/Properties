import React, {Component} from 'react';
import axios from "axios";

import './add-property.css'

class AddProperty extends Component {
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
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
      .post("/api/properties/add", property)
      .then((res) => {
        this.setState({
          name: "",
          description: "",
          address: "",
          price: 0,
          square: 0,
          number_of_bedrooms: 0,
          number_of_bathrooms: 0,
          number_of_car_parking: 0,
        })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <>
        <section className="contact_form py-5">
          <div className="container">
            <div className="heading">
              <h1 className="heading text-capitalize mb-5 pb-3">
                <span>Add</span> Property
              </h1>
              <h4 className="position cont">Properties</h4>
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
                  placeholder="name"
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
                  placeholder="address"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-left">
                <span class="text-muted">Price</span>
                <br/>
                <input
                  type="number"
                  value={this.state.price}
                  onChange={this.onChange}
                  className="number"
                  name="price"
                  id="price"
                  placeholder="price"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-rght">
                <span class="text-muted">Number of bedrooms</span>
                <br/>
                <input
                  type="number"
                  value={this.state.number_of_bedrooms}
                  onChange={this.onChange}
                  className="number"
                  name="number_of_bedrooms"
                  id="number_of_bedrooms"
                  placeholder="number of bedrooms"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-left">
                <span class="text-muted">Number of car parking</span>
                <br/>
                <input
                  type="number"
                  value={this.state.number_of_car_parking}
                  onChange={this.onChange}
                  className="number"
                  name="number_of_car_parking"
                  id="number_of_car_parking"
                  placeholder="number of car parking"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-rght">
                <span class="text-muted">Number of bathrooms</span>
                <br/>
                <input
                  type="number"
                  value={this.state.number_of_bathrooms}
                  onChange={this.onChange}
                  className="number"
                  name="number_of_bathrooms"
                  id="number_of_bathrooms"
                  placeholder="number of bathrooms"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-left">
                <span class="text-muted">Square</span>
                <br/>
                <input
                  type="number"
                  value={this.state.square}
                  onChange={this.onChange}
                  className="number"
                  name="square"
                  id="square"
                  placeholder="square"
                  min="1"
                  required
                />
              </div>
              <div className="input-w3ls">
                <textarea
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChange}
                  name="description"
                  id="description"
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
      </>
    )
  }
}

export default AddProperty;