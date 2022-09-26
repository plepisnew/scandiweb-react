const overlay = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_OVERLAY":
      return !state;
    case "SET_OVERLAY":
      return action.payload;
    default:
      return state;
  }
};

export default overlay;
