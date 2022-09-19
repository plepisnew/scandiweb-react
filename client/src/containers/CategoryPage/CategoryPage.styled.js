import styled from "styled-components";

export default styled.div`
  .category-title {
    font-weight: 400;
    font-size: 42px;
    text-transform: capitalize;
  }

  .product-cards {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .product-card {
    position: relative;
    padding: 16px;
    margin: 40px 15px 40px;
    transition: box-shadow 200ms;
  }

  .product-card:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
  }

  .view-product {
    visibility: hidden;
    position: absolute;
    right: 10px;
    transform: translateY(50%);
    bottom: 0;
  }

  .view-product-icon {
    width: 52px;
    height: 52px;
  }

  .product-card:hover .view-product {
    visibility: visible;
  }

  .product-text {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
  }

  .product-name {
    font-weight: 300;
    font-size: 18px;
    color: #1d1f22;
  }

  .product-cost {
    font-weight: 500;
    font-size: 18px;
    color: #1d1f22;
  }

  .product-image-container {
    position: relative;
  }

  .product-image {
    background: white;
    object-fit: scale-down;
    max-width: 100%;
    width: 450px;
    height: 330px;
  }

  .out-of-stock .center-text {
    visibility: visible;
  }

  .out-of-stock img {
    opacity: 0.4;
  }

  .center-text {
    visibility: hidden;
    font-weight: 400;
    color: #8d8f9a;
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
  }
`;
