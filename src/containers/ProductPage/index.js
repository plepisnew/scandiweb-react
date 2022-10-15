import React from "react";
import Display from "./Display";
import Gallery from "./Gallery";
import StyledProductPage from "./ProductPage.styled";
import Selection from "./Selection";
import { useParams } from "react-router-dom";
import { GET_PRODUCT } from "../../GraphQL/Queries";
import QueryHandler from "../../GraphQL/QueryHandler";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
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
    const { id } = this.props.params;
    const { displayImage } = this.state;
    return QueryHandler({
      query: GET_PRODUCT,
      variables: { id },
      loadedElement: (data) => {
        const { product } = data.product;
        return (
          <StyledProductPage className="page">
            <Gallery
              images={product.gallery}
              setDisplayImage={this.setDisplayImage}
            />
            <Display image={product.gallery[displayImage]} />
            <Selection product={product} />
          </StyledProductPage>
        );
      },
    });
  }
}

export default withParams(ProductPage);
