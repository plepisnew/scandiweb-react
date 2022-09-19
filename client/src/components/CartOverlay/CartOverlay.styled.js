import styled from "styled-components";

const greenColor = "#5ece7b";
const darkColor = "#1d1f22";

export default styled.div`
  /* Product */

  .overlay-title {
    margin-bottom: 20px;
  }

  .my-bag {
    font-size: 16px;
    font-weight: 700;
  }

  .item-count {
    font-weight: 500;
  }

  .product-brand {
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 8px;
  }

  .product-name {
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 8px;
  }

  .product-price {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 8px;
  }

  .left-panel {
  }

  .right-panel {
    margin-left: auto;
    display: flex;
  }

  .quantity-changer-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .quantity-changer {
    width: 24px;
    height: 24px;
    border: 1px solid ${darkColor};
    color: ${darkColor};
    font-size: 20px;
    font-weight: 300;
    margin-left: 10px;
    margin-right: 20px;
    background: white;
    cursor: pointer;
  }

  .quantity {
    font-weight: 500;
    font-size: 16px;
  }

  .display-image {
    max-width: 200px;
    height: auto;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
  }

  .cart-item {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    padding: 20px 0;
    display: flex;
  }

  /* Attribute */

  .attribute-name {
    font-size: 14px;
    font-weight: 400;
    font-family: Raleway;
    text-transform: capitalize;
  }

  .attribute-container {
    margin-top: 10px;
  }

  .text-selector {
    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 14px;
    margin: 5px 10px 0 0;
    display: inline-block;
    padding: 5px 10px;
    color: ${darkColor};
    border: 1px solid ${darkColor};
    background: white;
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

  .cart-total {
    display: flex;
    margin-top: 10px;
  }

  .total {
    flex: 1;
    font-size: 16px;
    font-weight: 500;
  }

  .cost {
    font-size: 16px;
    font-weight: 700;
    font-family: Roboto Condensed;
  }

  .cart-buttons {
    margin-top: 10px;
    display: flex;
  }

  .cart-buttons Link {
    flex: 1;
  }

  .view-bag,
  .checkout {
    flex: 1;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    padding: 10px 0;
    cursor: pointer;
    width: 100%;
  }

  .view-bag {
    border: 1px solid black;
    color: black;
    background: white;
  }
  .view-bag:active {
    background: black;
    color: white;
  }

  .link {
    margin: 5px;
    flex: 1;
  }

  .checkout {
    border: 1px solid ${greenColor};
    color: white;
    background: ${greenColor};
  }
  .checkout:active {
    background: white;
    color: ${greenColor};
  }
`;
