# Scandiweb React

React online shopping cart.  
Applicant name and surname: Ansis Plepis

## Update 16.10.2022.
### Changes:
- The grey shadow no longer has margins on the left and right sides, taking up the full width of the page (when the Cart Overlay is opened)
- Cart Overlay is closed when a click occurs outside of the overlay or the link changes.
- Attributes in the overlay are non-clickable
- The slider is infinite (using modular arithmetic instead of min-max).
- Arrows for display images are not shown if they do nothing (if only 1 image to display)
- React Redux: Action names are defined in a single object instead of in 2 different files, potentially causing clashes.
- Destructured all objects that access properties of `this.props` and `this.state`

### Commits: 
- [f37e8bdc79c0651705263100153e834cc55c6640](https://github.com/plepisnew/scandiweb-react/commit/f37e8bdc79c0651705263100153e834cc55c6640)
- [d6f1e97542327d970a356a81dc99e3c2048f99b2](https://github.com/plepisnew/scandiweb-react/commit/d6f1e97542327d970a356a81dc99e3c2048f99b2)

## Update 26.09.2022.
### Changes:
- Added automatic backwards navigation when adding an item to cart from PDP.
- Better code readability (render methods, prop/state destructuring, cleaner setState)
- Out of stock products can be viewed, but cannot be added to cart
- Design fixes (max width 1440px, fixed widths for product cards, cart overlay and images)
- Other tiny fixes
### Commits:
- https://github.com/plepisnew/scandiweb-react/commit/98b1afcd750e1b7f1e0ae91e7b72810c4fedd2b0

## Update 21.09.2022.
### Changes:
- The cart overlay (in the header) was missing a black bubble displaying the total quantity of items in the cart. If it makes a difference, the functionality is available in the `cart-quanity` branch [here](https://github.com/plepisnew/scandiweb-react/tree/cart-quantity)

# Stack

- Apollo Client for querying backend
- Redux for state management
- Styled Components for styling

# Notes

- Queries are handled using a custom higher order function QueryHandler and use `fetchPolicy="no-cache"` (otherwise attributes get mixed up between two products)
- When changing an item's attributes in the cart, items with like attributes are immediately combined by adding their quantities together.
- Instead of making a re-usable Cart component since there are certain distinctions and style differences between the two, I created a separate CartPage and CartOverlay component.
