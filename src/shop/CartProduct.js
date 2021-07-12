import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  remove,
} from "../features/actions/cartactions";
import "./CartProduct.css";
class CartProduct extends Component {
  render() {
    return (
      <div className="cart--item">
        <div className="item--img">
          <img src={this.props.url} alt="" />
        </div>

        <div className="item--details">
          <p>
            DELL <span>{this.props.price}$</span>
            <button
              onClick={() => this.props.handleIncrement({ id: this.props.id })}
            >
              +
            </button>{" "}
            {this.props.quantity}
            <button
              onClick={() => this.props.handleDecrement({ id: this.props.id })}
            >
              -
            </button>
          </p>
          <button
            onClick={() => this.props.handleRemove({ id: this.props.id })}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    handleIncrement: (payload) => dispatch(increaseQuantity(payload)),
    handleDecrement: (payload) => dispatch(decreaseQuantity(payload)),
    handleRemove: (payload) => dispatch(remove(payload)),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(CartProduct);
