export const Actions = {
  TOGGLE_OVERLAY: "TOGGLE_OVERLAY",
  SET_OVERLAY: "SET_OVERLAY",
};

const overlay = (state = false, action) => {
  switch (action.type) {
    case Actions.TOGGLE_OVERLAY:
      return !state;
    case Actions.SET_OVERLAY:
      return action.payload;
    default:
      return state;
  }
};

export default overlay;
