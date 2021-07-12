import React, { Component } from "react";
import { connect } from "react-redux";
import CartProduct from "./CartProduct";
import "./Cart.css";
import Cartfooter from "./Cartfooter";
class Cart extends Component {
  render() {
    return (
      <div className="cart">
        {this.props.cart.map((item, index) => {
          return (
            <CartProduct
              key={index}
              url={item.url}
              price={item.price}
              quantity={item.quantity}
              id={item.id}
            />
          );
        })}
        {this.props.cart.length > 0 && <Cartfooter />}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};
export default connect(mapStateToProps)(Cart);
