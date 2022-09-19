import itemEquals from "../utils/itemEquals";

const cart = (state = [], action) => {
  let productExists = false;
  switch (action.type) {
    case "CLEAR_CART":
      return [];
    case "ADD_PRODUCT":
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
    case "REMOVE_PRODUCT":
      return state
        .map((cartItem) => {
          return itemEquals(cartItem, action.payload)
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem;
        })
        .filter((item) => item.quantity !== 0);
    case "UPDATE_ATTRIBUTE":
      // Updating attributes
      const updatedState = state.map((item, itemIndex) => {
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
      });
      // Putting together items with the same attributes
      for (let i = 0; i < updatedState.length; i++) {
        for (let j = 0; j < updatedState.length; j++) {
          if (itemEquals(updatedState[i], updatedState[j]) && i !== j) {
            // duplicate item found
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
