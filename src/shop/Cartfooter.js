import "./Cartfooter.css";
import React, { Component } from "react";
import { connect } from "react-redux";

class Cartfooter extends Component {
  render() {
    let total_amount = 0;
    for (let item of this.props.cart) {
      total_amount = total_amount + item.price;
    }
    return (
      <div className="cartfooter">
        <h1>
          Total price: <span>{total_amount}$</span>
        </h1>
        <button>pay</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};

export default connect(mapStateToProps)(Cartfooter);
