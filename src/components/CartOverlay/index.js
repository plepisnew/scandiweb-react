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

class CartOverlay extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart,
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      cart: props.cart,
    };
  }

  setAttribute(itemIndex, attributeIndex, index) {
    this.props.updateAttribute({ itemIndex, attributeIndex, index });
  }

  createCartItems() {
    const { cart, currency, addProduct, removeProduct } = this.props;

    return (
      <div className="cart-items">
        {cart.map((item, itemIndex) => {
          const product = item.product;
          const selectedCurrency = currency.symbol;
          const selectedPrice = product.prices.filter(
            (price) => price.currency.symbol === selectedCurrency
          )[0];
          const selectedCost = selectedPrice.amount;

          const createDataPanel = () => {
            return (
              <div className="left-panel">
                <p className="product-brand">{product.brand}</p>
                <p className="product-name">{product.name}</p>
                <p className="product-price">
                  {selectedCurrency}
                  {selectedCost}
                </p>
                <div className="attributes">
                  {product.attributes.map((attribute, attributeIndex) => (
                    <Attribute
                      setAttribute={(index) =>
                        this.setAttribute(itemIndex, attributeIndex, index)
                      }
                      attribute={attribute}
                      key={attribute.id}
                      index={
                        this.state.cart[itemIndex].attributes[attributeIndex]
                      }
                    />
                  ))}
                </div>
              </div>
            );
          };

          const createImagePanel = () => {
            return (
              <div className="right-panel">
                <div className="quantity-changer-container">
                  <button
                    className="quantity-changer"
                    onClick={() => {
                      addProduct({
                        product,
                        attributes: item.attributes,
                      });
                    }}
                  >
                    +
                  </button>
                  <p className="quantity">
                    {this.state.cart[itemIndex].quantity}
                  </p>
                  <button
                    className="quantity-changer"
                    onClick={() => {
                      removeProduct({
                        product,
                        attributes: item.attributes,
                      });
                    }}
                  >
                    -
                  </button>
                </div>
                <div className="gallery">
                  <img
                    src={product.gallery[0]}
                    alt="display"
                    className="display-image"
                  />
                </div>
              </div>
            );
          };

          return (
            <div key={JSON.stringify(item)} className="cart-item">
              {createDataPanel()}
              {createImagePanel()}
            </div>
          );
        })}
      </div>
    );
  }

  getTotalCost() {
    const { currency, cart } = this.props;
    const selectedCurrency = currency.symbol;
    return cart.reduce((previousCost, currentItem) => {
      return (
        previousCost +
        currentItem.product.prices.filter(
          (price) => price.currency.symbol === selectedCurrency
        )[0].amount *
          currentItem.quantity
      );
    }, 0);
  }

  createTitle() {
    return (
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
    );
  }

  createCartTotal() {
    const { currency } = this.props;
    return (
      <div className="cart-total">
        <span className="total">Total</span>{" "}
        <span className="cost">
          {currency.symbol}
          {Math.floor(this.getTotalCost() * 100) / 100}
        </span>
      </div>
    );
  }

  createCartButtons() {
    return (
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
    );
  }

  render() {
    return (
      <StyledCartOverlay>
        {this.createTitle()}
        {this.createCartItems()}
        {this.createCartTotal()}
        {this.createCartButtons()}
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
