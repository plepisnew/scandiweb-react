import {
  addProduct,
  removeProduct,
  clearCart,
  updateAttribute,
} from "./cartActions";
import currencyActions from "./currencyActions";
import { toggleOverlay, setOverlay } from "./overlayActions";

const allActions = {
  addProduct,
  removeProduct,
  clearCart,
  currencyActions,
  updateAttribute,
  toggleOverlay,
  setOverlay,
};

export default allActions;
