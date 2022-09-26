import cart from "./cart";
import currency from "./currency";
import overlay from "./overlay";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cart,
  currency,
  overlay,
});

export default rootReducer;
