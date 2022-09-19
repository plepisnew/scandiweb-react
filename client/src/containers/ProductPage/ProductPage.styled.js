import styled from "styled-components";

const greenColor = "#5ece7b";
const darkColor = "#1d1f22";

const StyledProductPage = styled.div`
  & {
    display: flex;
  }

  /* Images */

  .gallery {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .gallery-image {
    width: 87px;
    height: auto;
    margin: 10px;
    cursor: pointer;
  }

  .display {
    margin: 0px 30px 0px;
  }

  .display-image {
    width: 610px;
    height: auto;
  }

  /* Attributes */

  .attribute-name {
    font-size: 18px;
    font-weight: 700;
    font-family: Roboto Condensed;
    text-transform: uppercase;
  }

  .attribute-container {
    margin-top: 20px;
  }

  .text-selector {
    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 16px;
    margin: 5px 10px 0 0;
    display: inline-block;
    padding: 10px 20px;
    color: ${darkColor};
    border: 1px solid;
    cursor: pointer;
  }
  .text-selected {
    color: white;
    background: ${darkColor};
  }

  .swatch-selector {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin: 5px 10px 0 0;
  }

  .swatch-selected {
    outline: solid 1px ${greenColor};
    outline-offset: 1px;
  }

  /* Product */

  .product-description,
  .product-description * {
    width: 100%;
    font-family: Roboto;
    font-weight: 400;
    font-size: 16px;
  }

  .product-description {
    margin-top: 20px;
    max-width: 400px;
  }

  .product-price {
    font-weight: 700;
    font-size: 24px;
    margin-top: 20px;
    color: ${darkColor};
  }

  .product-brand {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .product-name {
    font-size: 30px;
    font-weight: 400;
  }

  .price {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    font-family: Roboto Condensed;
    margin-top: 30px;
    color: ${darkColor};
  }

  /* Add to cart */

  .add-to-cart-btn {
    text-transform: uppercase;
    background: ${greenColor};
    color: white;
    font-weight: 600;
    font-size: 16px;
    border: none;
    width: 100%;
    padding: 16px 32px;
    margin-top: 20px;
    cursor: pointer;
  }

  .add-to-cart-btn:active {
    background: rgb(240, 240, 240);
    color: ${greenColor};
  }
`;

export default StyledProductPage;
