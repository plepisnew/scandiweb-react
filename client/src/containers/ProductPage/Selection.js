import React from "react";
import Attribute from "./Attribute";
import { connect } from "react-redux";
import { addProduct } from "../../actions/cartActions";

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      attributes: this.props.product.attributes.map((attribute) => 0),
    };
  }

  setAttribute = (index, value) => {
    this.setState({
      ...this.state,
      attributes: this.state.attributes.map((attribute, attributeIndex) =>
        index === attributeIndex ? value : attribute
      ),
    });
  };

  render() {
    const selectedCurrency = this.props.currency.symbol;
    const selectedPrice = this.props.product.prices.filter(
      (price) => price.currency.symbol === selectedCurrency
    )[0];
    const selectedCost = selectedPrice.amount;
    return (
      <div className="selection">
        <div className="product-info">
          <p className="product-brand">{this.props.product.brand}</p>
          <p className="product-name">{this.props.product.name}</p>
        </div>
        <div className="attributes">
          {this.props.product.attributes.map((attribute, attributeIndex) => (
            <Attribute
              setAttribute={(value) => this.setAttribute(attributeIndex, value)}
              attribute={attribute}
              key={attribute.id}
            />
          ))}
        </div>
        <p className="price">price:</p>
        <p className="product-price">{`${selectedCurrency}${selectedCost}`}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => {
            this.props.addProduct({
              product: this.state.product,
              attributes: this.state.attributes,
            });
          }}
        >
          add to cart
        </button>
        <div
          className="product-description"
          dangerouslySetInnerHTML={{ __html: this.props.product.description }}
        ></div>
      </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
