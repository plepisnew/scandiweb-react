const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

const addProduct = ({ product, attributes }) => {
  return {
    type: "ADD_PRODUCT",
    payload: {
      product,
      attributes,
    },
  };
};

const removeProduct = ({ product, attributes }) => {
  // id is not enough since attributeset is required
  return {
    type: "REMOVE_PRODUCT",
    payload: {
      product,
      attributes,
    },
  };
};

const updateAttribute = ({ itemIndex, attributeIndex, index }) => {
  return {
    type: "UPDATE_ATTRIBUTE",
    payload: {
      itemIndex,
      attributeIndex,
      index,
    },
  };
};

export { clearCart, addProduct, removeProduct, updateAttribute };
