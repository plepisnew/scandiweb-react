import React from "react";
import Attribute from "./Attribute";
import { connect } from "react-redux";
import { addProduct } from "../../actions/cartActions";
import parse from "html-react-parser";

class Selection extends React.PureComponent {
  constructor(props) {
    super(props);
    const { product } = props;
    this.state = {
      product,
      attributes: product.attributes.map((attribute) => 0),
    };
  }

  setAttribute = (index, value) => {
    this.setState({
      attributes: this.state.attributes.map((attribute, attributeIndex) =>
        index === attributeIndex ? value : attribute
      ),
    });
  };

  render() {
    const { currency, product, addProduct } = this.props;
    const selectedCurrency = currency.symbol;
    const selectedPrice = product.prices.filter(
      (price) => price.currency.symbol === selectedCurrency
    )[0];
    const selectedCost = selectedPrice.amount;
    return (
      <div className="selection">
        <div className="product-info">
          <p className="product-brand">{product.brand}</p>
          <p className="product-name">{product.name}</p>
        </div>
        <div className={`attribute ${!product.inStock && "disabled"}`}>
          {product.attributes.map((attribute, attributeIndex) => (
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
          className={`add-to-cart-btn ${!product.inStock && "disabled"}`}
          onClick={() => {
            this.props.navigateBack();
            addProduct({
              product: this.state.product,
              attributes: this.state.attributes,
            });
          }}
        >
          add to cart
        </button>
        <div className="product-description">{parse(product.description)}</div>
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
