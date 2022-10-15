import { Actions } from "../reducers/cart";

const clearCart = () => {
  return {
    type: Actions.CLEAR_CART,
  };
};

const addProduct = ({ product, attributes }) => {
  return {
    type: Actions.ADD_PRODUCT,
    payload: {
      product,
      attributes,
    },
  };
};

const removeProduct = ({ product, attributes }) => {
  // id is not enough since attributeset is required
  return {
    type: Actions.REMOVE_PRODUCT,
    payload: {
      product,
      attributes,
    },
  };
};

const updateAttribute = ({ itemIndex, attributeIndex, index }) => {
  return {
    type: Actions.UPDATE_ATTRIBUTE,
    payload: {
      itemIndex,
      attributeIndex,
      index,
    },
  };
};

export { clearCart, addProduct, removeProduct, updateAttribute };
