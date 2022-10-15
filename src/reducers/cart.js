import itemEquals from "../utils/itemEquals";

export const Actions = {
  CLEAR_CART: "CLEAR_CART",
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  UPDATE_ATTRIBUTE: "UPDATE_ATTRIBUTE",
};

const cart = (state = [], action) => {
  let productExists = false;
  switch (action.type) {
    case Actions.CLEAR_CART:
      return [];
    case Actions.ADD_PRODUCT:
      for (let i = 0; i < state.length; i++) {
        if (itemEquals(state[i], action.payload)) {
          productExists = true;
        }
      }
      if (productExists)
        return state.map((cartItem) =>
          itemEquals(cartItem, action.payload)
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      return [...state, { ...action.payload, quantity: 1 }];
    case Actions.REMOVE_PRODUCT:
      return state
        .map((cartItem) => {
          return itemEquals(cartItem, action.payload)
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        })
        .filter((item) => item.quantity !== 0);
    case Actions.UPDATE_ATTRIBUTE:
      // Updating attributes

      // JSON parse to avoid mutating state by getting deep copy
      const updatedState = JSON.parse(
        JSON.stringify(
          state.map((item, itemIndex) => {
            if (itemIndex === action.payload.itemIndex) {
              return {
                ...item,
                attributes: item.attributes.map((attribute, attributeIndex) => {
                  if (attributeIndex === action.payload.attributeIndex) {
                    return action.payload.index;
                  }
                  return attribute;
                }),
              };
            }
            return item;
          })
        )
      );

      // Putting together items with the same attributes
      for (let i = 0; i < updatedState.length; i++) {
        for (let j = 0; j < updatedState.length; j++) {
          if (itemEquals(updatedState[i], updatedState[j]) && i !== j) {
            updatedState[j].quantity += updatedState[i].quantity;
            updatedState.splice(i, 1);
            return updatedState;
          }
        }
      }
      return updatedState;
    default:
      return state;
  }
};

export default cart;
