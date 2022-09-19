import React from "react";
import { connect } from "react-redux";
import {
  addProduct,
  removeProduct,
  updateAttribute,
} from "../../actions/cartActions";
import StyledCartPage from "./CartPage.styled";
import Attribute from "../ProductPage/Attribute";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    const displayIndex = [];
    props.cart.forEach(() => displayIndex.push(0));
    this.state = {
      displayIndex,
      cart: props.cart,
    };
  }

  // MVP
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      cart: props.cart,
    };
  }

  /**
   * Changes `attributeIndex`th attribute of the `itemIndex`th item in the cart to `index`
   * @param {number} itemIndex index of the item in the cart
   * @param {number} attributeIndex index of the attribute of the item
   * @param {number} index selected attribute
   */
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
              {/* Instead of having a cyclic switcher, I added min and max index since it felt nicer */}
              <div className="image-switcher-container">
                <button
                  className="image-switcher"
                  onClick={() => {
                    const newIndex = this.state.displayIndex[itemIndex] - 1;
                    this.setState({
                      ...this.state,
                      displayIndex: this.state.displayIndex.map((i, j) => {
                        if (j === itemIndex) return newIndex < 0 ? 0 : newIndex;
                        return i;
                      }),
                    });
                  }}
                >
                  {"<"}
                </button>
                <button
                  className="image-switcher"
                  onClick={() => {
                    const newIndex = this.state.displayIndex[itemIndex] + 1;
                    this.setState({
                      ...this.state,
                      displayIndex: this.state.displayIndex.map((i, j) => {
                        if (
                          j === itemIndex &&
                          newIndex < item.product.gallery.length
                        ) {
                          return newIndex;
                        }
                        return i;
                      }),
                    });
                  }}
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  truncateCost(cost) {
    return Math.floor(100 * cost) / 100;
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
    const totalCost = this.getTotalCost();
    return (
      <StyledCartPage className="page">
        <p className="cart-title">cart</p>
        <div className="cart-items">
          {this.createCartItems(this.props.cart)}
        </div>
        <div className="purchase-info">
          <span className="purchase-key">Tax 21%:</span>
          <span className="purchase-value">
            {this.props.currency.symbol}
            {this.truncateCost(totalCost * 0.21)}
          </span>
          <span className="purchase-key">Quantity:</span>
          <span className="purchase-value">
            {this.state.cart.reduce(
              (previousQuantity, currentItem) =>
                previousQuantity + currentItem.quantity,
              0
            )}
          </span>
          <span className="purchase-key">Total:</span>
          <span className="purchase-value">
            {this.props.currency.symbol}
            {this.truncateCost(totalCost)}
          </span>
        </div>
        <button className="order-btn">Order</button>
      </StyledCartPage>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
