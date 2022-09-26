const setOverlay = (value) => {
  return {
    type: "SET_OVERLAY",
    payload: value,
  };
};

const toggleOverlay = () => {
  return {
    type: "TOGGLE_OVERLAY",
  };
};

export { setOverlay, toggleOverlay };
