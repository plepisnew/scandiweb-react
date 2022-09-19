/**
 * Checks whether two cart items are equality by matching their corresponding product and attribute set (quantity is ignored)
 * @param {CartItem} item1
 * @param {CartItem} item2
 * @returns `true` or `false`
 */
const itemEquals = (item1, item2) => {
  return (
    JSON.stringify({
      product: item1.product,
      attributes: item1.attributes,
    }) ===
    JSON.stringify({
      product: item2.product,
      attributes: item2.attributes,
    })
  );
};

export default itemEquals;
