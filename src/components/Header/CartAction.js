import React from "react";
import { toggleOverlay } from "../../actions/overlayActions";
import { connect } from "react-redux";
import CartOverlay from "../CartOverlay";

class CartAction extends React.PureComponent {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {};
  }
  componentDidMount() {
    document.onmousedown = this.handleClickOutside;
  }
  componentWillUnmount() {
    document.onmousedown = null;
  }

  handleClickOutside(e) {
    const { overlay, toggleOverlay } = this.props;
    const { wrapperRef } = this;
    if (wrapperRef && !wrapperRef.current.contains(e.target) && overlay) {
      toggleOverlay();
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      cart: props.cart,
    };
  }

  displayQuantity() {
    const { cart } = this.state;
    const quantity = cart.reduce(
      (previousQuantity, currentItem) =>
        previousQuantity + currentItem.quantity,
      0
    );
    if (quantity) return <div className="quantity-bubble">{quantity}</div>;
  }

  render() {
    const { overlay, toggleOverlay } = this.props;
    return (
      <div className="cart-action" ref={this.wrapperRef}>
        <img
          src="/images/cart.png"
          alt="cart"
          width={20}
          height={20}
          onClick={() => toggleOverlay()}
          style={{ cursor: "pointer" }}
        />
        <div
          className={`cart-overlay ${overlay ? "cart-overlay-open" : ""}`}
          id="cart-overlay"
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
    overlay: state.overlay,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  toggleOverlay,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartAction);
