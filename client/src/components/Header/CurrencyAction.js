import React from "react";
import QueryHandler from "../../GraphQL/QueryHandler";
import { GET_CURRENCIES } from "../../GraphQL/Queries";
import setCurrency from "../../actions/currencyActions";
import { connect } from "react-redux";

class CurrencyAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectorOpened: false,
    };
  }

  createCurrencies(currencies) {
    return currencies.map((currency) => (
      <div
        key={currency.label}
        className={
          "currency " +
          (this.props.currency.label === currency.label && "selected-currency")
        }
        onClick={() => this.props.setCurrency(currency)}
      >
        {currency.symbol} {currency.label}
      </div>
    ));
  }

  render() {
    return QueryHandler({
      query: GET_CURRENCIES,
      loadedElement: (data) => (
        <div className="currency-action">
          <img
            src="/images/currency.png"
            alt="currency"
            width={32}
            height={29}
            onClick={() =>
              this.setState({ selectorOpened: !this.state.selectorOpened })
            }
          />
          <div
            onClick={() =>
              this.setState({ selectorOpened: !this.state.selectorOpened })
            }
          >
            <img
              src="/images/expand_currency.png"
              alt="expand currency"
              style={{
                transition: "transform 200ms",
                transform: this.state.selectorOpened && "scaleY(-1)",
              }}
              width={10}
            />
          </div>
          <div
            className={`currencies ${
              this.state.selectorOpened && "currencies-open"
            }`}
          >
            {this.createCurrencies(data.currencies)}
          </div>
        </div>
      ),
    });
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

const mapDispatchToProps = {
  setCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyAction);
