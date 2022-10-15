# Scandiweb React

React online shopping cart.  
Applicant name and surname: Ansis Plepis

Update 26.09.2022.
- Added automatic backwards navigation when adding an item to cart from PDP.
- Better code readability (render methods, prop/state destructuring, cleaner setState)
- Out of stock products can be viewed, but cannot be added to cart
- Design fixes (max width 1440px, fixed widths for product cards, cart overlay and images)
- Other tiny fixes https://github.com/plepisnew/scandiweb-react/commit/98b1afcd750e1b7f1e0ae91e7b72810c4fedd2b0

Update 21.09.2022.
- The cart overlay (in the header) was missing a black bubble displaying the total quantity of items in the cart. If it makes a difference, the functionality is available in the `cart-quanity` branch [here](https://github.com/plepisnew/scandiweb-react/tree/cart-quantity)
# Stack

- Apollo Client for querying backend
- Redux for state management
- Styled Components for styling

# Notes

- Queries are handled using a custom higher order function QueryHandler and use `fetchPolicy="no-cache"` (otherwise attributes get mixed up between two products)
- When changing an item's attributes in the cart, items with like attributes are immediately combined by adding their quantities together.
- Instead of making a re-usable Cart component since there are certain distinctions and style differences between the two, I created a separate CartPage and CartOverlay component.
