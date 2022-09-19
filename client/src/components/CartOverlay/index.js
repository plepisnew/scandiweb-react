import React from "react";
import Attribute from "../../containers/ProductPage/Attribute";
import StyledCartOverlay from "./CartOverlay.styled";
import { connect } from "react-redux";
import {
  addProduct,
  removeProduct,
  updateAttribute,
} from "../../actions/cartActions";
import { Link } from "react-router-dom";

class CartOverlay extends React.Component {
  constructor(props) {
    super(props);
    const displayIndex = [];
    props.cart.forEach(() => displayIndex.push(0));
    this.state = {
      displayIndex,
      cart: props.cart,
    };
  }

  static getDerivedStateFromProps(props, state) {
    const displayIndex = [];
    props.cart.forEach(() => displayIndex.push(0));
    return {
      ...state,
      cart: props.cart,
      displayIndex,
    };
  }

  setAttribute(itemIndex, attributeIndex, index) {
    this.props.updateAttribute({ itemIndex, attributeIndex, index });
  }

  createCartItems(items) {
    return items.map((item, itemIndex) => {
      const selectedCurrency = this.props.currency.symbol;
      const selectedPrice = item.product.prices.filter(
        (price) => price.currency.symbol === selectedCurrency
      )[0];
      const selectedCost = selectedPrice.amount;
      return (
        <div key={JSON.stringify(item)} className="cart-item">
          <div className="left-panel">
            <p className="product-brand">{item.product.brand}</p>
            <p className="product-name">{item.product.name}</p>
            <p className="product-price">
              {selectedCurrency}
              {selectedCost}
            </p>
            <div className="attributes">
              {item.product.attributes.map((attribute, attributeIndex) => (
                <Attribute
                  setAttribute={(index) =>
                    this.setAttribute(itemIndex, attributeIndex, index)
                  }
                  attribute={attribute}
                  key={attribute.id}
                  index={this.state.cart[itemIndex].attributes[attributeIndex]}
                />
              ))}
            </div>
          </div>
          <div className="right-panel">
            <div className="quantity-changer-container">
              <button
                className="quantity-changer"
                onClick={() => {
                  this.props.addProduct({
                    product: item.product,
                    attributes: item.attributes,
                  });
                }}
              >
                +
              </button>
              <p className="quantity">{this.state.cart[itemIndex].quantity}</p>
              <button
                className="quantity-changer"
                onClick={() => {
                  this.props.removeProduct({
                    product: item.product,
                    attributes: item.attributes,
                  });
                }}
              >
                -
              </button>
            </div>
            <div className="gallery">
              <img
                src={item.product.gallery[this.state.displayIndex[itemIndex]]}
                alt="display"
                className="display-image"
              />
            </div>
          </div>
        </div>
      );
    });
  }

  getTotalCost() {
    const selectedCurrency = this.props.currency.symbol;
    return this.props.cart.reduce((previousCost, currentItem) => {
      return (
        previousCost +
        currentItem.product.prices.filter(
          (price) => price.currency.symbol === selectedCurrency
        )[0].amount *
          currentItem.quantity
      );
    }, 0);
  }

  render() {
    return (
      <StyledCartOverlay>
        <div className="overlay-title">
          <span className="my-bag">My Bag, </span>
          <span className="item-count">
            {this.state.cart.reduce(
              (previousQuantity, currentItem) =>
                previousQuantity + currentItem.quantity,
              0
            )}{" "}
            items
          </span>
        </div>
        <div className="cart-items">
          {this.createCartItems(this.props.cart)}
        </div>
        <div className="cart-total">
          <span className="total">Total</span>{" "}
          <span className="cost">
            {this.props.currency.symbol}
            {Math.floor(this.getTotalCost() * 100) / 100}
          </span>
        </div>
        <div className="cart-buttons">
          <Link className="link" to="/cart">
            <button className="view-bag">view bag</button>
          </Link>
          <Link className="link">
            <button className="checkout" to="/cart">
              check out
            </button>
          </Link>
        </div>
      </StyledCartOverlay>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  addProduct,
  removeProduct,
  updateAttribute,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartOverlay);
