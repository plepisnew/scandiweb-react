# Scandiweb React

React online shopping cart.  
Applicant name and surname: Ansis Plepis

# Stack

- Apollo Client for querying backend
- Redux for state management
- Styled Components for styling

# Notes

- Queries are handled using a custom higher order function QueryHandler and use `fetchPolicy="no-cache"` (otherwise attributes get mixed up between two products)
- When changing an item's attributes in the cart, items with like attributes are immediately combined by adding their quantities together.
- Instead of making a re-usable Cart component since there are certain distinctions and style differences between the two, I created a separate CartPage and CartOverlay component.
