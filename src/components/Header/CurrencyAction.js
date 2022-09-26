import React from "react";
import QueryHandler from "../../GraphQL/QueryHandler";
import { GET_CURRENCIES } from "../../GraphQL/Queries";
import setCurrency from "../../actions/currencyActions";
import { connect } from "react-redux";

class CurrencyAction extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectorOpened: false,
    };
  }

  createCurrencies(currencies) {
    const { currency, setCurrency } = this.props;
    return currencies.map((curr) => (
      <div
        key={curr.label}
        className={
          "currency " + (currency.label === curr.label && "selected-currency")
        }
        onClick={() => setCurrency(curr)}
      >
        {curr.symbol} {curr.label}
      </div>
    ));
  }

  render() {
    const { selectorOpened } = this.state;
    return QueryHandler({
      query: GET_CURRENCIES,
      loadedElement: (data) => (
        <div className="currency-action">
          <img
            src="/images/currency.png"
            alt="currency"
            width={32}
            height={29}
            onClick={() => this.setState({ selectorOpened: !selectorOpened })}
          />
          <div
            onClick={() => this.setState({ selectorOpened: !selectorOpened })}
          >
            <img
              src="/images/expand_currency.png"
              alt="expand currency"
              style={{
                transition: "transform 200ms",
                transform: selectorOpened && "scaleY(-1)",
              }}
              width={10}
            />
          </div>
          <div className={`currencies ${selectorOpened && "currencies-open"}`}>
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
