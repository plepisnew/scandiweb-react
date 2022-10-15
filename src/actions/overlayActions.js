import { Actions } from "../reducers/overlay";

const setOverlay = (value) => {
  return {
    type: Actions.SET_OVERLAY,
    payload: value,
  };
};

const toggleOverlay = () => {
  return {
    type: Actions.TOGGLE_OVERLAY,
  };
};

export { setOverlay, toggleOverlay };
