import styled from "styled-components";

const darkColor = "#1d1f22";
const greenColor = "#5ece7b";

const StyledCartPage = styled.div`
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

  /* Cart */

  .cart-title {
    font-weight: 700;
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 20px;
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

  .right-panel {
    margin-left: auto;
  }

  .product-brand {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 10px;
  }

  .product-name {
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 10px;
  }

  .product-price {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 10px;
  }

  .right-panel {
    display: flex;
  }

  .quantity-changer-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .quantity-changer {
    width: 45px;
    height: 45px;
    border: 1px solid #1d1f22;
    color: #1d1f22;
    font-size: 30px;
    font-weight: 300;
    margin-left: 10px;
    margin-right: 20px;
    background: white;
    cursor: pointer;
  }

  .quantity {
    font-weight: 500;
    font-size: 40px;
  }

  .image-switcher-container {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .image-switcher {
    background: rgba(0, 0, 0, 0.7);
    border: none;
    color: white;
    width: 24px;
    height: 24px;
    margin: 5px;
    cursor: pointer;
  }

  .gallery {
    position: relative;
    width: 200px;
    height: 100%;
  }
  .display-image {
    width: 100%;
  }

  /* Cart details */

  .purchase-info {
    display: grid;
    width: max-content;
    height: max-content;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    margin: 20px 0;
  }

  .purchase-key {
    font-weight: 400;
    font-size: 24px;
    margin: 3px;
  }

  .purchase-value {
    font-weight: 700;
    font-size: 24px;
    margin: 3px;
  }

  .order-btn {
    text-transform: uppercase;
    background: ${greenColor};
    color: white;
    font-weight: 600;
    font-size: 16px;
    border: none;
    width: 280px;
    padding: 16px 32px;
    margin-top: 20px;
    cursor: pointer;
  }

  .order-btn:active {
    background: rgb(240, 240, 240);
    color: ${greenColor};
  }
`;

export default StyledCartPage;
