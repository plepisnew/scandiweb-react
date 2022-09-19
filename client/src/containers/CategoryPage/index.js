import React from "react";
import StyledCategoryPage from "./CategoryPage.styled";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS } from "../../GraphQL/Queries";
import ProductCard from "./ProductCard";
import QueryHandler from "../../GraphQL/QueryHandler";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class CategoryPage extends React.Component {
  createProductCards(products) {
    return products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));
  }

  render() {
    return QueryHandler({
      query: GET_PRODUCTS,
      variables: { category: this.props.params.category || "all" },

      loadedElement: (data) => (
        <StyledCategoryPage className="page">
          <div className="category-title">{this.props.params.category}</div>
          <div className="product-cards">
            {this.createProductCards(data.category.products)}
          </div>
        </StyledCategoryPage>
      ),
    });
  }
}

export default withParams(CategoryPage);
