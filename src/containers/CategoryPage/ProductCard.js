import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProduct } from "../../actions/cartActions";

class ProductCard extends React.PureComponent {
  createProductImage() {
    const { product, addProduct, from } = this.props;

    return (
      <div className="product-image-container">
        {product.inStock && (
          <img
            src="/images/add_cart.png"
            className="add-cart-icon"
            alt="cart icon"
            onClick={() => {
              addProduct({
                product,
                attributes: product.attributes.map((attribute) => 0),
              });
            }}
          />
        )}
        <Link to={`/product/${product.id}`} state={{ from }}>
          <img
            src={product.gallery[0]}
            alt={product.name}
            className="product-image"
          />

          <div className="center-text">out of stock</div>
        </Link>
      </div>
    );
  }

  createProductData() {
    const { currency, product } = this.props;

    const selectedCurrency = currency.symbol;
    const selectedPrice = product.prices.filter(
      (price) => price.currency.symbol === selectedCurrency
    )[0];
    const selectedCost = selectedPrice.amount;
    return (
      <div className="product-text">
        <p className="product-name">{product.name}</p>
        <p className="product-cost">{`${selectedCurrency} ${selectedCost}`}</p>
      </div>
    );
  }

  render() {
    const { product } = this.props;
    return (
      <div className={"product-card " + (!product.inStock && "out-of-stock")}>
        {this.createProductImage()}
        {this.createProductData()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

const mapDispatchToProps = {
  addProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
