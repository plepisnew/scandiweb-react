import React from "react";
import { connect } from "react-redux";
import {
  addProduct,
  removeProduct,
  updateAttribute,
} from "../../actions/cartActions";
import StyledCartPage from "./CartPage.styled";
import Attribute from "../ProductPage/Attribute";

class CartPage extends React.PureComponent {
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
    const { currency, addProduct, removeProduct } = this.props;
    const { cart, displayIndex } = this.state;
    return items.map((item, itemIndex) => {
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
                  index={cart[itemIndex].attributes[attributeIndex]}
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
              <p className="quantity">{cart[itemIndex].quantity}</p>
              <button
                className="quantity-changer"
                onClick={() => {
                  removeProduct({
                    product,
                    attributes: item.attributes,
                  });
                  if (item.quantity === 1) {
                    this.setState({
                      displayIndex: displayIndex.filter(
                        (i, j) => j !== itemIndex
                      ),
                    });
                  }
                }}
              >
                -
              </button>
            </div>
            <div className="gallery">
              <img
                src={product.gallery[displayIndex[itemIndex]]}
                alt="display"
                className="display-image"
              />
              {/* Instead of having a cyclic switcher, I added min and max index since it felt nicer */}
              <div className="image-switcher-container">
                <button
                  className="image-switcher"
                  onClick={() => {
                    const newIndex = displayIndex[itemIndex] - 1;
                    this.setState({
                      displayIndex: displayIndex.map((i, j) => {
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
                    const newIndex = displayIndex[itemIndex] + 1;
                    this.setState({
                      displayIndex: displayIndex.map((i, j) => {
                        if (
                          j === itemIndex &&
                          newIndex < product.gallery.length
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
        );
      };

      return (
        <div key={JSON.stringify(item)} className="cart-item">
          {createDataPanel()}
          {createImagePanel()}
        </div>
      );
    });
  }

  createPurchaseInfo() {
    const totalCost = this.getTotalCost();
    const { currency } = this.props;

    return (
      <div className="purchase-info">
        <span className="purchase-key">Tax 21%:</span>
        <span className="purchase-value">
          {currency.symbol}
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
          {currency.symbol}
          {this.truncateCost(totalCost)}
        </span>
      </div>
    );
  }

  truncateCost(cost) {
    return Math.floor(100 * cost) / 100;
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
  render() {
    const { cart } = this.props;

    return (
      <StyledCartPage className="page">
        <p className="cart-title">cart</p>
        <div className="cart-items">{this.createCartItems(cart)}</div>
        {this.createPurchaseInfo()}
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
