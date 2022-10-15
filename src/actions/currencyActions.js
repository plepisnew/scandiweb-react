import { Actions } from "../reducers/currency";

const setCurrency = (currency) => {
  return {
    type: Actions.SET_CURRENCY,
    payload: currency,
  };
};

export default setCurrency;
