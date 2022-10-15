export const Actions = {
  SET_CURRENCY: "SET_CURRENCY",
};

const currency = (
  state = {
    label: "USD",
    symbol: "$",
  },
  action
) => {
  switch (action.type) {
    case Actions.SET_CURRENCY:
      return {
        label: action.payload.label,
        symbol: action.payload.symbol,
      };
    default:
      return state;
  }
};

export default currency;
