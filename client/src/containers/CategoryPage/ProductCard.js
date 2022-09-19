import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ProductCard extends React.Component {
  render() {
    const selectedCurrency = this.props.currency.symbol;
    const selectedPrice = this.props.product.prices.filter(
      (price) => price.currency.symbol === selectedCurrency
    )[0];
    const selectedCost = selectedPrice.amount;
    return (
      <div
        className={
          "product-card " + (!this.props.product.inStock && "out-of-stock")
        }
      >
        <div className="product-image-container">
          <img
            src={this.props.product.gallery[0]}
            alt={this.props.product.name}
            className="product-image"
          />
          {this.props.product.inStock && (
            <Link
              className="view-product"
              to={`/product/${this.props.product.id}`}
            >
              <img
                src="/images/view_product.png"
                className="view-product-icon"
                alt="product icon"
              />
            </Link>
          )}
          <div className="center-text">out of stock</div>
        </div>
        <div className="product-text">
          <p className="product-name">{this.props.product.name}</p>
          <p className="product-cost">
            {`${selectedCurrency} ${selectedCost}`}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(mapStateToProps)(ProductCard);
