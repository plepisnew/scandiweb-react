import React from "react";
import Attribute from "./Attribute";
import { connect } from "react-redux";
import { addProduct } from "../../actions/cartActions";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

function withNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

class Selection extends React.PureComponent {
  constructor(props) {
    super(props);
    const { product } = this.props;
    this.state = {
      product,
      attributes: product.attributes.map((attribute) => 0),
    };
  }

  setAttribute = (index, value) => {
    const { attributes } = this.state;
    this.setState({
      attributes: attributes.map((attribute, attributeIndex) =>
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
            const { navigate } = this.props;
            const { product, attributes } = this.state;
            navigate("/");
            addProduct({
              product,
              attributes,
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

export default withNavigation(
  connect(mapStateToProps, mapDispatchToProps)(Selection)
);
