import React, { Component } from 'react'
import axios from "axios";

import PropertyItem from './property-item'
import InnerPageBanner from '../layout/InnerPageBanner'
import AddProperty from './add-property'

import './properties.css'

class Properties extends Component {

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

  onDeleteClick(id) {
    axios
      .delete("/api/properties/" + id)
      .then((res) => {
        this.props.history.push("/dashboard");
      })
      .catch((err) => {
        console.log("Error from delete" + err);
      });
  }

  render() {
    const data = this.state.data;
    return (
      <>
        <InnerPageBanner/>
        <ul className="card-list">
          {
            data.map(el => (
              <li key={el.id}>
                <PropertyItem {...el} onDeleteClick={this.onDeleteClick} />
              </li>
            ))
          }
        </ul>
        <AddProperty {...this.state} onAddClick={this.onAddClick}/>
      </>
    )
  }
}

export default Properties;