import React from "react";
import { Link } from "react-router-dom";
import { toggleOverlay } from "../../actions/overlayActions";
import { connect } from "react-redux";
import CartOverlay from "../CartOverlay";

class CartAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectorOpened: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      cart: props.cart,
    };
  }

  displayQuantity() {
    const quantity = this.state.cart.reduce(
      (previousQuantity, currentItem) =>
        previousQuantity + currentItem.quantity,
      0
    );
    if (quantity) return <div className="quantity-bubble">{quantity}</div>;
  }

  render() {
    return (
      <div className="cart-action">
        <img
          src="/images/cart.png"
          alt="cart"
          width={20}
          height={20}
          onClick={() => {
            this.setState({ selectorOpened: !this.state.selectorOpened });
            this.props.toggleOverlay();
          }}
          style={{ cursor: "pointer" }}
        />
        <div
          className={`cart-overlay ${
            this.state.selectorOpened ? "cart-overlay-open" : ""
          }`}
        >
          <CartOverlay />
        </div>

        {this.displayQuantity()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  toggleOverlay,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartAction);
