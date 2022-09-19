const setCurrency = (currency) => {
  return {
    type: "SET_CURRENCY",
    payload: currency,
  };
};

export default setCurrency;
