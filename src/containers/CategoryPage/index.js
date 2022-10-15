import React from "react";
import StyledCategoryPage from "./CategoryPage.styled";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS } from "../../GraphQL/Queries";
import ProductCard from "./ProductCard";
import QueryHandler from "../../GraphQL/QueryHandler";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class CategoryPage extends React.PureComponent {
  createProductCards(products) {
    const { category } = this.props.params;
    return products.map((product) => (
      <ProductCard
        product={product}
        key={product.id}
        from={`/category/${category}`}
      />
    ));
  }

  render() {
    const { category } = this.props.params;

    return QueryHandler({
      query: GET_PRODUCTS,
      variables: { category: category || "all" },

      loadedElement: (data) => (
        <StyledCategoryPage>
          <div className="category-title">{category}</div>
          <div className="product-cards">
            {this.createProductCards(data.category.products)}
          </div>
        </StyledCategoryPage>
      ),
    });
  }
}

export default withParams(CategoryPage);
