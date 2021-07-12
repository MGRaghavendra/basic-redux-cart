import React, { Component } from "react";
import { connect } from "react-redux";
import "./Product.css";
import { add } from "../features/actions/cartactions";
class Product extends Component {
  render() {
    return (
      <div className="product">
        <div className="product--img">
          <img src={this.props.url} alt="" />
        </div>
        <div className="product--details">
          <p>
            {this.props.name} <span>{this.props.price}$</span>
          </p>
          <button
            onClick={() =>
              this.props.addcart({
                url: this.props.url,
                id: this.props.id,
                name: this.props.name,
                price: this.props.price,
                quantity: 1,
              })
            }
          >
            Add Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    addcart: (payload) => dispatch(add(payload)),
  };
};

export default connect(null, mapStateToDispatch)(Product);
