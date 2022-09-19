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
      </div>
    );
  }
}

const mapDispatchToProps = {
  toggleOverlay,
};

export default connect(null, mapDispatchToProps)(CartAction);
