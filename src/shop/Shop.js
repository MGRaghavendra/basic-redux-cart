import React, { Component } from "react";
import Product from "./Product";
import "./Shop.css";
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    let data = await (await fetch("./Products.json")).json();
    this.setState((state) => {
      return {
        ...state,
        products: data,
      };
    });
  }

  render() {
    return (
      <div className="items-wrapper">
        {this.state.products.map((item, index) => (
          <Product
            key={index}
            id={index}
            url={item.img_url}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    );
  }
}
