import React from "react";
import Display from "./Display";
import Gallery from "./Gallery";
import StyledProductPage from "./ProductPage.styled";
import Selection from "./Selection";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { GET_PRODUCT } from "../../GraphQL/Queries";
import QueryHandler from "../../GraphQL/QueryHandler";

function withParams(Component) {
  return (props) => (
    <Component
      {...props}
      params={useParams()}
      navigate={useNavigate()}
      location={useLocation()}
    />
  );
}

class ProductPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayImage: 0,
    };
  }

  setDisplayImage = (index) => {
    this.setState({
      displayImage: index,
    });
  };

  render() {
    return QueryHandler({
      query: GET_PRODUCT,
      variables: { id: this.props.params.id },
      loadedElement: (data) => (
        <StyledProductPage className="page">
          <Gallery
            images={data.product.gallery}
            setDisplayImage={this.setDisplayImage}
          />
          <Display image={data.product.gallery[this.state.displayImage]} />
          <Selection
            product={data.product}
            navigateBack={() => {
              const { navigate, location } = this.props;
              navigate(location.state.from || "category/all");
            }}
          />
        </StyledProductPage>
      ),
    });
  }
}

export default withParams(ProductPage);
