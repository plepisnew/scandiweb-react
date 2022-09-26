const currency = (
  state = {
    label: "USD",
    symbol: "$",
  },
  action
) => {
  switch (action.type) {
    case "SET_CURRENCY":
      return {
        label: action.payload.label,
        symbol: action.payload.symbol,
      };
    default:
      return state;
  }
};

export default currency;
