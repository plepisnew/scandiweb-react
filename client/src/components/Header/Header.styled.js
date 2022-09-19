import styled from "styled-components";

const selectedColor = "#5ece7b";
const staticColor = "#1d1f22";
const selectedGrey = "#EEEEEE";

export default styled.div`
  & {
    position: absolute;
    background: white;
    left: 0;
    right: 0;
    top: 0;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  /* Navigation */

  .navigation {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    position: absolute;
    width: 234px;
    height: 56px;
    left: 101px;
    bottom: 0px;
  }

  .nav-item {
    padding: 0px 16px 20px 16px;
    margin: 5px;
    color: ${staticColor};
    border-bottom: 2px solid ${staticColor};
  }

  .nav-link {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .selected {
    color: ${selectedColor};
    border-bottom: 2px solid ${selectedColor};
  }

  /* Actions */

  .actions {
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    right: 101px;
    top: 23px;
  }

  /* Currency Action */

  .currency-action {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    margin-right: 10px;
  }

  ${
    "" /* For some reason scale: 0 still makes the element clickable, so the random transform: translate3d(0, 0, 0) is needed */
  }
  .currencies {
    top: 40px;
    width: 100px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.08);
    position: absolute;
    scale: 0;
    transition: scale 200ms;
    animation-direction: alternate;
    transform-origin: top center;
    transform: translate3d(0, 0, 0);
  }

  .currencies-open {
    visibility: visible;
    scale: 1;
  }

  .currency {
    padding: 10px 15px 10px 15px;
    font-weight: 500;
    font-size: 18px;
    background: white;
  }

  .currency:hover {
    background: rgb(250, 250, 250);
  }

  .selected-currency {
    background: ${selectedGrey} !important;
  }

  /* Cart Action */

  .cart-action {
    position: relative;
  }

  .cart-overlay {
    position: absolute;
    z-index: 2;
    min-width: 300px;
    width: max-content;
    top: 50px;
    right: -20px;
    padding: 32px 16px;
    background: white;
    max-height: 70vh;
    overflow-y: scroll;
    scale: 0;
    transition: scale 200ms;
    transform-origin: top right;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .cart-overlay::-webkit-scrollbar {
    display: none;
  }

  .cart-overlay-open {
    scale: 1;
  }
`;
